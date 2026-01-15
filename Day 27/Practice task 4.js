const user = {
  name: "Aqulin",
  age: 21
};
const jsonData = JSON.stringify(user);
console.log(jsonData);
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name);

