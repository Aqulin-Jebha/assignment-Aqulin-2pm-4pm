function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful");
      } else {
        reject("Invalid credentials");
      }
    }, 1500);
  });
}

async function loginUser() {
  try {
    const result = await login("admin", "1234");
    console.log(result);

    console.log("Loading dashboard...");
    console.log("Dashboard ready");
  } catch (error) {
    console.log("Login failed:", error);
  }
}

loginUser();
