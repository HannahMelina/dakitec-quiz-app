import "./index.css";
import React, { useState } from "react";
import { questions } from "./constant/questions.js";
import EndPage from "./components/EndPage.js";
import QuestionHeading from "./components/QuestionHeading.js";
import AnswerOptions from "./components/AnswerOptions.js";
import QuestionFeedback from "./components/QuestionFeedback.js";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showEndPage, setShowEndPage] = useState(false);
  const [showFeedbackPage, setShowFeedbackPage] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const checkAnswer = (isCorrect) => {
    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestionOrEnd = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowEndPage(true);
    }

    setShowFeedbackPage(false);
  };

  const handleAnswerOptionClick = (isCorrect) => {
    checkAnswer(isCorrect);
    setShowFeedbackPage(true);
  };

  function restart() {
    setCurrentQuestion(0);
    setScore(0);
    setShowEndPage(false);
    setShowFeedbackPage(false);
  }
  return (
    <div className="p-8 text-xl text-center m-10 min-h-80 bg-slate-300 rounded ring-2 ring-slate-500">
      {showFeedbackPage ? (
        <QuestionFeedback
          isAnswerCorrect={isAnswerCorrect}
          nextQuestionOrEnd={nextQuestionOrEnd}
          restart={restart}
          retry={() => setShowFeedbackPage(false)}
          isLastQuestion={currentQuestion === questions.length - 1}
        />
      ) : (
        <>
          {showEndPage ? (
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
        </>
      )}
    </div>
  );
}

export default App;
