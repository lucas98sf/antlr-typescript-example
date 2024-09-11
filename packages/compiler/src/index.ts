import * as fs from "fs";
import * as path from "path";
import { GrammarLexer } from "./generated/GrammarLexer";
import {
  GrammarParser,
  ProgramContext,
  LetStatementContext,
  WriteStatementContext,
  ReadStatementContext,
  AssignmentStatementContext,
  IfStatementContext,
  ExpressionContext,
  WhileStatementContext,
  DoWhileStatementContext,
} from "./generated/GrammarParser";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { GrammarVisitor } from "./generated/GrammarVisitor";
import { format } from "prettier";

class Visitor extends GrammarVisitor<string> {
  private declaredVariables: Set<string> = new Set();
  private usedVariables: Set<string> = new Set();
  private initializedVariables: Set<string> = new Set();
  private variableTypes: Map<string, string> = new Map();

  visitProgram = (ctx: ProgramContext): string => {
    const statements = ctx
      .statement()
      .map((stmt) => stmt.accept(this))
      .join("\n");

    const unusedVariables = [...this.declaredVariables].filter(
      (variable) => !this.usedVariables.has(variable)
    );

    if (unusedVariables.length > 0) {
      throw new Error(
        `Variables declared but not used: ${unusedVariables.join(", ")}`
      );
    }

    const uninitializedVariables = [...this.usedVariables].filter(
      (variable) => !this.initializedVariables.has(variable)
    );

    if (uninitializedVariables.length > 0) {
      throw new Error(
        `Variables used but not assigned a value: ${uninitializedVariables.join(", ")}`
      );
    }

    return statements;
  };

  visitLetStatement = (ctx: LetStatementContext): string => {
    const identifiers = ctx.IDENTIFIER();
    const types = ctx.type_();

    if (
      identifiers &&
      types &&
      (identifiers.length === types.length || types.length === 1)
    ) {
      identifiers.forEach((id, index) => {
        const variableName = id.getText();
        const variableType = types[index]?.getText() || types[0].getText();
        this.declaredVariables.add(variableName);
        this.variableTypes.set(variableName, variableType);
      });
    }

    const identifiersText = identifiers.map((id) => id.getText()).join(", ");
    const typesText = types.map((t) => t.getText()).join(", ");
    return `let ${identifiersText}: ${typesText === "text" ? "string" : "number"};`;
  };

  visitAssignmentStatement = (ctx: AssignmentStatementContext): string => {
    const variable = ctx.IDENTIFIER().getText();

    if (!this.declaredVariables.has(variable)) {
      throw new Error(`Variable '${variable}' is used before declaration`);
    }

    this.initializedVariables.add(variable);
    this.collectVariablesFromExpression(ctx.expression());

    this.usedVariables.add(variable);
    return `${variable} = ${ctx.expression().accept(this)};`;
  };

  visitReadStatement = (ctx: ReadStatementContext): string => {
    const variable = ctx.IDENTIFIER().getText();
    const prompt = ctx.STRING().getText().replaceAll(/"/g, "");

    if (!this.declaredVariables.has(variable)) {
      throw new Error(`Variable '${variable}' is used before declaration`);
    }

    this.initializedVariables.add(variable);

    const variableType = this.variableTypes.get(variable);

    let typePrompt = "";
    if (variableType === "text") {
      typePrompt = `[TEXT] ${prompt}`;
      return `${variable} = prompt("${typePrompt}") ?? "";`;
    } else {
      typePrompt = `[NUMBER] ${prompt}`;
      return `${variable} = parseFloat(prompt("${typePrompt}") ?? "");`;
    }
  };

  visitWriteStatement = (ctx: WriteStatementContext): string => {
    const expression = ctx.expression().accept(this);

    this.collectVariablesFromExpression(ctx.expression());

    return `console.log(${expression});`;
  };

  visitExpression = (ctx: ExpressionContext): string => {
    if (ctx.NUMBER()) {
      return ctx.NUMBER()!.getText();
    } else if (ctx.STRING()) {
      return ctx.STRING()!.getText();
    } else if (ctx.IDENTIFIER()) {
      const variable = ctx.IDENTIFIER()?.getText();
      this.collectVariablesFromExpression(ctx);
      return variable ? `${variable}` : "";
    } else if (ctx.children.length === 1) {
      return `(${this.visit(ctx.expression(0)!)})`;
    } else {
      const left = this.visit(ctx.expression(0)!);
      const operator = ctx.children[1].getText();
      const right = this.visit(ctx.expression(1)!);
      return `${left} ${operator} ${right}`;
    }
  };

  visitIfStatement = (ctx: IfStatementContext): string => {
    const condition = ctx.expression()?.accept(this) || "";
    const thenStatements = ctx
      .statement()
      .slice(0, -1)
      .map((stmt) => stmt.accept(this))
      .join("\n");
    const elseStatements =
      ctx.statement().length > 1 ? ctx.statement().at(-1)?.accept(this) : "";

    return (
      `if (${condition}) {\n${thenStatements}\n}` +
      (elseStatements ? ` else {\n${elseStatements}\n}` : "")
    );
  };

  visitWhileStatement = (ctx: WhileStatementContext): string => {
    const condition = ctx.expression().accept(this);
    const bodyStatements = ctx
      .statement()
      .map((stmt) => stmt.accept(this))
      .join("\n");
    return `while (${condition}) {\n${bodyStatements}\n}`;
  };

  visitDoWhileStatement = (ctx: DoWhileStatementContext): string => {
    const bodyStatements = ctx
      .statement()
      .map((stmt) => stmt.accept(this))
      .join("\n");
    const condition = ctx.expression().accept(this);
    return `do {\n${bodyStatements}\n} while (${condition});`;
  };

  private collectVariablesFromExpression(ctx: ExpressionContext): void {
    if (ctx && ctx.IDENTIFIER()) {
      const variable = ctx.IDENTIFIER()!.getText();
      if (this.declaredVariables.has(variable)) {
        this.usedVariables.add(variable);
      }
    }
    ctx
      .expression()
      ?.forEach((exp) => this.collectVariablesFromExpression(exp));
  }
}

export function compile(source: string): string | null {
  const inputStream = CharStream.fromString(source);

  const lexer = new GrammarLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new GrammarParser(tokenStream);
  const tree = parser.program();

  const visitor = new Visitor();

  return visitor.visit(tree);
}

export async function compileAndFormat(source: string): Promise<string> {
  try {
    return await format(compile(source) ?? "", { parser: "typescript" });
  } catch (error: any) {
    return error.message;
  }
}
