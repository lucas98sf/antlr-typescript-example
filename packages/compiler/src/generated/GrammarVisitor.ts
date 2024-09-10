// Generated from Grammar.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgramContext } from "./GrammarParser.js";
import { StatementContext } from "./GrammarParser.js";
import { LetStatementContext } from "./GrammarParser.js";
import { WriteStatementContext } from "./GrammarParser.js";
import { ReadStatementContext } from "./GrammarParser.js";
import { AssignmentStatementContext } from "./GrammarParser.js";
import { IfStatementContext } from "./GrammarParser.js";
import { WhileStatementContext } from "./GrammarParser.js";
import { DoWhileStatementContext } from "./GrammarParser.js";
import { ExpressionContext } from "./GrammarParser.js";
import { TypeContext } from "./GrammarParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class GrammarVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `GrammarParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.letStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetStatement?: (ctx: LetStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.writeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWriteStatement?: (ctx: WriteStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.readStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReadStatement?: (ctx: ReadStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.assignmentStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.ifStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.whileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStatement?: (ctx: WhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.doWhileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoWhileStatement?: (ctx: DoWhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GrammarParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
}

