import "./App.css";
import { TodoList } from "./components/ToDoList.jsx";

function App() {
  return (
    <div className="App">
      <div className="ToDoListDiv">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
