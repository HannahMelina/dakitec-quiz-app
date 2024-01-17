export default function EndPage({ score, possibleScore, restart }) {
  return (
    <div className="text-3xl">
      Du hast {score} von {possibleScore} möglichen Punkten erreicht
      <div>
        <button
          className="mt-8 text-xl shadow-md shadow-slate-700 bg-slate-300 ring-2 ring-slate-500 rounded m-4 pl-2 pr-2 pt-1 pb-1 hover:bg-slate-500"
          onClick={restart}
        >
          Zurück zum Start
        </button>
      </div>
    </div>
  );
}
