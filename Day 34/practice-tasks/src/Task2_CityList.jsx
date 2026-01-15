function Task2_CityList() {
  const cities = ["Chennai", "Bangalore", "Delhi", "Mumbai", "Kochi"];

  return (
    <>
      <h3>City List</h3>
      <ul>
        {cities.map(city => (
          <li>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default Task2_CityList;
