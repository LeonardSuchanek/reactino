import { Link } from "react-router-dom";
import CodeBox from "../../CodeBox";
import Button from "../../Button";

const Lesson2 = () => {
  return (
    <div className="max-w-7xl md:justify-self-center">
      <h1 className="font-bold text-4xl md:text-5xl mb-12">
        Props und States in React
      </h1>

      {/* Einleitung */}
      <section className="mb-8 text-xl md:text-2xl">
        Props (Eigenschaften) und States (Zustände) sind zwei wichtige Konzepte
        in React, um Daten innerhalb von Komponenten zu verwalten und
        weiterzugeben.
      </section>

      {/* Props erklären */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">Was sind Props?</h2>
        <p className="text-xl md:text-2xl mb-2">
          Props sind Eigenschaften, die von einer übergeordneten Komponente an
          eine untergeordnete Komponente weitergegeben werden. Sie sind
          unveränderlich (read-only).
        </p>
        <CodeBox
          code={`function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome name="Alice" />);`}
        />
        <p className="text-xl md:text-2xl mb-2">
          Im obigen Beispiel wird der Wert <code>name</code> als Prop an die{" "}
          <code>Welcome</code>-Komponente weitergegeben und in der UI angezeigt.
        </p>
      </section>

      {/* States erklären */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">Was sind States?</h2>
        <p className="text-xl md:text-2xl mb-2">
          States sind dynamische Daten, die innerhalb einer Komponente verwaltet
          werden. Sie können über die <code>useState</code>-Hook geändert
          werden.
        </p>
        <CodeBox
          code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);`}
        />
        <p className="text-xl md:text-2xl mb-2">
          In diesem Beispiel wird der State <code>count</code> bei jedem Klick
          auf den Button aktualisiert.
        </p>
      </section>

      {/* Props vs. States */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">Props vs. States</h2>
        <p className="text-xl md:text-2xl mb-2">
          Der Unterschied zwischen Props und States:
        </p>
        <ul className="list-disc pl-8 text-xl md:text-2xl">
          <li>
            Props werden von der Elternkomponente übergeben und sind
            unveränderlich.
          </li>
          <li>
            States werden innerhalb der Komponente definiert und können geändert
            werden.
          </li>
        </ul>
      </section>

      {/* Zusammenspiel von Props und States */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">
          Zusammenspiel von Props und States
        </h2>
        <p className="text-xl md:text-2xl mb-2">
          Props und States können zusammen verwendet werden, um dynamische und
          wiederverwendbare Komponenten zu erstellen.
        </p>
        <CodeBox
          code={`import { useState } from 'react';

function Greeting(props) {
  const [greet, setGreet] = useState('Hello');

  return (
    <div>
      <p>{greet}, {props.name}!</p>
      <button onClick={() => setGreet('Hi')}>Say Hi</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting name="Bob" />);`}
        />
      </section>

      <div className="fixed bottom-0 left-0 w-full bg-cyan-200 flex justify-center p-4 md:relative md:p-0 md:bg-transparent">
        <Link to="/">
          <Button buttonText="← Zurück" className="mr-4 mb-4" color="lime" />
        </Link>
        <Link to="/lesson/2/chapter/1">
          <Button buttonText="Zur Aufgabe 1 →" className="" color="red" />
        </Link>
      </div>
    </div>
  );
};

export default Lesson2;
