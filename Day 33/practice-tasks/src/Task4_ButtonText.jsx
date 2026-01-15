import { useState } from "react";

function Task4_ButtonText() {
  const [label, setLabel] = useState("Login");

  return (
    <>
      <h3>Button Text Change</h3>
      <button onClick={() => setLabel("Logged In")}>
        {label}
      </button>
    </>
  );
}

export default Task4_ButtonText;
