// src/context/QuizContext.js
import React, { createContext, useState } from "react";
import { initialQuizData } from "../data/quizData";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(initialQuizData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const next = currentQuestion + 1;
    if (next < quizData.length) {
      if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
        setScore((prev) => prev + 1);
      }
      setCurrentQuestion(next);
      setSelectedAnswer("");
    }

    if (next === quizData.length) {
      setShowScore(true);
    }
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer("");
    setShowScore(false);
  };

  const addQuestion = (newQ) => {
    setQuizData([...quizData, newQ]);
  };

  return (
    <QuizContext.Provider
      value={{
        quizData,
        currentQuestion,
        score,
        selectedAnswer,
        showScore,
        handleAnswer,
        handleNextQuestion,
        resetQuiz,
        addQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
