import React, { useEffect, useState } from 'react';
import { useTheme } from '../themeContext';
import { Link } from 'react-router-dom';

const Orders = () => {
  const { darkMode } = useTheme();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  const removeOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <>
    <br />
    
    <div className={`container py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}> 
      <h2 className="fw-bold mb-4 text-gradient">📦 Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-muted">No orders placed yet.</p>
      ) : (
        orders.map((order, idx) => (
          <div
            key={idx}
            className={`card mb-4 shadow-sm rounded-4 ${
              darkMode ? 'bg-secondary text-light' : 'bg-white text-dark'
            }`}
          >
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Order #{idx + 1}</h5>
                <button
                  className="btn btn-sm btn-outline-danger rounded-pill"
                  onClick={() => removeOrder(idx)}
                >
                  ❌ Remove
                </button>
              </div>

              <ul className="list-group list-group-flush">
                {order.items.map((item, i) => (
                  <li
                    key={i}
                    className={`list-group-item d-flex justify-content-between align-items-center ${
                      darkMode ? 'bg-dark text-light border-secondary' : ''
                    }`}
                  >
                    <Link
                      to={`/product/${item.id}`}
                      className={`text-decoration-none fw-semibold ${
                        darkMode ? 'text-light' : 'text-dark'
                      }`}
                    >
                      🔎 {item.name} <span className="text-muted small">x{item.quantity}</span>
                    </Link>
                    <span className="text-success fw-semibold">
                      ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-muted small">
                🕒 Ordered at: {order.time}
              </p>
            </div>
          </div>
        ))
      )}

      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #007bff, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
    </>
  );
};

export default Orders;
