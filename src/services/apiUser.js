export async function createUser(userData) {
  try {
    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Error creating user");
    }
    const data = await response.json();
    console.log("New user created:", data);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

export async function signInUser(email, password) {
  try {
    const response = await fetch("http://localhost:4000/users");
    const users = await response.json();

    const user = users.map(() => email === email && password === password);

    if (user) {
      // console.log("Sign-in successful:", user);
      // You can return the user object or perform additional actions here
    } else {
      throw Error("Invalid email or password");
    }
  } catch (error) {
    throw Error("Error signing in:", error);
  }
}
