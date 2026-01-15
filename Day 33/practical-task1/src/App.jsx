
import { useState } from "react";
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Click Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}

export default App;


