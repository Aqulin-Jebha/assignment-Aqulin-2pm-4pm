import { useState } from "react";

function Task2_Toggle() {
  const [show, setShow] = useState(true);

  return (
    <>
      <h3>Toggle Text</h3>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <p>{show ? "Text is Visible" : "Text is Hidden"}</p>
    </>
  );
}

export default Task2_Toggle;
