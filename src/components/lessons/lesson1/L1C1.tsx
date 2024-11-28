import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import Button from "../../Button";
import { fetchChatGPTResponse } from "../../../utils/openai";
import lessons from "../../../data/lessons.json";
import { Link } from "react-router-dom";

const L1C1 = () => {
  const [input, setinput] = useState<string>("import React from 'react';");

  const solution = lessons.lesson1.task1.solution;

  const [response, setResponse] = useState("");

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor
  ) => {
    editorRef.current = editor;
  };

  const handleSend = async () => {
    console.log("Sending code to OpenAI");

    try {
      console.log(input, solution);

      const messages = [
        {
          role: "system",
          content: `Prüfe, ob die Eingabe des Benutzers der Lösung entspricht. Der Benutzer hat bisher keine Erfahrung mit React. Gib dabei nicht die Lösung, sondern nur Tipps, wie der Benutzer selbst auf die Lösung kommen kann. Die Lösung lautet: ${solution}`,
        },
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
            severity: monaco.MarkerSeverity.Warning,
          },
        ];
        monaco.editor.setModelMarkers(model, "owner", markers);
        console.log(monaco.editor.getModelMarkers({}));
      }
    }
  };

  const onButtonClicked = () => {
    // TODO: mit KI prüfen, ob der Code korrekt ist
    if (editorRef.current) {
      handleSend();
    } else {
      alert("Editor is not loaded yet.");
    }
  };

  return (
    <div className="max-w-7xl md:justify-self-center ">
      <h1 className="font-bold text-4xl md:text-5xl mb-1">
        Aufgabe 1: {lessons.lesson1.task1.title}
      </h1>
      <p className="text-xl md:text-2xl mb-3">
        {lessons.lesson1.task1.description}
      </p>

      <div className="">
        <Editor
          className="pb-4 rounded"
          height="25vh"
          language="javascript"
          theme="vs-dark"
          value={input}
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
      <Button
        onClick={onButtonClicked}
        buttonText="Prüfen"
        className="mb-10"
        color="red"
      />
      {response && <p className="text-xl md:text-2xl">{response}</p>}

      <div className="fixed bottom-0 left-0 w-full bg-cyan-200 flex justify-center p-4 md:relative md:p-0 md:bg-transparent">
        <Link to="/">
          <Button buttonText="← Zurück" className="mr-4 mb-4" color="lime" />
        </Link>
        <Link to="/lesson/1/chapter/2">
          <Button buttonText="Aufgabe 2 →" className="" color="red" />
        </Link>
      </div>
    </div>
  );
};

export default L1C1;
