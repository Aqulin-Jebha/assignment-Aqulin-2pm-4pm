function login(username,password) {
  try {
    if (!username || !password) {
      throw new Error("Username and password required");
    }
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
    console.log("Login successful");
  } catch (e) {
    console.log("Login Error:",e.message);
  }
}
login("aqulin", "123456"); 
login("", "1234567");    
login("aqu-6", "12345");    
