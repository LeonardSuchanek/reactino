import { Link } from "react-router-dom";
import Checkbox from "../../Checkbox";
import CodeBox from "../../CodeBox";
import Button from "../../Button";

const Lesson1 = () => {
  return (
    <div className="">
      <h1 className="font-bold text-4xl mb-12">
        Einführung in React-Komponenten
      </h1>

      {/* Einleitung */}
      <section className="mb-8">
        <p className="mb-2">
          Components (Komponenten) erlauben es uns, das UI in unabhängige,
          wiederverwendbare Teile zu unterteilen.
        </p>
        <p className="mb-2">
          Jeder Teil kann isoliert entwickelt, getestet und gepflegt werden.
        </p>
        <p>
          Die React DevTools Erweiterung für Chrome hilft uns, die
          Komponentenhierarchie unserer Anwendung zu inspizieren.
        </p>
      </section>

      {/* JSX-Element erstellen und rendern */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Einfache JSX-Elemente erstellen und rendern
        </h2>
        <p className="mb-2">
          Ein einfaches JSX-Element, das direkt in den DOM gerendert wird:
        </p>
        <CodeBox
          code={`const element = <div className="container">Hello Element</div>;\n\nconst rootElement = document.getElementById('root');\nReactDOM.createRoot(rootElement).render(element);`}
        />
      </section>

      {/* Funktionskomponente erstellen */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Erstellen einer Funktionskomponente
        </h2>
        <p className="mb-2">
          Eine Funktionskomponente ist eine einfache Möglichkeit,
          wiederverwendbare UI-Teile zu definieren.
        </p>
        <CodeBox
          code={`function HelloWorld() {\n  return <div className="container">Hello Function Component</div>;\n}`}
        />
      </section>

      {/* Komponente rendern */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Rendering einer Komponente
        </h2>
        <p className="mb-2">
          Verwenden Sie den Komponentennamen im PascalCase (z. B.
          &#60;HelloWorld /&#62;) für die Darstellung.
        </p>
        <p className="mb-2">
          Andernfalls gibt es einen Fehler, da React zwischen HTML-Elementen
          (klein geschrieben) und Komponenten (PascalCase) unterscheidet.
        </p>
        <CodeBox
          code={`const root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<HelloWorld />);`}
        />
      </section>

      {/* Komponenten-Zusammensetzung und Wiederverwendung */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Komponenten-Zusammensetzung und Wiederverwendung
        </h2>
        <p className="mb-2">
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
        <h2 className="text-xl font-semibold mb-2">
          Erstellen einer Klassenkomponente
        </h2>
        <p className="mb-2">
          Alternativ kann eine Klasse verwendet werden, um eine Komponente zu
          erstellen. Hier ist ein Beispiel für die HelloWorld-Klasse mit der
          render-Methode.
        </p>
        <CodeBox
          code={`class HelloWorldClass extends React.Component {\n  render() {\n    return <div className="container">Hello Class Component</div>;\n  }\n}\n\nconst rootClass = ReactDOM.createRoot(document.getElementById('root'));\nrootClass.render(<HelloWorldClass />);`}
        />
      </section>

      {/* Optional: Verwenden von React DevTools */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Optional: Verwenden von React DevTools
        </h2>
        <p>
          Besuche eine Website wie netflix.com, instagram.com, facebook.com,
          airbnb.com oder dropbox.com und inspiziere die Komponentenhierarchie
          mit der React DevTools Erweiterung.
        </p>
      </section>

      <div className="">
        <Link to="chapter/1">
          <Button buttonText="Aufgabe 1 →" className="" color="red"/>
        </Link>
      </div>
    </div>
  );
};

export default Lesson1;
