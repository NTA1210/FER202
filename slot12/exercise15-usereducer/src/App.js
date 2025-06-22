import React, { useState } from "react";
import Counter from "./components/Counter";
import ChangeNameAge from "./components/ChangeNameAge";
import ItemList from "./components/ItemList";
import QuestionBank from "./components/QuestionBank";
import ThemeContext from "./context/ThemeContext";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [theme, setTheme] = useState("light");
  const [users, setUsers] = useState([]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const appStyle = {
    backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
    color: theme === "dark" ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  // ✅ Thêm user mới
  const handleAddUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={appStyle}>
        <h1>🧠 Lab 4 - All About Hook</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>

        <hr />
        <h2>🧮 Counter</h2>
        <Counter />

        <hr />
        <h2>👤 Change Name & Age</h2>
        <ChangeNameAge />

        <hr />
        <h2>📦 Item List</h2>
        <ItemList />

        <hr />
        <h2>❓ Quiz</h2>
        <QuestionBank />

        <hr />
        <h2>👥 Add User & User List</h2>
        <AddUser onAdd={handleAddUser} />
        <UserList users={users} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
