import { useState } from "react";
import Quiz from "react-quiz-component";
import Toast, { ToastType } from "../../Toast";
import Button from "../../Button";
import { Link } from "react-router-dom";
//https://github.com/wingkwong/react-quiz-component

export const aufgabe = {
  quizSynopsis:
    "Testen Sie Ihr Wissen über Ereignisse und bedingtes Rendern in React. Viel Erfolg!",
  progressBarColor: "#9de1f6",
  nrOfQuestions: "4",
  timer: 120,
  questions: [
    {
      question: "Wie wird ein Ereignis in React normalerweise behandelt?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Durch Hinzufügen eines Attributs wie `onEvent` direkt im DOM.",
        "Durch Inline-JavaScript-Funktionen im HTML.",
        "Durch Props wie `onClick` oder `onChange`.",
        "Durch Verwenden von `addEventListener` in einer React-Komponente."
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht!",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Ereignisse in React werden über Props wie `onClick` oder `onChange` gehandhabt, die mit einer Funktion verbunden sind.",
      point: "20",
    },
    {
      question: "Wie können Sie ein bedingtes Rendern in React umsetzen?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Durch Verwendung von `if`-Anweisungen direkt im JSX.",
        "Durch Verwendung eines ternären Operators in JSX.",
        "Durch Verwendung eines externen Bedingungsschalters.",
        "Es ist nicht möglich, bedingtes Rendern in React zu implementieren."
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht!",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Bedingtes Rendern in React erfolgt oft über den ternären Operator (`condition ? <Component1 /> : <Component2 />`) im JSX.",
      point: "20",
    },
    {
      question: "Welche der folgenden Aussagen ist korrekt für Ereignisse in React?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Ereignisse in React verwenden Standard-HTML-Ereignisnamen.",
        "Ereignis-Handler in React werden als Strings angegeben.",
        "Ereignisse in React verwenden camelCase und sind Funktionen.",
        "React unterstützt keine Ereignisbehandlung."
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht!",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "React verwendet camelCase für Ereignisnamen (z. B. `onClick`) und die Ereignis-Handler sind JavaScript-Funktionen.",
      point: "20",
    },
    {
      question: "Wie können Sie die Standardaktion eines Ereignisses in React verhindern?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Durch Hinzufügen von `return false` in der Funktion.",
        "Durch Verwenden von `event.preventDefault()` in der Ereignisfunktion.",
        "Durch Hinzufügen eines `onAbort` Props.",
        "Die Standardaktion kann in React nicht verhindert werden."
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht!",
      messageForIncorrectAnswer:
        "Falsche Antwort. Bitte versuchen Sie es erneut.",
      explanation:
        "Um die Standardaktion eines Ereignisses zu verhindern, verwenden Sie `event.preventDefault()` in der Ereignisfunktion.",
      point: "20",
    }
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

const L3C1 = () => {
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
        <p className="text-xl font-bold md:text-2xl">Aufgabe 1</p>
        <h1 className="font-bold text-4xl md:text-5xl mb-1">
          Ereignisse und bedingtes Rendern
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
        <Link to="/lesson/3">
          <Button buttonText="← Zurück" className="mr-4 mb-4" color="lime" />
        </Link>
        <Link to="/">
          <Button buttonText="Zur Übersicht →" className="" color="red" />
        </Link>
      </div>
    </main>
  );
};

export default L3C1;
