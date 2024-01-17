import React from "react";

export default function QuestionFeedback({
  answerCorrect,
  nextQuestionOrEnd,
  restart,
  retry,
}) {
  return (
    <>
      <h1>
        Du hast die Frage {answerCorrect ? "Richtig" : "Falsch"} beantwortet
      </h1>
      <div>
        {!answerCorrect && (
          <button
            onClick={retry}
            className="shadow-md shadow-slate-700 bg-slate-300 ring-2 ring-slate-500 rounded m-4 pl-2 pr-2 pt-1 pb-1 hover:bg-slate-500"
          >
            Versuchs nochmal
          </button>
        )}
        <button
          className="shadow-md shadow-slate-700 bg-slate-300 ring-2 ring-slate-500 rounded m-4 pl-2 pr-2 pt-1 pb-1 hover:bg-slate-500"
          onClick={restart}
        >
          Neustarten
        </button>
        <button
          className="shadow-md shadow-slate-700 bg-slate-300 ring-2 ring-slate-500 rounded m-4 pl-2 pr-2 pt-1 pb-1 hover:bg-slate-500"
          onClick={nextQuestionOrEnd}
        >
          Weiter
        </button>
      </div>
    </>
  );
}