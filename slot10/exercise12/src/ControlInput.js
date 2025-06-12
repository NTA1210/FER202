import React, { useState } from "react";

function InputField() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <input type="text" value={text} onChange={handleChange} />
      <h1>Input text : {text}</h1>
    </div>
  );
}

export default InputField;
