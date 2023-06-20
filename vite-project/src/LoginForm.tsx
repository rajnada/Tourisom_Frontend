import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import "./css/login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send login request to backend
    // Example: You can use Axios or Fetch API to make a POST request to your backend login API

    try {
      const response = await axios.post("/api/v1/login", { email, password });
      // Handle successful login, e.g., save token to local storage or set authentication state
    } catch (error) {
      // Handle login error, e.g., display error message to the user
    }
    console.log("Login form submitted");
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset the form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div>
          <label>EMail:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
