function Card({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      {children}
    </div>
  );
}

function Task1() {
  return (
    <Card>
      <h3>Card title</h3>
      <p>This content comes from children</p>
    </Card>
  );
}

export default Task1;
