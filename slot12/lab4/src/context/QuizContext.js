import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export function useQuiz() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{ score, setScore }}>
      {children}
    </QuizContext.Provider>
  );
}
