function Child({ message }) {
  return <p>Child says: {message}</p>;
}

function Parent() {
  return <Child message="Hello from Parent" />;
}

function Task5() {
  return <Parent />;
}

export default Task5;
