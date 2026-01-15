import { useState } from "react";

function Task1() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <h3>Login Status</h3>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        Toggle
      </button>
      <p>{loggedIn ? "Logged In" : "Logged Out"}</p>
    </>
  );
}

export default Task1;
