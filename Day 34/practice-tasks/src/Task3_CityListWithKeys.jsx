function Task3_CityListWithKeys() {
  const cities = ["Chennai", "Bangalore", "Delhi", "Mumbai", "Kochi"];

  return (
    <>
      <h3>City List with Keys</h3>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default Task3_CityListWithKeys;
