import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../themeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`mt-auto pt-5 pb-3 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <Row className="mb-4 text-center text-md-start">
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold text-gradient">⚡ ElectroShop</h5>
            <p className="small">
              Discover premium electronics for home, kitchen, garden, and more.
            </p>
          </Col>
          <Col xs={6} md={2} className="mb-4 mb-md-0">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-reset text-decoration-none">Home</Link></li>
              <li><Link to="/cart" className="text-reset text-decoration-none">Cart</Link></li>
              <li><Link to="/payment" className="text-reset text-decoration-none">Payment</Link></li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="mb-4 mb-md-0">
            <h6 className="fw-semibold mb-3">Account</h6>
            <ul className="list-unstyled">
              <li><Link to="/login" className="text-reset text-decoration-none">Login</Link></li>
              <li><Link to="/signup" className="text-reset text-decoration-none">Sign Up</Link></li>
              <li><Link to="/settings" className="text-reset text-decoration-none">Settings</Link></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h6 className="fw-semibold mb-3">Contact Us</h6>
            <p className="mb-1">📧 support@electroshop.com</p>
            <p className="mb-0">📞 +91 98765 43210</p>
          </Col>
        </Row>

        <hr className={darkMode ? 'border-secondary' : 'border-dark'} />

        <p className="text-center small mb-0">
          © {new Date().getFullYear()} ElectroShop. All rights reserved.
        </p>
      </Container>

      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #007bff, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
