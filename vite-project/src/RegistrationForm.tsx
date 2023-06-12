import React, { ChangeEvent, useState } from 'react';
import './register.css'

const RegistrationForm = () => {
    const [name1, setname1] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');

  const handlename1Change = (e:ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleemailChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleUsernameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    // Send registration request to backend
    // Example: You can use Axios or Fetch API to make a POST request to your backend registration API
    console.log('Registration form submitted');
    console.log('Name:', name1);
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <div className='form-container'>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
  
};

export default RegistrationForm;