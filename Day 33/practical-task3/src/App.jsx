import { useState } from "react";
import './App.css'



function App() {
  const [text, setText] = useState("");

  return (
    <>
      <h2>Input Preview</h2>
      <input
        type="text"
        placeholder="Type here"
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </>
  );
}

export default App;

