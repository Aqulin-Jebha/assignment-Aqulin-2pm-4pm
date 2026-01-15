function Footer({ year }) {
  return (
    <p>© {year}</p>
  );
}

function Task4() {
  return (
    <Footer year={2026} />
  );
}

export default Task4;
