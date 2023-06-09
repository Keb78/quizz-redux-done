import { useQuizz } from "./redux/quizz";

function Result() {
  const { score, questions } = useQuizz();

  const resultContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  };

  const resultTextStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#fff",
    padding: "10px",
    backgroundColor: "#42a5f5",
    border: "1px #42a5f5",
    borderRadius: "20px",
  };

  return (
    <div style={resultContainerStyle}>
      <p style={resultTextStyle}>
        Number of correct answers: {score} / {questions.length}
      </p>
    </div>
  );
}

export default Result;
