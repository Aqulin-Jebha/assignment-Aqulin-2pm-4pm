function validateNumber(value) {
  try {
    if (value === "") {
      throw new Error("input cannot be empty");
    }
    if (isNaN(value)) {
      throw new Error("input must be a number");
    }
    console.log("valid number:", value);
  } catch (error) {
    console.log("error:", error.message);
  }
}
validateNumber("10");  
validateNumber("abc");  
validateNumber("");     
