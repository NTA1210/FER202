import React, { useReducer, useMemo, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AddUser from "./AddUser";

// Reducer
function userReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];
    default:
      return state;
  }
}

function UserList() {
  const [users, dispatch] = useReducer(userReducer, []);
  const theme = useContext(ThemeContext);

  const handleAdd = (user) => {
    dispatch({ type: "ADD_USER", user });
  };

  const userCount = useMemo(() => users.length, [users]);

  return (
    <div
      style={{ background: theme === "dark" ? "#444" : "#fafafa", padding: 20 }}
    >
      <h3>User List</h3>
      <AddUser onAdd={handleAdd} />
      <p>Total Users: {userCount}</p>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
