import React, { useState } from "react";

function ColorSwitcher() {
  const [color, setColor] = useState("white");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="container">
      <select
        onChange={handleColorChange}
        style={{ width: "100px", height: "30px" }}
      >
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div style={{ width: "100px", height: "100px", backgroundColor: color }}>
        Color Box
      </div>
    </div>
  );
}

export default ColorSwitcher;
