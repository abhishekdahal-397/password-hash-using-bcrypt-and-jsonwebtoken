function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  fetch("http://localhost:3001/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      return response.json();
    })
    .then((data) => {
      // Handle authentication response
      const { token } = data;
      console.log("Authentication successful. Token:", token);
      // You may want to store the token in local storage or session storage for future requests
    })
    .catch((error) => {
      console.error("Login failed:", error.message);
    });
  window.location.href = "./homepage.html";

  console.log(`Login - Username: ${username}, Password: ${password}`);
}

function register() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  fetch("http://localhost:3001/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Registration failed");
      }
      return response.json();
    })
    .then((data) => {
      // Handle registration response
      console.log("Registration successful:", data.message);
    })
    .catch((error) => {
      console.error("Registration failed:", error.message);
    });

  console.log(`Register - Username: ${username}, Password: ${password}`);
}
