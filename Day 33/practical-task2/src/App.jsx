import { useState } from "react";
import './App.css'

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <h2>Show / Hide Profile</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Profile
      </button>

      {show && <p>Name: Aqulin</p>}
    </>
  );
}

export default App;
