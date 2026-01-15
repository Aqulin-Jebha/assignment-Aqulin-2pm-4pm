function fetchData() {
  return new Promise(resolve => {
    resolve("Data received");
  });
}

fetchData().then(data => console.log(data));


async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();
