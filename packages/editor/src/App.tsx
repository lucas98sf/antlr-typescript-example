import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { compile } from "compiler";

function App() {
  const [code, setCode] = useState<string>("");
  const [compiledCode, setCompiledCode] = useState<string>("");

  const handleCodeChange = async (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const code = e.target.value;
    setCode(code);
    try {
      setCompiledCode(compile(code) ?? "");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setCompiledCode(error.message);
    }
  };

  return (
    <div
      style={{
        marginLeft: "300px",
        marginRight: "300px",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <textarea
        value={code}
        onChange={handleCodeChange}
        style={{ width: "100%", height: "300px" }}
      />
      <SyntaxHighlighter language="typescript" style={darcula}>
        {compiledCode}
      </SyntaxHighlighter>
    </div>
  );
}

export default App;
