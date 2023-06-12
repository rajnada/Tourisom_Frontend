import React, { ChangeEvent, useState } from 'react';
import './login.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    // Send login request to backend
    // Example: You can use Axios or Fetch API to make a POST request to your backend login API
    console.log('Login form submitted');
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
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