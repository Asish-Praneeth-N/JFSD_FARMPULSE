import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:1010/api/auth/login', {
        email,
        password,
      });

      if (response.status === 200 && response.data.token && response.data.role) {
        const { ourUsers, token, role } = response.data;

        // Save login data to localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(ourUsers));
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        // Force a small delay to ensure state is updated
        await new Promise(resolve => setTimeout(resolve, 100));

        // Navigate based on role
        if (role === 'ROLE_ADMIN') {
          navigate('/dashboard', { replace: true });
        } else {
          navigate('/home', { replace: true });
        }
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred while logging in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box glass-effect">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;