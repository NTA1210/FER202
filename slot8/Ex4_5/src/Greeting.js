import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Greeting() {
  const [greeting, setGreeting] = useState("");

  return (
    <>
      <h1>{greeting}</h1>
      <Button variant="outline-success" onClick={() => setGreeting("Hello")}>
        Success
      </Button>
    </>
  );
}

export default Greeting;
