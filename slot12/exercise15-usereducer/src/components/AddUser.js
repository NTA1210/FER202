import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
import ThemeContext from "../context/ThemeContext";

function AddUser({ onAdd }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const renderCount = useRef(1);
  const theme = useContext(ThemeContext);

  // Đếm số lần component render
  useEffect(() => {
    renderCount.current += 1;
  });

  // Focus vào input sau khi mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Xử lý thêm user
  const handleAdd = useCallback(() => {
    if (name.trim()) {
      onAdd({ id: Date.now(), name });
      setName("");
    }
  }, [name, onAdd]);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
        padding: 20,
        borderRadius: 8,
      }}
    >
      <h3>Add User</h3>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        style={{ marginRight: 10, padding: "6px 10px" }}
      />
      <button onClick={handleAdd}>Add User</button>
      <p>🔁 Component rendered: {renderCount.current} times</p>
    </div>
  );
}

export default AddUser;
