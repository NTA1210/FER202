import "./App.css";
import Counter from "./Counter";
import InputField from "./ControlInput";
import ToggleText from "./ToggleText";
import TodoList from "./TodoList";
import ColorSwitcher from "./ColorSwitcher";
import SearchFilter from "./SearchFilter";
import DragAndDrop from "./DragAndDrop";

function App() {
  return (
    <div className="App">
      <Counter />
      <InputField />
      <ToggleText />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragAndDrop />
    </div>
  );
}

export default App;
