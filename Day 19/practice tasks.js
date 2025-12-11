//task 1
function greet(){
    console.log("Good Morning")
}
greet()

//task2
function add(a,b){
    return a+b;
}
let result= add(10,87);
console.log(result)

//task 3
const div=(a,b) =>a/b;
console.log(div(12,2))

//task4
setTimeout(() => {
  console.log("Timer done!");
}, 1000);

//task5
(() => {
  console.log("Started!");
})();