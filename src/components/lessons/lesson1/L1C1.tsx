import AceEditor from "react-ace";
import { useState } from "react";

// Importiere die gewünschten Sprach- und Theme-Dateien
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

// Optional: Autocomplete und Snippets aktivieren
import "ace-builds/src-noconflict/ext-language_tools";

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
      <AceEditor
        mode="javascript" // Spracheinstellung
        theme="monokai" // Theme
        name="editor" // Einzigartiger Name für Editor-Instanz
        fontSize={16}
        width="100%"
        height="400px"
        value={code}
        onChange={handleCodeChange} // Update-Funktion bei Codeänderung
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true, // Autovervollständigung
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default L1C1;
