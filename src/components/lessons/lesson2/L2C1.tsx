import { useState } from "react";
import Quiz from "react-quiz-component";
import Toast, { ToastType } from "../../Toast";
import Button from "../../Button";
import { Link } from "react-router-dom";
//https://github.com/wingkwong/react-quiz-component

export const aufgabe = {
  quizSynopsis:
    "Testen Sie Ihr Wissen über die Grundlagen von Props und State in React. Viel Erfolg!",
  progressBarColor: "#9de1f6",
  nrOfQuestions: "3",
  questions: [
    {
      question:
        "Was ist der Hauptunterschied zwischen Props und State in React?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Props können verändert werden, State nicht.",
        "State kann verändert werden, Props nicht.",
        "Es gibt keinen Unterschied.",
        "Beides wird nur für Dateninitialisierung verwendet.",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht!",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Props sind unveränderlich (read-only), während State intern geändert werden kann.",
      point: "20",
    },
    {
      question: "Wie können Props an eine React-Komponente übergeben werden?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Als ein Argument in der `render()` Methode.",
        "Als ein Attribut in JSX.",
        "Durch Verwendung von `this.props`.",
        "Durch den Import von `Props` aus React.",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht!",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Props werden an Komponenten über JSX-Attribute übergeben, z. B. `<Component propName={value} />`.",
      point: "20",
    },
    {
      question:
        "Welches Hook wird verwendet, um den State in einer funktionalen Komponente zu verwalten?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["useProps", "useState", "useEffect", "useReducer"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht!",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "`useState` ist ein React-Hook, der für die Verwaltung von lokalem State in funktionalen Komponenten verwendet wird.",
      point: "20",
    },
  ],
  "appLocale": {
    "landingHeaderText": "<questionLength> Fragen",
    "question": "Frage",
    "startQuizBtn": "Quiz starten",
    "resultFilterAll": "Alle",
    "resultFilterCorrect": "Richtig",
    "resultFilterIncorrect": "Falsch",
    "resultFilterUnanswered": "Unbeantwortet",
    "nextQuestionBtn": "Weiter",
    "prevQuestionBtn": "Zurück",
    "resultPageHeaderText": "Sie haben das Quiz abgeschlossen. Sie haben <correctIndexLength> von <questionLength> Fragen richtig beantwortet.",
    "resultPagePoint": "Sie haben <correctPoints> von <totalPoints> Punkten erzielt.",
    "pauseScreenDisplay": "Test ist pausiert. Klicken Sie auf die Fortsetzen-Taste, um weiterzumachen.",
    "timerTimeRemaining": "Verbleibende Zeit",
    "timerTimeTaken": "Verstrichene Zeit",
    "pauseScreenPause": "Pause",
    "pauseScreenResume": "Fortsetzen",
    "singleSelectionTagText": "Einzelauswahl",
    "multipleSelectionTagText": "Mehrfachauswahl",
    "pickNumberOfSelection": "Wählen Sie <numberOfSelection>",
    "marksOfQuestion": "(<marks> Punkte)"
  }
};

const L2C1 = () => {
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);

  const toastMessage = (quizResponse: any) => {
    if (
      quizResponse.numberOfIncorrectAnswers === quizResponse.numberOfQuestions
    ) {
      setToast({
        message: `Du hast keine Frage richtig beantwortet. Bitte versuche es erneut.`,
        type: "error",
      });
      return;
    }
    setToast({
      message: `Du hast ${quizResponse.numberOfCorrectAnswers} von ${quizResponse.numberOfQuestions} Fragen richtig beantwortet.`,
      type: "success",
    });
  };

  return (
    <main className="max-w-7xl md:justify-self-center">
      <div>
        <h1 className="font-bold text-4xl md:text-5xl mb-1">
          Quiz 1: Props und State
        </h1>
        <Quiz
          quiz={aufgabe}
          showInstantFeedback={true}
          showDefaultResult={false}
          timer={60}
          continueTillCorrect={false}
          onComplete={toastMessage}
        />
      </div>

      {toast && (
        <>
          <Toast message={toast.message} type={toast.type} />
          <Button
            color={"lime"}
            onClick={() => window.location.reload()}
            buttonText={"Nochmal versuchen"}
          />
        </>
      )}
      <div className="fixed bottom-0 left-0 w-full bg-cyan-200 flex justify-center p-4 md:relative md:p-0 md:bg-transparent">
        <Link to="/lesson/2">
          <Button buttonText="← Zurück" className="mr-4 mb-4" color="lime" />
        </Link>
        <Link to="/">
          <Button buttonText="Zur Übersicht →" className="" color="red" />
        </Link>
      </div>
    </main>
  );
};

export default L2C1;
