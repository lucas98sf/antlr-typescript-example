import { compileAndFormat } from ".";
import fs from "fs";
import path from "path";

const filePath = path.resolve(__dirname, "../input.in");
const source = fs.readFileSync(filePath, "utf-8");

console.log(await compileAndFormat(source));
