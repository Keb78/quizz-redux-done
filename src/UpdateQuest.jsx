
import { updateQuest } from "./redux/quizz";
import { useState } from "react";
import { deleteQuest } from "./redux/quizz";

export default function UpdateQuest({ question }) {
  const [title, setTitle] = useState();
  const [alt1, setAlt1] = useState();
  const [alt2, setAlt2] = useState();
  const [alt3, setAlt3] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  function handleUpdate() {
    const newQuestion = {
      title,
      alt1,
      alt2,
      alt3,
      correctAnswer,
      id: question.id,
    };
    updateQuest(newQuestion);
  }

  function handleDelete(id) {
    deleteQuest(id);
  }

  return (
    <div className="flex justify-between">
      <input
        className="border border-black"
        value={question.title}
        type="text"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="border border-black"
        value={question.alt1}
        type="text"
        onChange={(event) => setAlt1(event.target.value)}
      />
      <input
        className="border border-black"
        value={question.alt2}
        type="text"
        onChange={(event) => setAlt2(event.target.value)}
      />
      <input
        className="border border-black"
        value={question.alt3}
        type="text"
        onChange={(event) => setAlt3(event.target.value)}
      />
      <input
        className="border border-black"
        value={question.correctAnswer}
        type="text"
        onChange={(event) => setCorrectAnswer(event.target.value)}
      />
      <button
        className="bg-sky-300 text-white rounded text-xl p-2"
        onClick={handleUpdate}
      >
        Update
      </button>
      <button
        className="bg-sky-300 text-white rounded text-xl p-2 ml-2"
        onClick={() => handleDelete(question.id)}
      >
        Delete
      </button>
    </div>
  );
}
