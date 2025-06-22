import "./App.css";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./context/QuizContext";

function App() {
  return (
    <QuizProvider>
      <div className="App">
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;
