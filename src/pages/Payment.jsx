import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../themeContext';
import { motion } from 'framer-motion';

const Payment = () => {
  const { cartItems, clearCart } = useCart();
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price * item.quantity;
  }, 0);

  const handlePayment = () => {
    const previousOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      items: cartItems,
      time: new Date().toLocaleString(),
    };

    localStorage.setItem('orders', JSON.stringify([...previousOrders, newOrder]));
    clearCart();

    alert(`✅ Payment Successful via ${paymentMethod.toUpperCase()}!`);
    navigate('/orders');
  };

  if (cartItems.length === 0) {
    return (
      <motion.div
        className="container py-5 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="fw-bold text-danger mb-4">🛒 Cart is Empty</h2>
        <Link to="/" className="btn btn-primary rounded-pill shadow">
          ⬅️ Continue Shopping
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`container py-5 ${darkMode ? 'bg-dark text-white' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h2
        className="fw-bold text-gradient mb-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        💳 Payment
      </motion.h2>

      {/* Order Summary */}
      <motion.div
        className={`card shadow-sm rounded-4 mb-4 ${darkMode ? 'bg-secondary text-white' : ''}`}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="card-body">
          <h5 className="card-title mb-3">🛍️ Order Summary</h5>
          <ul className="list-group list-group-flush">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  darkMode ? 'bg-dark text-white border-light' : ''
                }`}
              >
                <span>
                  {item.name} <small className="text-muted">x{item.quantity}</small>
                </span>
                <span className="fw-semibold">
                  ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between mt-4 border-top pt-3">
            <strong>Total:</strong>
            <strong className="text-success">${total.toFixed(2)}</strong>
          </div>
        </div>
      </motion.div>

      {/* Payment Methods */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h5 className="mb-3">🧾 Select Payment Method:</h5>
        <div className="btn-group w-100">
          {['paypal', 'upi', 'stripe'].map((method) => (
            <button
              key={method}
              className={`btn ${
                paymentMethod === method ? 'btn-primary' : 'btn-outline-primary'
              }`}
              onClick={() => setPaymentMethod(method)}
            >
              {method === 'paypal' && '🅿 PayPal'}
              {method === 'upi' && '🇮🇳 UPI'}
              {method === 'stripe' && '💳 Stripe'}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Confirm Button */}
      <motion.button
        className="btn btn-lg btn-success rounded-pill shadow-sm w-100"
        onClick={handlePayment}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        ✅ Confirm & Pay with {paymentMethod.toUpperCase()}
      </motion.button>

      {/* Back */}
      <div className="text-center mt-4">
        <Link to="/cart" className="btn btn-link text-decoration-none">
          ⬅️ Back to Cart
        </Link>
      </div>

      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #007bff, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </motion.div>
  );
};

export default Payment;
