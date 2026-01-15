function Footer(props) {
  return (
    <p>© {props.year}</p>
  );
}

function Task2() {
  return (
    <Footer year={2026} />
  );
}

export default Task2;
