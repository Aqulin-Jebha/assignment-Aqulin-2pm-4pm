import { useState } from "react";

function Task5_TernaryOperator() {
  const [online, setOnline] = useState(true);

  return (
    <>
      <h3>Ternary Operator</h3>
      <button onClick={() => setOnline(!online)}>
        Toggle Status
      </button>

      <p>{online ? "User is Online" : "User is Offline"}</p>
    </>
  );
}
export default Task5_TernaryOperator;
