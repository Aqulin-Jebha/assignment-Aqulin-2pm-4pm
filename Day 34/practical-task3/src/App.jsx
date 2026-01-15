
import './App.css'
function App() {
  const users = [
    { id: 1, name: "Aqulin", age: 22 },
    { id: 2, name: "Saaniya", age: 21 },
  ];

  return (
    <>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} years
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
