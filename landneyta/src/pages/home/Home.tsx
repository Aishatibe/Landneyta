import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home: React.FC = () => {
  return (
    <div>
      <h2>Welcome to Your Real Estate Application</h2>
      <p>Connect with agents, browse properties, and manage your listings.</p>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/properties">View Properties</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
