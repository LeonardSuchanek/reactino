import Quiz from 'react-quiz-component'
//https://github.com/wingkwong/react-quiz-component


export const aufgabe = {
  "quizSynopsis": "Testen Sie Ihr Wissen über die Grundlagen von Props und State in React. Viel Erfolg!",
  "progressBarColor": "#9de1f6",
  "nrOfQuestions": "3",
  "questions": [
    {
      "question": "Was ist der Hauptunterschied zwischen Props und State in React?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Props können verändert werden, State nicht.",
        "State kann verändert werden, Props nicht.",
        "Es gibt keinen Unterschied.",
        "Beides wird nur für Dateninitialisierung verwendet."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Richtige Antwort. Gut gemacht!",
      "messageForIncorrectAnswer": "Falsche Antwort. Bitte versuchen Sie es erneut.",
      "explanation": "Props sind unveränderlich (read-only), während State intern geändert werden kann.",
      "point": "20"
    },
    {
      "question": "Wie können Props an eine React-Komponente übergeben werden?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Als ein Argument in der `render()` Methode.",
        "Als ein Attribut in JSX.",
        "Durch Verwendung von `this.props`.",
        "Durch den Import von `Props` aus React."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Richtige Antwort. Gut gemacht!",
      "messageForIncorrectAnswer": "Falsche Antwort. Bitte versuchen Sie es erneut.",
      "explanation": "Props werden an Komponenten über JSX-Attribute übergeben, z. B. `<Component propName={value} />`.",
      "point": "20"
    },
    {
      "question": "Welches Hook wird verwendet, um den State in einer funktionalen Komponente zu verwalten?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "useProps",
        "useState",
        "useEffect",
        "useReducer"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Richtige Antwort. Gut gemacht!",
      "messageForIncorrectAnswer": "Falsche Antwort. Bitte versuchen Sie es erneut.",
      "explanation": "`useState` ist ein React-Hook, der für die Verwaltung von lokalem State in funktionalen Komponenten verwendet wird.",
      "point": "20"
    }
  ]
}


const L2C1 = () => {
  return (
    <main className="max-w-7xl md:justify-self-center">
      <div>

        <h1 className="font-bold text-4xl md:text-5xl mb-1">
          Quiz 1: Props und State
        </h1>
        <p className="text-xl md:text-2xl mb-3">
          Hier TEXT!
        </p>
        <Quiz quiz={aufgabe} showInstantFeedback={false} showDefaultResult={false} timer={60} continueTillCorrect={false} />
      </div>
    </main>
  );
};

export default L2C1;