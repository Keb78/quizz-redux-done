import { useQuizz, answerQuestion } from "./redux/quizz";

function Quizz() {
  const { questions, currentIndex } = useQuizz();
  const currentQuestion = questions[currentIndex];

  return (
    <div className="page-container">
      <div className="content-container">
        <h2 className="question-title">{currentQuestion.title}</h2>
        <div className="answer-buttons">
          <button className="answer-button" onClick={answerQuestion}>
            {currentQuestion.alt1}
          </button>
          <button className="answer-button" onClick={answerQuestion}>
            {currentQuestion.alt2}
          </button>
          <button className="answer-button" onClick={answerQuestion}>
            {currentQuestion.alt3}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quizz;
