import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useTheme } from '../themeContext';
import Wishlist from '../components/Wishlist';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const { darkMode } = useTheme();

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price * item.quantity;
  }, 0);

  return (
    <>
      <div className={`container py-5 ${darkMode ? 'bg-dark text-light' : ''}`}>
        <h2 className="fw-bold mb-4 text-gradient text-center">🛍️ Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center"> 
            <h3 className="fw-bold mb-3">Your cart is empty</h3>
            <p className="text-muted">Looks like you haven’t added anything yet.</p>
            <Link to="/" className="btn btn-primary btn-lg mt-3 rounded-pill shadow-sm">
              🛍️ Start Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* 🧺 Cart Items */}
            <div className="row g-4 justify-content-center">
              {cartItems.map((item) => (
                <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center" key={item.id}>
                  <div
                    className={`card h-100 border-0 shadow-lg rounded-4 ${
                      darkMode ? 'bg-secondary text-light' : ''
                    }`}
                    style={{ width: '100%', maxWidth: '250px' }}
                  >
                   <img
  src={item.images?.[0] || item.image}
  className="card-img-top rounded-top-4"
  alt={item.name}
  style={{
    height: '180px',
    width: '100%',
    objectFit: 'cover', // crops and fills without distortion
  }}
/>

                    <div className="card-body d-flex flex-column text-center">
                      <h5 className="card-title fw-semibold">{item.name}</h5>
                      <p className="text-success fw-bold mb-2">{item.price}</p>

                      {/* Quantity Controls */}
                      <div className="d-flex justify-content-center align-items-center mb-3 gap-2">
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-circle"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span className="fw-bold">{item.quantity}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-circle"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

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

            {/* 💳 Total & Checkout */}
            <div className="text-center mt-5">
              <h4 className="fw-bold mb-3">
                Total: <span className="text-success">${totalPrice.toFixed(2)}</span>
              </h4>
              <Link to="/payment" className="btn btn-success btn-lg rounded-pill shadow">
                💳 Proceed to Payment
              </Link>
            </div>
          </>
        )}

        <style>{`
          .text-gradient {
            background: linear-gradient(to right, #007bff, #00c6ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </div>

      {/* ✅ Always show Wishlist */}
      <Wishlist />
      <br />
    </>
  );
};

export default Cart;
