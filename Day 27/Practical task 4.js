const user = {
  name: "Akhil",
  age: 21
};
const jsonData = JSON.stringify(user);
console.log(jsonData);
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name);

