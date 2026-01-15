import { useState } from "react";

function Task3_Input() {
  const [text, setText] = useState("");

  return (
    <>
      <h3>Live Input</h3>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
      <p>You typed: {text}</p>
    </>
  );
}

export default Task3_Input;
