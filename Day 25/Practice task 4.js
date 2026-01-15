function fakeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: "User data fetched"
      });
    }, 2000);
  });
}

fakeApiCall()
  .then(response => console.log(response))
  .catch(error => console.log(error));

async function fetchData() {
  try {
    const response = await fakeApiCall();
    console.log(response.data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();
