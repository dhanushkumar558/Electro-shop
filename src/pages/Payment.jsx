import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../themeContext';

const Payment = () => {
  const { cartItems, clearCart } = useCart();
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price;
  }, 0);

  const handlePayment = () => {
    alert(`✅ Payment Successful via ${paymentMethod.toUpperCase()}!`);
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold text-danger mb-4">🛒 Cart is Empty</h2>
        <Link to="/" className="btn btn-primary rounded-pill shadow">
          ⬅️ Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={`container py-5 ${darkMode ? 'bg-dark text-white' : ''}`}>
      <h2 className="fw-bold text-gradient mb-4">💳 Payment</h2>

      {/* Order Summary */}
      <div className={`card shadow-sm rounded-4 mb-4 ${darkMode ? 'bg-secondary text-white' : ''}`}>
        <div className="card-body">
          <h5 className="card-title mb-3">🛍️ Order Summary</h5>
          <ul className="list-group list-group-flush">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${darkMode ? 'bg-dark text-white border-light' : ''}`}
              >
                <span>{item.name}</span>
                <span className="fw-semibold">{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between mt-4 border-top pt-3">
            <strong>Total:</strong>
            <strong className="text-success">${total.toFixed(2)}</strong>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-4">
        <h5 className="mb-3">🧾 Select Payment Method:</h5>
        <div className="btn-group w-100">
          <button
            className={`btn ${paymentMethod === 'paypal' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setPaymentMethod('paypal')}
          >
            🅿 PayPal
          </button>
          <button
            className={`btn ${paymentMethod === 'upi' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setPaymentMethod('upi')}
          >
            🇮🇳 UPI
          </button>
          <button
            className={`btn ${paymentMethod === 'stripe' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setPaymentMethod('stripe')}
          >
            💳 Stripe
          </button>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        className="btn btn-lg btn-success rounded-pill shadow-sm w-100"
        onClick={handlePayment}
      >
        ✅ Confirm & Pay with {paymentMethod.toUpperCase()}
      </button>

      {/* Back */}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-link text-decoration-none">
          ⬅️ Back to Shop
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

export default Payment;
