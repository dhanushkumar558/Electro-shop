import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../themeContext';

const Signup = () => {
  const { darkMode } = useTheme();

  return (
    <section
      className={`d-flex justify-content-center align-items-center min-vh-100 px-3 ${
        darkMode ? 'bg-dark text-white' : 'bg-body-tertiary'
      }`}
    >
      <div
        className={`card shadow-lg p-4 rounded-4 w-100 ${
          darkMode ? 'bg-secondary text-white' : ''
        }`}
        style={{ maxWidth: '420px' }}
      >
        <h2 className="text-center mb-4 fw-bold">📝 Create Your Account</h2>

        <form>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email address</label>
            <input
              type="email"
              className="form-control form-control-lg rounded-3"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control form-control-lg rounded-3"
              placeholder="••••••••"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg rounded-pill">
              ✅ Sign Up
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <span className="text-muted">Already have an account?</span>{' '}
          <Link to="/login" className="fw-semibold text-decoration-none">
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
