import { useState } from "react";

function Task4_AndOperator() {
  const [show, setShow] = useState(false);

  return (
    <>
      <h3>AND (&&) Operator</h3>
      <button onClick={() => setShow(!show)}>
        Toggle Message
      </button>

      {show && <p>This message is shown using &&</p>}
    </>
  );
}

export default Task4_AndOperator;
