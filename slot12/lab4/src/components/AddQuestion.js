import React, { useState, useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function AddQuestion() {
  const { addQuestion } = useContext(QuizContext);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Validation logic
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }

    if (answers.some((ans) => !ans.trim())) {
      setError("All answer options are required.");
      return;
    }

    if (!correctAnswer.trim()) {
      setError("Please enter the correct answer.");
      return;
    }

    if (!answers.includes(correctAnswer.trim())) {
      setError("Correct answer must match one of the options.");
      return;
    }

    // Passed validation
    const newQuestion = {
      question: question.trim(),
      answers: answers.map((a) => a.trim()),
      correctAnswer: correctAnswer.trim(),
    };

    addQuestion(newQuestion);

    // Reset form
    setQuestion("");
    setAnswers(["", "", ""]);
    setCorrectAnswer("");
    setError("");
  };

  return (
    <div className="add-question-section">
      <h3>Add New Question</h3>

      {error && (
        <div style={{ color: "red", marginBottom: "0.5rem" }}>{error}</div>
      )}

      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {answers.map((a, i) => (
        <input
          key={i}
          type="text"
          placeholder={`Answer ${i + 1}`}
          value={a}
          onChange={(e) => {
            const copy = [...answers];
            copy[i] = e.target.value;
            setAnswers(copy);
          }}
        />
      ))}
      <input
        type="text"
        placeholder="Correct Answer (must match one of the options)"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddQuestion;
