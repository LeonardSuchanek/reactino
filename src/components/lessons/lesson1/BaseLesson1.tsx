import { Link } from "react-router-dom";
import CodeBox from "../../CodeBox";
import Button from "../../Button";

const Lesson1 = () => {
  return (
    <div className="max-w-7xl md:justify-self-center">
      <h1 className="font-bold text-4xl md:text-5xl mb-12">
        Einführung in React-Komponenten
      </h1>

      {/* Projekt mit npm erstellen */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">
          Ein neues React-Projekt mit npm erstellen
        </h2>

        <p className="text-xl md:text-2xl mb-2">
          Um ein neues React-Projekt zu erstellen, benutze das Tool
          create-react-app. Stelle sicher, dass Node.js und npm installiert
          sind.
        </p>
        <p className="text-xl md:text-2xl mb-2">
          Der Befehl <code>npx create-react-app mein-react-projekt</code>
          erstellt automatisch die Ordnerstruktur und alle notwendigen Dateien.
        </p>
        <h2 className="text-2xl mt-14 font-semibold mb-2">
          Überprüfen, ob Node.js und npm installiert sind
        </h2>
        <CodeBox
          code={`node -v
npm -v`}
        />
        <h2 className="text-2xl mt-14 font-semibold mb-2">
          Ein neues React-Projekt erstellen
        </h2>
        <CodeBox code={`npx create-react-app mein-react-projekt`} />
        <h2 className="text-2xl mt-14 font-semibold mb-2">
          In das Projektverzeichnis wechseln
        </h2>
        <CodeBox code={`cd mein-react-projekt`} />
        <h2 className="text-2xl mt-14 font-semibold mb-2">
          Das Projekt starten
        </h2>
        <CodeBox code={`npm start`} />
      </section>

      {/* Einleitung */}
      <h2 className="text-3xl mt-14 font-semibold mb-2">
        Komponentenbasiertes Entwickeln
      </h2>
      <section className="mb-8 text-xl md:text-2xl">
        Components (Komponenten) erlauben es uns, das UI in unabhängige,
        wiederverwendbare Teile zu unterteilen. Jeder Teil kann isoliert
        entwickelt, getestet und gepflegt werden. Die React DevTools Erweiterung
        für Chrome hilft uns, die Komponentenhierarchie unserer Anwendung zu
        inspizieren.
      </section>

      {/* JSX-Element erstellen und rendern */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">
          Einfache JSX-Elemente erstellen und rendern
        </h2>
        <p className=" text-xl md:text-2xl mb-2">
          Ein einfaches JSX-Element, das direkt in den DOM gerendert wird:
        </p>
        <CodeBox
          code={`const element = <div className="container">Hello Element</div>;\n\nconst rootElement = document.getElementById('root');\nReactDOM.createRoot(rootElement).render(element);`}
        />
      </section>

      {/* Funktionskomponente erstellen */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14  font-semibold mb-2">
          Erstellen einer Funktionskomponente
        </h2>
        <p className="mb-2 text-xl md:text-2xl">
          Eine Funktionskomponente ist eine einfache Möglichkeit,
          wiederverwendbare UI-Teile zu definieren.
        </p>
        <CodeBox
          code={`function HelloWorld() {\n  return <div className="container">Hello Function Component</div>;\n}`}
        />
      </section>

      {/* Komponente rendern */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14  font-semibold mb-2">
          Rendering einer Komponente
        </h2>
        <p className="mb-2 text-xl md:text-2xl">
          Verwenden Sie den Komponentennamen im PascalCase (z. B.
          &#60;HelloWorld /&#62;) für die Darstellung.
        </p>
        <p className="mb-2 text-xl md:text-2xl">
          Andernfalls gibt es einen Fehler, da React zwischen HTML-Elementen
          (klein geschrieben) und Komponenten (PascalCase) unterscheidet.
        </p>
        <CodeBox
          code={`const root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<HelloWorld />);`}
        />
      </section>

      {/* Komponenten-Zusammensetzung und Wiederverwendung */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14  font-semibold mb-2">
          Komponenten-Zusammensetzung und Wiederverwendung
        </h2>
        <p className="mb-2 text-xl md:text-2xl">
          Wir können Komponenten durch Verschachtelung wiederverwenden.
          Beispiel: App-Komponente, die mehrere Instanzen von HelloWorld
          rendert.
        </p>
        <CodeBox
          code={`function App() {\n  return (\n    <div>\n      <HelloWorld />\n      <HelloWorld />\n      <HelloWorld />\n      <HelloWorld />\n    </div>\n  );\n}\n\nconst rootApp = ReactDOM.createRoot(document.getElementById('root'));\nrootApp.render(<App />);`}
        />
      </section>

      {/* Klassenkomponente erstellen */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14  font-semibold mb-2">
          Erstellen einer Klassenkomponente
        </h2>
        <p className="mb-2 text-xl md:text-2xl">
          Alternativ kann eine Klasse verwendet werden, um eine Komponente zu
          erstellen. Hier ist ein Beispiel für die HelloWorld-Klasse mit der
          render-Methode.
        </p>
        <CodeBox
          code={`class HelloWorldClass extends React.Component {\n  render() {\n    return <div className="container">Hello Class Component</div>;\n  }\n}\n\nconst rootClass = ReactDOM.createRoot(document.getElementById('root'));\nrootClass.render(<HelloWorldClass />);`}
        />
      </section>

      {/* Optional: Verwenden von React DevTools */}
      <section className="mb-20">
        <h2 className="text-3xl mt-14  font-semibold mb-2">
          Optional: Verwenden von React DevTools
        </h2>
        <p className="text-xl md:text-2xl">
          Besuche eine Website wie netflix.com, instagram.com, facebook.com,
          airbnb.com oder dropbox.com und inspiziere die Komponentenhierarchie
          mit der React DevTools Erweiterung.
        </p>
      </section>

      <div className="fixed bottom-0 left-0 w-full bg-cyan-200 flex justify-center p-4 md:relative md:p-0 md:bg-transparent">
        <Link to="/">
          <Button buttonText="← Zurück" className="mr-4 mb-4" color="lime" />
        </Link>
        <Link to="chapter/1">
          <Button buttonText="Aufgabe 1 →" className="" color="red" />
        </Link>
      </div>
    </div>
  );
};

export default Lesson1;
