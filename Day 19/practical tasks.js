//task 1 BMI Calculator
function bmi(w, h) {
    let output = 703 * (w / (h * h));
    return (output);
}
let result = bmi(45, 145);
console.log("BMI:", result)

//task 2 Greeting System
function greet(name) {
    return ("Welcome" + name);
}
console.log(greet("AQULIN"))

//task 3 Marks to Grade Converter
function grade(mark) {
    if (mark >= 90) {
        return "A";
    } else if (mark >= 75) {
        return "B";
    } else if (mark >= 60) {
        return "C";
    } else if (mark >= 50) {
        return "D";
    } else if (mark >= 35) {
        return "E";
    } else {
        return "F";
    }
}
let r = grade(68)
console.log(r)

//task 4 Array Processing with Callbacks
let numb=[1,2,5,8,9,10];
function array(numb,array){
    console.log("array",numb[2])
}

function Array(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

Array([10, 20, 30], function (item) {
  console.log("Processed:", item);
});

