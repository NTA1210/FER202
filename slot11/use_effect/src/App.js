import React from "react";
import ValidatedInput from "./ValidatedInput";
import FormValidation from "./FormValidation";
import FormValidation6 from "./FormValidation6";

function App() {
  return (
    <div>
      <h1>Xác thực Form</h1>
      <ValidatedInput />

      <h2>Kiểm tra Form với React-Bootstrap</h2>
      <FormValidation />

      <h2>Kiểm tra Form với React-Bootstrap (Bài 6)</h2>
      <FormValidation6 />
    </div>
  );
}

export default App;
