function validateForm(name, email) {
  try {
    if (!name || !email) {
      throw new Error("All fields are required");
    }
    console.log("Form submitted successfully");
  } catch (error) {
    console.log("Error:",error.message);
  }
}
validateForm("Aqulin", "aquin@gmail.com"); 
validateForm("", "aq@gmail.com");      
