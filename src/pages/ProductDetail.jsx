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
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', comment: '' });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const product = products.find((p) => p.id === id);
  const alreadyInCart = cartItems.some((item) => item.id === id);
  const inWishlist = wishlist.includes(id);

  const [allReviews, setAllReviews] = useState(() => {
    const saved = localStorage.getItem(`reviews_${id}`);
    return saved ? JSON.parse(saved) : product?.reviews || [];
  });

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 2500);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddToCart = () => {
    if (alreadyInCart) {
      setSuccessMessage('❗ Already in Cart!');
    } else {
      addToCart({ ...product });
      setSuccessMessage('✅ Added to Cart!');
    }
  };

  const toggleWishlist = () => {
    setWishlist((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((pid) => pid !== id)
        : [...prev, id];

      setSuccessMessage(
        prev.includes(id)
          ? '❌ Removed from Wishlist'
          : '❤️ Added to Wishlist'
      );

      return updated;
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;

    const formattedDate = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const newEntry = {
      name: newReview.name,
      comment: newReview.comment,
      time: formattedDate,
    };

    const updatedReviews = [newEntry, ...allReviews];
    setAllReviews(updatedReviews);
    localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));

    setNewReview({ name: '', comment: '' });
    setSuccessMessage('✅ Review submitted!');
    setShowReviewForm(false);
  };

  const displayedReviews = showAllReviews
    ? allReviews
    : allReviews.slice(0, 3);

  const suggested = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Product Not Found</h2>
      </div>
    );
  }

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

      {/* 🖼️ Image + Info */}
      <div className="row align-items-center mb-5">
        <motion.div
          className="col-md-6 mb-4 mb-md-0 position-relative"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={toggleWishlist}
            className="wishlist-btn position-absolute top-0 end-0 m-3 z-3"
            title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            {inWishlist ? '❤️' : '🤍'}
          </button>

          <style>{`
            .wishlist-btn {
              background: transparent;
              border: none;
              font-size: 1.6rem;
              cursor: pointer;
              line-height: 1;
            }
            .wishlist-btn:focus {
              outline: none;
              box-shadow: none;
            }
            .wishlist-btn:hover {
              transform: scale(1.1);
              transition: transform 0.2s ease-in-out;
            }
          `}</style>

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
                className={`img-thumbnail ${selectedImage === idx ? 'border-primary border-2' : ''}`}
                style={{ width: '70px', height: '70px', objectFit: 'cover', cursor: 'pointer' }}
              />
            ))}
          </div>
        </motion.div>

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
            ⚡ Add to Cart
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
              className={`list-group-item ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
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

        {allReviews.length > 3 && (
          <motion.button
            className="btn btn-outline-secondary rounded-pill mb-3"
            onClick={() => setShowAllReviews((prev) => !prev)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllReviews ? 'Show Less' : 'Show All Reviews'}
          </motion.button>
        )}

        {/* ➕ Add Review Toggle & Form */}
        <div className="mb-4">
          <motion.button
            className="btn btn-outline-primary rounded-pill mb-3"
            onClick={() => setShowReviewForm((prev) => !prev)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showReviewForm ? '➖ Cancel Review' : '➕ Add Review'}
          </motion.button>

          <AnimatePresence>
            {showReviewForm && (
              <motion.div
                key="review-form"
                className={`p-4 rounded shadow-sm ${darkMode ? 'bg-secondary text-light' : 'bg-light'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h5 className="mb-3">📝 Write Your Review</h5>
                <form onSubmit={handleReviewSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Write your review..."
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary rounded-pill px-4">
                    ✅ Submit Review
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* 🔁 Suggested Products */}
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
