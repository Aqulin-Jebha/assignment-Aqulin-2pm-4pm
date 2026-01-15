import { useState } from 'react'

import './App.css'


function App() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <h2>Light / Dark Mode</h2>
      <button onClick={() => setDark(!dark)}>Toggle</button>

      <p style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        padding: "10px"
      }}>
        {dark ? "Dark Mode" : "Light Mode"}
      </p>
    </>
  );
}

export default App;

