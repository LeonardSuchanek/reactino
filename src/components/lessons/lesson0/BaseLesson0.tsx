import { Link } from "react-router-dom";
import CodeBox from "../../CodeBox";
import Button from "../../Button";

const Lesson0 = () => {
  return (
    <div className="max-w-7xl md:justify-self-center">
      <h1 className="font-bold text-4xl md:text-5xl mb-12">
        React-Setup: Projekt erstellen und einrichten
      </h1>

      {/* Einleitung */}
      <section className="mb-8 text-xl md:text-2xl">
        Bevor wir mit React arbeiten können, müssen wir ein Projekt erstellen und einrichten. In diesem Kapitel lernst du, wie du mit VS Code und dem Terminal ein neues React-Projekt erstellst und startest.
      </section>

      {/* Voraussetzungen */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">Voraussetzungen</h2>
        <p className="text-xl md:text-2xl mb-2">
          Stelle sicher, dass folgende Software auf deinem Computer installiert ist:
        </p>
        <ul className="list-disc pl-8 text-xl md:text-2xl">
          <li>Node.js (mindestens Version 14)</li>
          <li>Ein Texteditor wie VS Code</li>
          <li>Ein Terminal (eingebaut in VS Code oder separat)</li>
        </ul>
        <p className="text-xl md:text-2xl">
          Du kannst die Installation von Node.js überprüfen, indem du im Terminal <code>node -v</code> eingibst.
        </p>
      </section>

      {/* Projekt erstellen */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">
          Ein neues React-Projekt erstellen
        </h2>
        <p className="text-xl md:text-2xl mb-2">
          React bietet ein einfaches Tool, um ein neues Projekt zu starten: <code>create-react-app</code>. Hier sind die Schritte:
        </p>
        <ol className="list-decimal pl-8 text-xl md:text-2xl">
          <li>Öffne das Terminal und navigiere zu dem Ordner, in dem du dein Projekt erstellen möchtest.</li>
          <li>Führe den Befehl <code>npx create-react-app my-app</code> aus.</li>
          <li>Wechsle in das Projektverzeichnis: <code>cd my-app</code>.</li>
          <li>Starte den Entwicklungsserver mit <code>npm start</code>.</li>
        </ol>
        <CodeBox
          code={`npx create-react-app my-app
cd my-app
npm start`}
        />
        <p className="text-xl md:text-2xl mb-2">
          Nach dem Start des Entwicklungsservers sollte dein Browser automatisch eine Seite öffnen, die die Standard-React-Willkommensseite anzeigt.
        </p>
      </section>

      {/* Projektstruktur verstehen */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">
          Projektstruktur verstehen
        </h2>
        <p className="text-xl md:text-2xl mb-2">
          Nach der Erstellung eines Projekts siehst du eine Ordnerstruktur wie diese:
        </p>
        <CodeBox
          code={`my-app/
├── node_modules/
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md`}
        />
        <ul className="list-disc pl-8 text-xl md:text-2xl">
          <li><code>src/</code>: Hier befindet sich der Quellcode deines Projekts.</li>
          <li><code>public/</code>: Beinhaltet statische Dateien wie <code>index.html</code>.</li>
          <li><code>node_modules/</code>: Enthält die Abhängigkeiten des Projekts.</li>
        </ul>
      </section>

      {/* Arbeiten mit VS Code */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">
          Arbeiten mit VS Code
        </h2>
        <p className="text-xl md:text-2xl mb-2">
          Öffne dein Projekt in VS Code. Du kannst das Terminal in VS Code mit <code>Strg + `</code> (Windows/Linux) oder <code>Cmd + `</code> (Mac) öffnen, um Befehle wie <code>npm start</code> auszuführen.
        </p>
        <p className="text-xl md:text-2xl">
          Zusätzlich kannst du hilfreiche Extensions wie "ES7+ React/Redux/React-Native snippets" installieren, um die Entwicklung zu erleichtern.
        </p>
      </section>

      <div className="fixed bottom-0 left-0 w-full bg-cyan-200 flex justify-center p-4 md:relative md:p-0 md:bg-transparent">
        <Link to="/">
          <Button buttonText="← Zurück" className="mr-4 mb-4" color="lime" />
        </Link>
        <Link to="/lesson/0/chapter/1">
          <Button buttonText="Zur Aufgabe 1 →" className="" color="red" />
        </Link>
      </div>
    </div>
  );
};

export default Lesson0;
