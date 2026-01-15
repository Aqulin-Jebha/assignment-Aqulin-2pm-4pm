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
