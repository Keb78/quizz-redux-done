import { useQuizz, startQuiz } from "./redux/quizz";
import Quizz from "./Quizz";
import Result from "./Result";

function QuizzPage() {
  const { showResult, quizzStarted } = useQuizz();

  function renderPart() {
    if (showResult) {
      return <Result />;
    } else if (quizzStarted) {
      return <Quizz />;
    } else {
      return (
        <div className="flex justify-center"> {/* Center the button horizontally */}
          <button
            className="bg-orange-500 text-white rounded text-xl p-2 w-64" // Modify the width here
            onClick={() => startQuiz()}
          >
            Starta Quiz
          </button>
        </div>
      );
    }
  }

  return (
    <div className="flex flex-col">
      {renderPart()}
    </div>
  );
}

export default QuizzPage;
