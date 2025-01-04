import { useState } from "react";
import Quiz from "react-quiz-component";
import Toast, { ToastType } from "../../Toast";
import Button from "../../Button";
import { Link } from "react-router-dom";
//https://github.com/wingkwong/react-quiz-component

export const aufgabe = {
  quizSynopsis:
    "Testen Sie Ihr Wissen über das Erstellen und Einrichten eines React-Projekts. Viel Erfolg!",
  progressBarColor: "#9de1f6",
  nrOfQuestions: "2",
  questions: [
    {
      question: "Welches Tool wird standardmäßig verwendet, um ein neues React-Projekt zu erstellen?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "webpack",
        "Create React App",
        "Babel",
        "npm install",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht!",
      messageForIncorrectAnswer:
        "Falsche Antwort.",
      explanation:
        "Create React App (CRA) ist das offizielle Tool, um schnell und einfach ein neues React-Projekt zu erstellen.",
      point: "20",
    },
    {
      question:
        "Welche Datei dient als Einstiegspunkt in einer typischen React-Anwendung?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "index.js",
        "App.js",
        "package.json",
        "main.css",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Richtige Antwort. Gut gemacht!",
      messageForIncorrectAnswer:
        "Falsche Antwort.",
      explanation:
        "Die `index.js` Datei ist der Einstiegspunkt der Anwendung und enthält den Code, um React im DOM zu rendern.",
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

const L0C1 = () => {
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
          Projekt erstellen und einrichten
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
        <Link to="/lesson/0">
          <Button buttonText="← Zurück" className="mr-4 mb-4" color="lime" />
        </Link>
        <Link to="/">
          <Button buttonText="Zur Übersicht →" className="" color="red" />
        </Link>
      </div>
    </main>
  );
};

export default L0C1;
