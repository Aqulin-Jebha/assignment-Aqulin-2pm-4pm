function fakeApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: "User details loaded"
      });
    }, 2000);
  });
}

fakeApi().then(response => {
  console.log(response);
});

async function loadData() {
  try {
    const response = await fakeApi();
    console.log("Data:", response.data);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadData();
