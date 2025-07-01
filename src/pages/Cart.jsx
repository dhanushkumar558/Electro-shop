import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useTheme } from '../themeContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const { darkMode } = useTheme();

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className={`container py-5 text-center ${darkMode ? 'bg-dark text-light' : ''}`}>
        <h2 className="fw-bold mb-3">🛒 Your Cart is Empty</h2>
        <p className="text-muted">Looks like you haven’t added anything yet.</p>
        <Link to="/" className="btn btn-primary btn-lg mt-3 rounded-pill shadow-sm">
          🛍️ Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={`container py-5 ${darkMode ? 'bg-dark text-light' : ''}`}>
      <h2 className="fw-bold mb-4 text-gradient">🛍️ Your Cart</h2>

      <div className="row g-4">
        {cartItems.map((item) => (
          <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
            <div className={`card h-100 border-0 shadow-lg rounded-4 ${darkMode ? 'bg-secondary text-light' : ''}`}>
              <img
                src={item.images?.[0] || item.image}
                className="card-img-top rounded-top-4"
                alt={item.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold">{item.name}</h5>
                <p className="text-success fw-bold mb-3">{item.price}</p>
                <button
                  className="btn btn-outline-danger rounded-pill mt-auto"
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end mt-5">
        <h4 className="fw-bold mb-3">
          Total: <span className="text-success">${totalPrice.toFixed(2)}</span>
        </h4>
        <Link to="/payment" className="btn btn-success btn-lg rounded-pill shadow">
          💳 Proceed to Payment
        </Link>
      </div>

      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #007bff, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Cart;
