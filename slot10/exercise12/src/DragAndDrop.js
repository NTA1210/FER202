import React, { useState } from "react";

function DragAndDrop() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDrop = (index) => {
    const newItems = [...items];
    const draggedItem = newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggedItem[0]);
    setItems(newItems);
    setDraggingItem(null);
  };

  return (
    <div className="container">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{ cursor: "move", padding: "8px", border: "1px solid #ccc" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragAndDrop;
