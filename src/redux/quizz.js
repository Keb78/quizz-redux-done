import { createReduxModule } from "hooks-for-redux";

const initialState = {
  quizzStarted: false,
  showResult: false,
  currentIndex: 0,
  score: 0,
  questions: [
    {
      title: "Which planet is known as the Red Planet?",
      alt1: "Venus",
      alt2: "Jupiter",
      alt3: "Mars",
      correctAnswer: 3,
      id: 1,
    },
    {
      title: "Who is the author of the Harry Potter book series?",
      alt1: "J.R.R. Tolkien",
      alt2: "George R.R. Martin",
      alt3: "J.K. Rowling",
      correctAnswer: 3,
      id: 2,
    },
    {
      title: "Do you like cats?",
      alt1: "Yes",
      alt2: "No",
      alt3: "I don't trust people who like cats",
      correctAnswer: 3,
      id: 3,
    },
    {
      title: "Jimmy Åkesson is?",
      alt1: "A. a dick",
      alt2: "B. a twat",
      alt3: "C. a cunt",
      correctAnswer: 1-3,
      id: 4,
    },
  ],
};

export const [
  useQuizz,
  { addQuest, updateQuest, deleteQuest, startQuiz, answerQuestion },
] = createReduxModule("quizz", initialState, {
  addQuest: (state, question) => {
    return {
      ...state,
      questions: [...state.questions, question],
    };
  },

  updateQuest: (state, question) => {
    const newQuestions = state.questions.map((q) => {
      if (q.id == question.id) {
        return question;
      }
      return q;
    });

    console.log(newQuestions);

    return {
      ...state,
      questions: newQuestions,
    };
  },

  deleteQuest: (state, id) => {
    return {
      ...state,
      questions: state.questions.filter((question) => question.id !== id),
    };
  },

  startQuiz: (state) => {
    return {
      ...state,
      quizzStarted: true,
    };
  },

  answerQuestion: (state, alt) => {
    const question = state.questions[state.currentIndex];
    let score = state.score;
    let currentIndex = state.currentIndex;
    let showResult = state.showResult;

    let correctAnswer = question.correctAnswer == alt;
    if (correctAnswer) {
      score += 1;
    }

    if (currentIndex != state.questions.length - 1) {
      currentIndex++;
    } else {
      showResult = true;
    }

    return {
      ...state,
      score,
      currentIndex,
      showResult,
    };
  },
});
