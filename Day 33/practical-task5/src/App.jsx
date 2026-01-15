import { useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
      <h2>Multiple States</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <p>Name: {name}</p>
    </>
  );
}

export default App;

