import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["javascript", "scripting", "script", "js"],
      correctAnswer: "script",
      selectedAnswer: "",
    },
    {
      id: 2,
      question: "What are variables used for in JavaScript Programs?",
      options: [
        "Storing numbers, dates, or other values",
        "Varying randomly",
        "Causing high-school algebra flashbacks",
        "None of these",
      ],
      correctAnswer: "Storing numbers, dates, or other values",
      selectedAnswer: "",
    },
    {
      id: 3,
      question:
        "Which of the following can't be done with client-side JavaScript?",
      options: [
        "Validating a form",
        "Sending a form's contents by email",
        "Storing cookies",
        "Changing HTML content",
      ],
      correctAnswer: "Sending a form's contents by email",
      selectedAnswer: "",
    },
    {
      id: 4,
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Google", "Oracle"],
      correctAnswer: "Netscape",
      selectedAnswer: "",
    },
    {
      id: 5,
      question: "Which of the following is not a JavaScript data type?",
      options: ["Undefined", "Number", "Float", "Boolean"],
      correctAnswer: "Float",
      selectedAnswer: "",
    },
  ],
  currentQuestionIndex: 0,
  showResults: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) question.selectedAnswer = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
      }
    },
    goToQuestion: (state, action) => {
      state.currentQuestionIndex = action.payload;
    },
    submitQuiz: (state) => {
      state.showResults = true;
    },
    resetQuiz: (state) => {
      state.questions.forEach((q) => (q.selectedAnswer = ""));
      state.currentQuestionIndex = 0;
      state.showResults = false;
    },
  },
});

export const {
  selectAnswer,
  nextQuestion,
  prevQuestion,
  goToQuestion,
  submitQuiz,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
