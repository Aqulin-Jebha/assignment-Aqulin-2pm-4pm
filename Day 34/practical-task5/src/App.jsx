import { useState } from 'react'

import './App.css'
function App() {
  const items = ["item 1", "item 2", "item 3"];
  const [show, setShow] = useState(true);

  return (
    <>
      <h2>Toggle List</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} List
      </button>

      {show && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
