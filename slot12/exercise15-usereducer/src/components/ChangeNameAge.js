import React, { useReducer } from "react";
import { Form, Container } from "react-bootstrap";

// Reducer function
function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", value: e.target.value });
  };

  const handleAgeChange = (e) => {
    dispatch({ type: "SET_AGE", value: e.target.value });
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Update Name and Age</h3>
      <Form>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={state.name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group controlId="formAge" className="mb-3">
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type="number"
            min="0"
            max="120"
            value={state.age}
            onChange={(e) =>
              dispatch({ type: "SET_AGE", value: e.target.value })
            }
            placeholder="Enter your age"
          />
        </Form.Group>
      </Form>

      <div className="mt-4">
        <h5>👤 Name: {state.name || "(empty)"}</h5>
        <h5>🎂 Age: {state.age || "(empty)"}</h5>
      </div>
    </Container>
  );
}

export default ChangeNameAge;
