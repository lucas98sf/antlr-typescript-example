import { describe, it, expect } from "vitest";
import { compile } from ".";

describe("Compiler Tests", () => {
  it("should handle variables with diferent types", () => {
    const input = `
      new a, b : text;
      new x : number;
      a = read("enter a string");
      b = " ";
      x = read("enter a number");
      write(a + b + x);
    `;
    const output = compile(input);
    expect(output).toContain("let a, b: string;");
    expect(output).toContain("let x: number;");
    expect(output).toContain("console.log(a + b + x);");
  });

  it("should handle single-line comments", () => {
    const input = `
      // This is a comment
      new a : number;
      a = 10;
      write(a);
    `;
    const output = compile(input);
    expect(output).not.toContain("// This is a comment");
  });

  it("should handle If...else structure", () => {
    const input = `
      new a : number;
      a = 10;
      is a > 5 ?
        write("Greater than 5");
      : write("5 or less");
      ;
    `;
    const output = compile(input);
    expect(output).toContain("if (a > 5) {");
    expect(output).toContain('console.log("Greater than 5");');
    expect(output).toContain("else {");
    expect(output).toContain('console.log("5 or less");');
  });

  it("should handle while/do-while control structures", () => {
    const input = `
      new count : number;
      count = 0;
      ... count < 5 >
        write(count);
        count = count + 1;
      ;
      
      >
        write("Looping");
        count = read("Enter a number: ");
      ... count >= 5;
    `;
    const output = compile(input);
    expect(output).toContain("while (count < 5) {");
    expect(output).toContain("console.log(count);");
    expect(output).toContain("do {");
    expect(output).toContain('console.log("Looping");');
  });

  it("should perform arithmetic operations correctly", () => {
    const input = `
      new result : number;
      result = 2 + 3.14 - 5 * 8.56 / 100;
      write(result);
    `;
    const output = compile(input);
    expect(output).toContain("result = 4.712;");
  });

  it("should handle assignments correctly", () => {
    const input = `
      new a : number;
      a = 42;
      write(a);
    `;
    const output = compile(input);
    expect(output).toContain("a = 42;");
  });

  it("should handle input and output operations", () => {
    const input = `
      new name : text;
      name = read("Enter your name: ");
      write("Hello, " + name);
    `;
    const output = compile(input);
    expect(output).toContain(
      'name = prompt("[TEXT] Enter your name: ") ?? "";'
    );
    expect(output).toContain('console.log("Hello, " + name);');
  });

  it("should accept decimal numbers", () => {
    const input = `
      new value : number;
      value = 3.14;
      write(value);
    `;
    const output = compile(input);
    expect(output).toContain("value = 3.14;");
  });

  it("should check if a variable already has been declared", () => {
    const input = `
      new a : number;
      new a : text;
    `;
    expect(() => compile(input)).toThrowError(
      /Variable 'a' is already declared/
    );
  });

  it("should check is a variable has been previously declared", () => {
    const input = `
      new a : number;
      b = 10;
    `;
    expect(() => compile(input)).toThrowError(
      /Variable 'b' is used before declaration/
    );
  });

  it("should check is a variable has been declared and not used", () => {
    const input = `
      new a : number;
      new b : text;
      a = 10;
    `;
    expect(() => compile(input)).toThrowError(
      /Variables declared but not used: b/
    );
  });

  it("should check is a variable is being used without having an initial value", () => {
    const input = `
      new a : number;
      new b : number;
      b = a + 5;
    `;
    expect(() => compile(input)).toThrowError(
      /Variables used but not assigned a value: a/
    );
  });

  it("should handle multiple operations", () => {
    const input = `
      new a : text;
      new b, c, d : number;
      write("Hello World");

      a = read("enter a string");
      write(a);

      b = (2 + 3.14) - 5 * 10 + 1 / 100;
      c = 8.56 + 1.44;
      d = c - 5;
      write(d);
      is d > 5 ?
        write("> 5"); 
      : write("< 5");
      ;

      new x, y, z : number;
      x = read("enter a number");
      y = x + 5 + x;
      ... x < y >
          write("x: ");
          write(x);
          x = x + 1;
      ;

      >
          write("In do-while loop");
          z = read("Enter a number less than 5: ");
      ... z >= 5;

      // should error
      // let e : text;
      // write(e);
    `;
    const output = compile(input);
    expect(output?.replaceAll(/\s+/g, "")).toBe(
      `
      let a: string;
      let b, c, d: number;
      console.log("Hello World");
      a = prompt("[TEXT] enter a string") ?? "";
      console.log(a);
      b = -44.85;
      c = 10;
      d = c - 5;
      console.log(d);
      if (d > 5) {
        console.log("> 5");
      } else {
        console.log("< 5");
      }
      let x, y, z: number;
      x = parseFloat(prompt("[NUMBER] enter a number") ?? "");
      y = x + 5 + x;
      while (x < y) {
        console.log("x: ");
        console.log(x);
      x = x + 1;
      }
      do {
        console.log("In do-while loop");
        z = parseFloat(prompt("[NUMBER] Enter a number less than 5: ") ?? "");
      } while (z >= 5);
    `.replaceAll(/\s+/g, "")
    );
  });
});
