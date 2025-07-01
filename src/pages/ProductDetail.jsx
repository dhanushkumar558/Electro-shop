import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import SuggestedProducts from '../components/SuggestedProducts';
import { useCart } from '../context/CartContext';
import { useTheme } from '../themeContext';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const { darkMode } = useTheme();

  const [selectedImage, setSelectedImage] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [showAllReviews, setShowAllReviews] = useState(false);

  const product = products.find((p) => p.id === id);
  const alreadyInCart = cartItems.some((item) => item.id === id);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 2500);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Product Not Found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (alreadyInCart) {
      setSuccessMessage('❗ Already in Cart!');
    } else {
      addToCart({ ...product });
      setSuccessMessage('✅ Added to Cart!');
    }
  };

  const displayedReviews = showAllReviews
    ? product.reviews
    : product.reviews.slice(0, 3);

  const suggested = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <motion.div
      className={`container py-5 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* ✅ Toast */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            className="position-fixed top-0 start-50 translate-middle-x mt-3 px-4 py-2 fw-semibold rounded-pill shadow"
            style={{
              backgroundColor: darkMode ? '#222' : '#fff',
              color: darkMode ? '#fff' : '#000',
              zIndex: 1055,
              border: '1px solid #ccc',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="row align-items-center mb-5">
        {/* 🖼️ Image Preview */}
        <motion.div
          className="col-md-6 mb-4 mb-md-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedImage}
              src={product.images[selectedImage]}
              alt={product.name}
              className="img-fluid rounded-4 shadow-sm mb-3"
              style={{ maxHeight: '450px', objectFit: 'cover', width: '100%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          <div className="d-flex flex-wrap gap-2 justify-content-start">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setSelectedImage(idx)}
                className={`img-thumbnail ${
                  selectedImage === idx ? 'border-primary border-2' : ''
                }`}
                style={{ width: '70px', height: '70px', objectFit: 'cover', cursor: 'pointer' }}
              />
            ))}
          </div>
        </motion.div>

        {/* 📄 Product Info */}
        <motion.div
          className="col-md-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="fw-bold mb-3">{product.name}</h2>
          <p className={`fs-5 ${darkMode ? 'text-light' : 'text-muted'}`}>{product.description}</p>
          <p className="h4 fw-bold text-success mt-4">{product.price}</p>

          <div className="mb-4">
            <span className="fw-semibold text-warning">Rating:</span>{' '}
            {'⭐'.repeat(Math.floor(product.rating))}
            {product.rating % 1 !== 0 ? '½' : ''}
          </div>

          <motion.button
            className="btn btn-lg btn-success rounded-pill shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
          >
            🛒 Add to Cart
          </motion.button>
        </motion.div>
      </div>

      {/* 📝 Reviews */}
      <motion.div
        className="mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h4 className="mb-3">📝 Customer Reviews</h4>
        <ul className="list-group mb-3">
          {displayedReviews.map((review, idx) => (
            <motion.li
              key={idx}
              className={`list-group-item ${
                darkMode ? 'bg-dark text-light border-secondary' : ''
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="fw-semibold">{review.name}</div>
              <div className="text-muted small">{review.time}</div>
              <p className="mb-1">{review.comment}</p>
            </motion.li>
          ))}
        </ul>

        {product.reviews.length > 3 && (
          <motion.button
            className="btn btn-outline-secondary rounded-pill"
            onClick={() => setShowAllReviews((prev) => !prev)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllReviews ? 'Show Less' : 'Show All Reviews'}
          </motion.button>
        )}
      </motion.div>

      {/* 🛍️ Suggested Products */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <SuggestedProducts products={suggested} />
      </motion.div>
    </motion.div>
  );
};

export default ProductDetail;
