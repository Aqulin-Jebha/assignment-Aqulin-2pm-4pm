
import './App.css'

function App() {
  const todo = ["Learn React", "Practice Hooks", "Build Projects"];

  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {todo.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

