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
        <a
  href="/"
  className={`navbar-brand fw-bold fs-4 text-gradient ${darkMode ? 'text-white' : ''}`}
  onClick={handleCollapse}
>
 🍦 Sweet-Bite
</a>


        <BSNavbar.Toggle aria-controls="main-navbar" />

       <BSNavbar.Collapse id="main-navbar">
  <Nav className="w-100 d-lg-flex flex-column flex-lg-row">
    {/* Sign Up */}
    <Link
      to="/signup"
      className={`nav-item nav-link px-3 py-2 rounded ${
        location.pathname === '/signup'
          ? 'fw-bold text-primary bg-light'
          : darkMode ? 'text-light' : 'text-dark'
      }`}
      onClick={handleCollapse}
    >
      📝 Sign Up
    </Link>

    {/* Login */}
    <Link
      to="/login"
      className={`nav-item nav-link px-3 py-2 rounded ${
        location.pathname === '/login'
          ? 'fw-bold text-primary bg-light'
          : darkMode ? 'text-light' : 'text-dark'
      }`}
      onClick={handleCollapse}
    >
      🔐 Login
    </Link>

    {/* Cart */}
    <Link
      to="/cart"
      className={`nav-item nav-link px-3 py-2 rounded position-relative ${
        location.pathname === '/cart'
          ? 'fw-bold text-primary bg-light'
          : darkMode ? 'text-light' : 'text-dark'
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

    {/* Orders */}
    <Link
      to="/orders"
      className={`nav-item nav-link px-3 py-2 rounded ${
        location.pathname === '/orders'
          ? 'fw-bold text-primary bg-light'
          : darkMode ? 'text-light' : 'text-dark'
      }`}
      onClick={handleCollapse}
    >
      📦 Orders
    </Link>

    {/* Wishlist */}
    <Link
      to="/wishlist"
      className={`nav-item nav-link px-3 py-2 rounded ${
        location.pathname === '/wishlist'
          ? 'fw-bold text-primary bg-light'
          : darkMode ? 'text-light' : 'text-dark'
      }`}
      onClick={handleCollapse}
    >
      💖 Wishlist
    </Link>
  </Nav>

  {/* Settings Dropdown */}
  <Nav className="ms-auto fw-bold">
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
        
          
      `}</style>
      <style>{`
  .nav-link {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #e9ecef;
    text-align: left;
  }

  @media (max-width: 992px) {
    .nav-link {
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .text-gradient {
    background: linear-gradient(to right, #007bff, #00c6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`}</style>

    </BSNavbar>
  );
}

export default Navbar;
