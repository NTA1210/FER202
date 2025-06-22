import React from "react";
// import "./QuestionCard.css";

function QuestionCard({ question, answers, selected, setSelected }) {
  return (
    <div className="card">
      <p>{question}</p>
      {answers.map((answer, idx) => (
        <label
          key={idx}
          className={`option ${selected === answer ? "selected" : ""}`}
        >
          <input
            type="radio"
            name="answer"
            value={answer}
            checked={selected === answer}
            onChange={() => setSelected(answer)}
          />
          {answer}
        </label>
      ))}
    </div>
  );
}

export default QuestionCard;
