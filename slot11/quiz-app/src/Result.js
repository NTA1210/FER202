import React from "react";

const Result = ({ score, total, onRestart }) => {
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score} out of {total}
      </p>
      <p>Percentage: {((score / total) * 100).toFixed(2)}%</p>
      <button onClick={onRestart} className="restart-button">
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
