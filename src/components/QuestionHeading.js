export default function QuestionHeading({
  currentQuestion,
  questionCount,
  questionText,
}) {
  return (
    <div>
      <div>
        <span className="text-3xl">
          Frage {currentQuestion} von {questionCount}
        </span>
      </div>
      <div>{questionText}</div>
    </div>
  );
}
