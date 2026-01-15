import { useState } from "react";

function Task5_Reset() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Counter with Reset</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <br /><br />
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Task5_Reset;
