
import './App.css'
function App() {
  const data = [];

  return (
    <>
      <h2>No Data Example</h2>
      {data.length === 0 && <p>No data available</p>}
    </>
  );
}

export default App;
