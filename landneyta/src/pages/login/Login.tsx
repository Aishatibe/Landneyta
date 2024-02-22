import React, { useState } from 'react';
import './Login.css';
import { authService } from '../../services/authServices';

const Login: React.FC = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Call the login function from authService
      await authService.login(usernameOrEmail, password);
      // Redirect the user to the dashboard or another protected route upon successful login
      // You can use React Router's history.push() or Redirect component for this
      // Example: history.push('/dashboard');
    } catch (error) {
      setError('Invalid username/email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <div>
          <label htmlFor="usernameOrEmail">Username or Email:</label>
          <input
            type="text"
            id="usernameOrEmail"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
