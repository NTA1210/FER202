import React from "react";

const Question = ({
  question,
  options,
  selectedOption,
  onAnswerSelect,
  onSubmitAnswer,
}) => {
  return (
    <div className="question">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <div key={index} className="option">
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              value={option}
              checked={selectedOption === option}
              onChange={() => onAnswerSelect(option)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <button
        onClick={onSubmitAnswer}
        disabled={selectedOption === null}
        className="submit-button"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default Question;
