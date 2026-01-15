function Profile({ name, role }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

function Task3() {
  return <Profile name="Aqulin" role="Frontend Developer" />;
}

export default Task3;
