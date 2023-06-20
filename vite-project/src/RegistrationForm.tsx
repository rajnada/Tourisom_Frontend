import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import "./css/register.css";
const RegistrationForm = () => {
  const [name1, setname1] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handlename1Change = (e: ChangeEvent<HTMLInputElement>) => {
    setname1(e.target.value);
  };

  const handleemailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        {
          name1,
          password,
          email,
        }
      );

      // Optionally, perform additional actions upon successful registration
    } catch (error) {
      console.error("Error during registration:", error);
    }

    console.log("Registration form submitted");
    console.log("Name:", name1);
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset the form
    setname1("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <div>
          <label>Name:</label>
          <input type="text" value={name1} onChange={handlename1Change} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={handleemailChange} />
        </div>
        <div>
          {/* <label>Username:</label> */}
          {/* <input type="text" value={username} onChange={handleUsernameChange} /> */}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
