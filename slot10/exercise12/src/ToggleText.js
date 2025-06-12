import React, { useState } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setIsVisible(!isVisible)} className="btn">
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>Toggle me!</p>}
    </div>
  );
}

export default ToggleText;
