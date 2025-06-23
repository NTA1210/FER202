// src/components/Quiz.js
import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function Quiz() {
  const {
    quizData,
    currentQuestion,
    selectedAnswer,
    handleAnswer,
    showScore,
    score,
    handleNextQuestion,
    resetQuiz,
  } = useContext(QuizContext);

  if (quizData.length === 0) return <p>No questions available.</p>;

  const q = quizData[currentQuestion];

  return (
    <div>
      {showScore ? (
        <div style={{ fontSize: "2rem", color: "red" }}>
          Quiz Completed!
          <br />
          Your score: {score}/{quizData.length}
          <br />
          <button onClick={resetQuiz}>Reset Quiz</button> {/* Nút Reset */}
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{q.question}</p>
          {q.answers.map((ans, idx) => (
            <div key={idx}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={ans}
                  checked={selectedAnswer === ans}
                  onChange={() => handleAnswer(ans)}
                />
                {ans}
              </label>
            </div>
          ))}
          <button onClick={handleNextQuestion}>Next</button>{" "}
          {/* để giống giao diện */}
        </div>
      )}
    </div>
  );
}

export default Quiz;
