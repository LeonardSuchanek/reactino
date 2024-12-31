import { Link } from "react-router-dom";
import CodeBox from "../../CodeBox";
import Button from "../../Button";

const Lesson3 = () => {
  return (
    <div className="max-w-7xl md:justify-self-center">
      <h1 className="font-bold text-4xl md:text-5xl mb-12">
        Ereignisse und bedingtes Rendern
      </h1>

      {/* Einleitung */}
      <section className="mb-8 text-xl md:text-2xl">
        In React können Benutzerinteraktionen wie Klicks, Formulareingaben oder Mausbewegungen mit Ereignissen verarbeitet werden. Zudem ermöglicht bedingtes Rendern die Anzeige von Komponenten basierend auf bestimmten Zuständen oder Bedingungen.
      </section>

      {/* Ereignisse in React */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">
          Ereignisse in React
        </h2>
        <p className="text-xl md:text-2xl mb-2">
          Ereignisse in React funktionieren ähnlich wie in HTML, aber sie nutzen die CamelCase-Schreibweise für Event-Handler (z. B. <code>onClick</code> statt <code>onclick</code>). Außerdem wird der Event-Handler als Funktion übergeben, nicht als String.
        </p>
        <CodeBox
          code={`function Button() {
  const handleClick = () => {
    alert('Button wurde geklickt!');
  };

  return (
    <button onClick={handleClick}>
      Klick mich!
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Button />);`}
        />
        <p className="text-xl md:text-2xl mb-2">
          Im obigen Beispiel wird die Funktion <code>handleClick</code> ausgeführt, wenn der Button geklickt wird.
        </p>
      </section>

      {/* Bedingtes Rendern */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">
          Bedingtes Rendern
        </h2>
        <p className="text-xl md:text-2xl mb-2">
          Bedingtes Rendern bedeutet, dass Komponenten oder Inhalte abhängig von einer Bedingung angezeigt oder ausgeblendet werden können. React bietet dafür mehrere Möglichkeiten, wie <code>if</code>-Anweisungen, ternäre Operatoren oder logische Operatoren.
        </p>
        <h3 className="text-2xl mt-8 font-semibold mb-2">Beispiel: if-Anweisung</h3>
        <CodeBox
          code={`function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Willkommen zurück!</h1>;
  }
  return <h1>Bitte melde dich an.</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting isLoggedIn={true} />);`}
        />
        <p className="text-xl md:text-2xl mb-2">
          Im obigen Beispiel wird je nach Wert der Prop <code>isLoggedIn</code> eine andere Nachricht angezeigt.
        </p>
        <h3 className="text-2xl mt-8 font-semibold mb-2">Beispiel: Ternärer Operator</h3>
        <CodeBox
          code={`function Greeting({ isLoggedIn }) {
  return (
    <h1>
      {isLoggedIn ? 'Willkommen zurück!' : 'Bitte melde dich an.'}
    </h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting isLoggedIn={false} />);`}
        />
        <p className="text-xl md:text-2xl mb-2">
          Hier wird ein ternärer Operator verwendet, um die gleiche Logik kompakter darzustellen.
        </p>
      </section>

      {/* Ereignisse und bedingtes Rendern kombinieren */}
      <section className="mb-8">
        <h2 className="text-3xl mt-14 font-semibold mb-2">
          Ereignisse und bedingtes Rendern kombinieren
        </h2>
        <p className="text-xl md:text-2xl mb-2">
          Du kannst Ereignisse und bedingtes Rendern kombinieren, um dynamische Benutzerinteraktionen zu erstellen.
        </p>
        <CodeBox
          code={`import { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOn ? 'Ausschalten' : 'Einschalten'}
      </button>
      <p>{isOn ? 'Die Lampe ist an.' : 'Die Lampe ist aus.'}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToggleButton />);`}
        />
        <p className="text-xl md:text-2xl mb-2">
          In diesem Beispiel ändert sich der Button-Text und die Nachricht, je nachdem, ob der Zustand <code>isOn</code> wahr oder falsch ist.
        </p>
      </section>

      <div className="fixed bottom-0 left-0 w-full bg-cyan-200 flex justify-center p-4 md:relative md:p-0 md:bg-transparent">
        <Link to="/">
          <Button buttonText="← Zurück" className="mr-4 mb-4" color="lime" />
        </Link>
        <Link to="chapter/3">
          <Button buttonText="Nächste Lektion →" className="" color="red" />
        </Link>
      </div>
    </div>
  );
};

export default Lesson3;
