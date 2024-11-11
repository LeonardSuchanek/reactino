import { useState } from "react";


const L1C1 = () => {
  const [code, setCode] = useState<string>("// Start writing code here!");

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="font-bold text-4xl mb-12">
        Einführung in React-Komponenten
      </h1>
    </div>
  );
};

export default L1C1;
