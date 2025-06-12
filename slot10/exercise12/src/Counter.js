import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <button onClick={() => setCount(count + 1)} className="btn">
        Increment
      </button>
      <h1>COUNT : {count}</h1>
    </div>
  );
}

export default Counter;
