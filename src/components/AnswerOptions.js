export default function AnswerOptions({
  answerOptions,
  handleAnswerOptionClick,
}) {
  return (
    <div>
      {answerOptions.map((answerOption, index) => (
        <button
          className="shadow-md shadow-slate-700 bg-slate-300 ring-2 ring-slate-500 rounded m-4 pl-2 pr-2 pt-1 pb-1 hover:bg-slate-500"
          key={index}
          onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
        >
          {answerOption.answerText}
        </button>
      ))}
    </div>
  );
}
