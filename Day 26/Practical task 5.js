function getData() {
  return new Promise(resolve => {
    resolve("Data received");
  });
}

getData().then(data => console.log(data));

//async
async function fetchData() {
  const data = await getData();
  console.log(data);
}

fetchData();
