import { useState } from "react";

function Task1_Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Counter</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Task1_Counter;
