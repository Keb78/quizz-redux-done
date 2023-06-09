import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { addQuest, useQuizz } from "./redux/quizz";
import UpdateQuest from "./UpdateQuest";

function App() {
  const quizzObject = useQuizz();
  const [title, setTitle] = useState("");
  const [alt1, setAlt1] = useState("");
  const [alt2, setAlt2] = useState("");
  const [alt3, setAlt3] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  function handleAdd() {
    const quizz = {
      title: title,
      alt1: alt1,
      alt2: alt2,
      alt3: alt3,
      correctAnswer: correctAnswer,
      id: Date.now(),
    };

    addQuest(quizz);
  }

  return (
    <div className="app">
      <h1 className="app-title">Quizz Editor</h1>

      <div className="input-container">
        <input
          className="input-field input-field-small" // Add the input-field-small class here
          type="text"
          placeholder="Question Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="input-field input-field-small" // Add the input-field-small class here
          type="text"
          placeholder="Option 1"
          value={alt1}
          onChange={(event) => setAlt1(event.target.value)}
        />
        <input
          className="input-field input-field-small" // Add the input-field-small class here
          type="text"
          placeholder="Option 2"
          value={alt2}
          onChange={(event) => setAlt2(event.target.value)}
        />
        <input
          className="input-field input-field-small" // Add the input-field-small class here
          type="text"
          placeholder="Option 3"
          value={alt3}
          onChange={(event) => setAlt3(event.target.value)}
        />
        <input
          className="input-field input-field-small" // Add the input-field-small class here
          type="text"
          placeholder="Correct Answer"
          value={correctAnswer}
          onChange={(event) => setCorrectAnswer(event.target.value)}
        />
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      </div>

      <div className="questions-container">
        {quizzObject.questions.map((question) => (
          <UpdateQuest key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}

export default App;
