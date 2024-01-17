import "./index.css";
import React, { useState } from "react";
import { questions } from "./constant/questions.js";
import EndPage from "./components/EndPage.js";
import QuestionHeading from "./components/QuestionHeading.js";
import AnswerOptions from "./components/AnswerOptions.js";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const checkRightOrWrong = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestionOrEnd = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleAnswerOptionClick = (isCorrect) => {
    checkRightOrWrong(isCorrect);
    nextQuestionOrEnd();
  };

  function restart() {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  }

  return (
    <div className="p-8 text-xl text-center m-10 min-h-80 bg-slate-300 rounded ring-2 ring-slate-500">
      {showScore ? (
        <EndPage
          score={score}
          possibleScore={questions.length}
          restart={restart}
        />
      ) : (
        <>
          <QuestionHeading
            currentQuestion={currentQuestion + 1}
            questionCount={questions.length}
            questionText={questions[currentQuestion].questionText}
          />
          <AnswerOptions
            answerOptions={questions[currentQuestion].answerOptions}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        </>
      )}
    </div>
  );
}

export default App;
