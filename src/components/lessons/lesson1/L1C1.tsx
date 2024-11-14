import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import * as monaco from 'monaco-editor';
import Button from "../../Button";
import { fetchChatGPTResponse } from "../../../utils/openai";

const L1C1 = () => {
  const [code, setCode] = useState<string>(
    `import React from 'react';

function ProjectsPage() {
  return <h1>Projects</h1>;
}

export default ProjectsPage;
`
  );

  const [response, setResponse] = useState("");


  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
  }

  const handleSend = async () => {
    console.log("Sending code to OpenAI");

    try {
      const messages = [
        { role: "system", content: "Prüfe, ob die Eingabe des Benutzers der Lösung entspricht. Gib dabei nicht die Lösung, sondern nur Tipps, wie der Benutzer selbst auf die Lösung kommen kann. Die Lösung lautet: import React from 'react'; function ProjectsPage() { return <h1>Hello World</h1>; } export default ProjectsPage;" },
        { role: "user", content: editorRef.current?.getValue() || "" },
      ];
      const chatResponse = await fetchChatGPTResponse(messages);
      setResponse(chatResponse);
      console.log(chatResponse);


    } catch (error) {
      console.error(error);
      setResponse("Es gab ein Problem mit der API.");
    }
  };

  const addMarkers = () => {
    if (editorRef.current) {
      const model = editorRef.current.getModel();
      if (model) {
        const markers: monaco.editor.IMarkerData[] = [
          {
            startLineNumber: 3,
            startColumn: 1,
            endLineNumber: 3,
            endColumn: 10,
            message: "This is a custom marker",
            severity: monaco.MarkerSeverity.Warning
          }
        ];
        monaco.editor.setModelMarkers(model, "owner", markers);
        console.log(monaco.editor.getModelMarkers({}));

      }
    }
  }


  const onButtonClicked = () => {
    // TODO: mit KI prüfen, ob der Code korrekt ist
    if (editorRef.current) {
      handleSend();
    } else {
      alert("Editor is not loaded yet.");
    }
  };



  return (
    <div className="">
      <h1 className="font-bold text-4xl mb-12">Aufgabe 1: Deine erste Komponente</h1>
      <p className="mb-2">Erstelle eine Komponente, die "Hello World" zurückgibt.</p>

      <div className="max-w-3xl">
        <Editor
          className="pb-4 rounded"
          height="25vh"
          language="javascript"
          theme="vs-dark"
          value={code}
          onMount={handleEditorDidMount}
          options={{
            scrollBeyondLastLine: false,
            renderValidationDecorations: "off",
            minimap: { enabled: false },
            fontSize: 16,
            lineNumbers: "off",
            padding: { top: 16, bottom: 16 },
          }}
        />
      </div>
      <Button onClick={onButtonClicked} buttonText="Prüfen" className="" color="red" />
      {response && <p className="mt-4">{response}</p>}
    </div>
  );
};

export default L1C1;
