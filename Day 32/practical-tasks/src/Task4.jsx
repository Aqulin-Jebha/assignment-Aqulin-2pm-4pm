function Button({ text }) {
  return <button>{text}</button>;
}

function Task4() {
  return (
    <>
      <Button text="Login" />
      <Button text="Register" />
      <Button text="Logout" />
    </>
  );
}

export default Task4;
