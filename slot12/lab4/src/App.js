import React from "react";
import { QuizProvider } from "./context/QuizContext";
import Quiz from "./components/Quiz";
import AddQuestion from "./components/AddQuestion";
import "./App.css"; // Thêm dòng này

function App() {
  return (
    <QuizProvider>
      <div className="container">
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;
