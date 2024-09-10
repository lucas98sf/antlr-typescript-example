import { describe, it, expect } from "vitest";
import { compile } from ".";

describe("Compiler Tests", () => {
  it("should handle variables with different types", () => {
    const input = `
      let a, b : text;
      let x : number;
      a = read("enter a string");
      b = " ";
      x = read("enter a number");
      write(a + b + x);
    `;
    const output = compile(input);
    expect(output).toContain("let a, b: text;");
    expect(output).toContain("let x: number;");
    expect(output).toContain("console.log(a + b + x);");
  });

  it("should handle If...else structure", () => {
    const input = `
      let a : number;
      a = 10;
      if a > 5 ?
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
      let count : number;
      count = 0;
      while count < 5 do
        write(count);
        count = count + 1;
      ;
      
      do
        write("Looping");
        count = read("Enter a number: ");
      while count >= 5;
    `;
    const output = compile(input);
    expect(output).toContain("while (count < 5) {");
    expect(output).toContain("console.log(count);");
    expect(output).toContain("do {");
    expect(output).toContain('console.log("Looping");');
  });

  it("should perform arithmetic operations correctly", () => {
    const input = `
      let result : number;
      result = 2 + 3.14 - 5 * 8.56 / 100;
      write(result);
    `;
    const output = compile(input);
    expect(output).toContain("result = 2 + 3.14 - 5 * 8.56 / 100;");
  });

  it("should handle assignments correctly", () => {
    const input = `
      let a : number;
      a = 42;
      write(a);
    `;
    const output = compile(input);
    expect(output).toContain("a = 42;");
  });

  it("should handle input and output operations", () => {
    const input = `
      let name : text;
      name = read("Enter your name: ");
      write("Hello, " + name);
    `;
    const output = compile(input);
    expect(output).toContain('name = prompt("[TEXT] Enter your name: ");');
    expect(output).toContain('console.log("Hello, " + name);');
  });

  it("should accept decimal numbers", () => {
    const input = `
      let value : number;
      value = 3.14;
      write(value);
    `;
    const output = compile(input);
    expect(output).toContain("value = 3.14;");
  });

  it("should check if a variable has been previously declared", () => {
    const input = `
      let a : number;
      b = 10;
    `;
    expect(() => compile(input)).toThrowError(
      /Variable 'b' is used before declaration/
    );
  });

  it("should check if a variable has been declared and not used", () => {
    const input = `
      let a : number;
      let b : text;
      a = 10;
    `;
    expect(() => compile(input)).toThrowError(
      /Variables declared but not used: b/
    );
  });

  it("should check if a variable is being used without having an initial value", () => {
    const input = `
      let a : number;
      let b : number;
      b = a + 5;
    `;
    expect(() => compile(input)).toThrowError(
      /Variables used but not assigned a value: a/
    );
  });
});
