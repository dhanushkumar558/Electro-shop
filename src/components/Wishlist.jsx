import React, { useEffect, useState } from 'react';
import { useTheme } from '../themeContext';
import { Link } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

const Wishlist = () => {
  const { darkMode } = useTheme();
  const { addToCart, cartItems } = useCart();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(saved);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(pid => pid !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);
    if (!alreadyInCart) {
      addToCart(product);
    }
  };

  const wishlistItems = products.filter(p => wishlist.includes(p.id));

  return (
    <div className={`container py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <h2 className="fw-bold mb-4 text-gradient text-center">💖 Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-muted text-center">Your wishlist is empty.</p>
      ) : (
        <div className="row g-4">
          {wishlistItems.map((item) => {
            const alreadyInCart = cartItems.some(cartItem => cartItem.id === item.id);
            return (
              <div key={item.id} className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <div
                  className={`card h-100 border-0 shadow-lg rounded-4 ${darkMode ? 'bg-secondary text-light' : ''}`}
                  style={{ maxWidth: '250px', width: '100%' }}
                >
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.images[0]}
                      className="card-img-top rounded-top-4"
                      alt={item.name}
                      style={{ height: '180px', objectFit: 'cover' }}
                    />
                  </Link>
                  <div className="card-body text-center d-flex flex-column">
                    <Link to={`/product/${item.id}`} className="text-decoration-none">
                      <h5 className="card-title fw-semibold">{item.name}</h5>
                    </Link>
                    <p className="text-success fw-bold mb-2">{item.price}</p>

                    <div className="d-grid gap-2 mt-auto">
                      <button
                        className="btn btn-success rounded-pill"
                        onClick={() => handleAddToCart(item)}
                        disabled={alreadyInCart}
                      >
                        {alreadyInCart ? '✅ In Cart' : '🛒 Add to Cart'}
                      </button>
                      <button
                        className="btn btn-outline-danger rounded-pill"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        ❌ Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

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

export default Wishlist;
