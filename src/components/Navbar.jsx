import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../themeContext';
import { useCart } from '../context/CartContext';
import {
  Container,
  Nav,
  Navbar as BSNavbar,
  NavDropdown,
  Badge,
} from 'react-bootstrap';

function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const { cartItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const handleCollapse = () => {
    const nav = document.querySelector('.navbar-collapse');
    if (nav?.classList.contains('show')) {
      nav.classList.remove('show');
    }
  };

  return (
    <BSNavbar
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      expand="lg"
      className={`sticky-top py-2 shadow-sm ${
        darkMode ? 'border-bottom border-light' : 'border-bottom border-dark'
      }`}
    >
      <Container fluid>
        <Link
          to="/"
          className={`navbar-brand fw-bold fs-4 text-gradient ${
            darkMode ? 'text-white' : ''
          }`}
          onClick={handleCollapse}
        >
          ⚡ ElectroShop
        </Link>

        <BSNavbar.Toggle aria-controls="main-navbar" />

        <BSNavbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Link
              to="/signup"
              className={`nav-link ${
                location.pathname === '/signup'
                  ? 'fw-semibold text-primary'
                  : darkMode
                  ? 'text-light'
                  : ''
              }`}
              onClick={handleCollapse}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className={`nav-link ${
                location.pathname === '/login'
                  ? 'fw-semibold text-primary'
                  : darkMode
                  ? 'text-light'
                  : ''
              }`}
              onClick={handleCollapse}
            >
              Login
            </Link>
            <Link
              to="/cart"
              className={`nav-link position-relative ${
                darkMode ? 'text-light' : ''
              }`}
              onClick={handleCollapse}
            >
              🛒 Cart
              {cartItems.length > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {cartItems.length}
                </Badge>
              )}
            </Link>
          </Nav>

          <Nav>
            <NavDropdown
              title="⚙ Settings"
              align="end"
              className={darkMode ? 'text-white' : ''}
            >
              <NavDropdown.Item onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/settings#account"
                onClick={handleCollapse}
              >
                👤 Account Info
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BSNavbar.Collapse>
      </Container>

      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #007bff, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-link {
          padding: 0.5rem 1rem;
        }
        .nav-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </BSNavbar>
  );
}

export default Navbar;
