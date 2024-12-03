import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import Button from "../../Button";
import { fetchChatGPTResponse } from "../../../utils/openai";
import lessons from "../../../data/lessons.json";
import { Link } from "react-router-dom";
import Toast, { ToastType } from "../../Toast";

const L1C1 = () => {
  const [input, setinput] = useState<string>("import React from 'react';");

  const solution = lessons.lesson1.task1.solution;

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);

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
      setToast({
        message: chatResponse,
        type: "success",
      });
      console.log(chatResponse);
    } catch (error) {
      setToast({
        message: "Es gab ein Problem mit der API.",
        type: "success",
      });
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl md:justify-self-center">
      <p className="text-xl font-bold md:text-2xl">Aufgabe 1</p>
      <h1 className="font-bold text-4xl md:text-5xl mb-1">
        {lessons.lesson1.task1.title}
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
        onClick={handleSend}
        buttonText="Prüfen"
        className="mb-10"
        color="red"
      />
      <Button
        onClick={() => {}}
        buttonText="Abgeben"
        className="mb-10 ml-4"
        color="lime"
      />

      {toast && <Toast message={toast.message} type={toast.type} />}

      <div className="fixed bottom-0 left-0 w-full bg-cyan-200 flex justify-center p-4 md:relative md:p-0 md:bg-transparent">
        <Link to="/lesson/1">
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
