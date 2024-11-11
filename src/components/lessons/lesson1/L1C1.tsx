import { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import Button from "../../Button";

const L1C1 = () => {
  const [code, setCode] = useState<string>(
    "console.log('Hello Monaco Editor');"
  );
  const [savedCode, setSavedCode] = useState<string | null>(null); // Variable, um den gespeicherten Code zu halten


  // Funktion, die den Code bei jeder Änderung speichert
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      console.log(value);
      setCode(value);
    }
  };

    // Funktion, die den aktuellen Code in eine andere Variable speichert
    const saveCode = () => {
      // mit KI prüfen, ob der Code korrekt ist
      setSavedCode(code);
      console.log("Gespeicherter Code:", savedCode); // Du kannst den Code hier weiterverarbeiten
    };

  return (
    <div className="">
      <h1 className="font-bold text-4xl mb-12">Monaco Editor in React</h1>
      <MonacoEditor
        className="pb-4"
        height="200px"
        language="javascript" // Hier kannst du die Programmiersprache wählen
        value={code} // Initialwert des Editors
        onChange={handleEditorChange} // Funktion, die den Code beim Bearbeiten speichert
        theme="vs-dark" // Editor-Theme
        options={{ scrollBeyondLastLine: false, renderValidationDecorations: "off" }} // Weitere Optionen

      />
      <Button onClick={saveCode} buttonText="Prüfen" className="" color="red" />
    </div>
  );
};

export default L1C1;
