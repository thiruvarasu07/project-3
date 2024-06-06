import React, { useState } from 'react';
import "../src/login .css"

function LoginForm() {
  // State variables to store username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation or authentication logic here
    console.log('Submitted:', { username, password });
    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
