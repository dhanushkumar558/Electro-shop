import React, { useEffect, useRef } from 'react';
import { useTheme } from '../themeContext';
import { useLocation } from 'react-router-dom';

const Settings = () => {
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation();
  const accountRef = useRef(null);

 useEffect(() => {
  if (location.hash === '#account' && accountRef.current) {
    // Delay scroll to ensure DOM is fully rendered
    setTimeout(() => {
      accountRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
}, [location]);


  return (
    <div className={`container-fluid px-5 py-5 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
      {/* Settings Card */}
      <div
        className={`p-4 rounded shadow-sm mb-5 ${darkMode ? 'bg-secondary text-light' : 'bg-light text-dark'}`}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <h2 className="fw-bold text-gradient mb-4">⚙ User Settings</h2>
        <p className="text-muted mb-4">Manage your preferences and customize your experience.</p>

        <div className="form-check form-switch fs-5">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            {darkMode ? '🌙 Dark Mode Enabled' : '🌞 Light Mode Enabled'}
          </label>
        </div>
      </div>

      <div
  ref={accountRef}
  id="account"
  className={`p-4 rounded shadow-sm ${darkMode ? 'bg-secondary text-light' : 'bg-white text-dark'}`}
  style={{ maxWidth: '600px', margin: '0 auto' }}
>

        <h4 className="fw-bold mb-3">👤 Account Information</h4>
        <p><strong>Name:</strong> Dhanush Kumar</p>
        <p><strong>Email:</strong> dhanush@example.com</p>
        <p><strong>Member Since:</strong> Jan 2024</p>
        {/* Optional: Add edit buttons here */}
      </div>

      <style>{`
        .text-gradient {
          background: linear-gradient(90deg, #0d6efd, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Settings;
