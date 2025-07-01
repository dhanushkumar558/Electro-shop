// src/components/AccountInfo.jsx
import React from 'react';
import { useTheme } from '../themeContext'; // To use darkMode state

const AccountInfo = () => {
  const { darkMode } = useTheme(); // Read dark mode value

  // Dummy user info; in real apps, you'd fetch this from auth/user context
  const user = {
    name: 'Dhanush Kumar',
    email: 'dhanush@example.com',
    joined: 'January 2024',
    phone: '+91 98765 43210',
  };

  return (
    <div
      className={`card shadow-sm p-4 rounded-4 mt-4 ${
        darkMode ? 'bg-dark text-light border border-secondary' : 'bg-light text-dark'
      }`}
    >
      <h4 className="fw-bold mb-3">👤 Account Information</h4>
      <ul className="list-group list-group-flush fs-5">
        <li className={`list-group-item ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>
          <strong>Name:</strong> {user.name}
        </li>
        <li className={`list-group-item ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>
          <strong>Email:</strong> {user.email}
        </li>
        <li className={`list-group-item ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>
          <strong>Phone:</strong> {user.phone}
        </li>
        <li className={`list-group-item ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>
          <strong>Member Since:</strong> {user.joined}
        </li>
      </ul>
    </div>
  );
};

export default AccountInfo;
