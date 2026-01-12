function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero not allowed");
    }
    console.log("Result:",a/b);
  } catch (e) {
    console.log("Calculator Error:",e.message);
  }
}
divide(10, 2);  
divide(10, 0); 
