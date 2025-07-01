import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import SuggestedProducts from '../components/SuggestedProducts';
import { useCart } from '../context/CartContext';
import { useTheme } from '../themeContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { darkMode } = useTheme();
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container py-5">
        <h2 className="text-danger">Product Not Found</h2>
      </div>
    );
  }

  const suggested = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const displayedReviews = showAllReviews ? product.reviews : product.reviews.slice(0, 3);

  return (
    <div className={`container py-5 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
      <div className="row align-items-center mb-5">
        {/* Images Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="img-fluid rounded-4 shadow-sm mb-3"
            style={{ maxHeight: '450px', objectFit: 'cover', width: '100%' }}
          />
          <div className="d-flex gap-3">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Preview ${idx + 1}`}
                className={`img-thumbnail ${selectedImage === idx ? 'border-primary' : ''}`}
                style={{ width: '80px', cursor: 'pointer' }}
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{product.name}</h2>
          <p className={`fs-5 ${darkMode ? 'text-light' : 'text-muted'}`}>{product.description}</p>
          <p className="h4 fw-bold text-success mt-4">{product.price}</p>
          <div className="mb-4">
            <span className="fw-semibold text-warning">Rating:</span>{' '}
            {'⭐'.repeat(Math.floor(product.rating))}{product.rating % 1 ? '½' : ''}
          </div>
          <button
            className="btn btn-lg btn-success rounded-pill shadow-sm"
            onClick={() => addToCart(product)}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mb-5">
        <h4 className="mb-3">📝 Customer Reviews</h4>
        <ul className="list-group mb-3">
          {displayedReviews.map((review, idx) => (
            <li
              key={idx}
              className={`list-group-item ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
            >
              <div className="fw-semibold">{review.name}</div>
              <div className="text-muted small">{review.time}</div>
              <p className="mb-1">{review.comment}</p>
            </li>
          ))}
        </ul>
        {product.reviews.length > 3 && (
          <button
            className="btn btn-outline-secondary rounded-pill"
            onClick={() => setShowAllReviews(prev => !prev)}
          >
            {showAllReviews ? 'Show Less' : 'Show All Reviews'}
          </button>
        )}
      </div>

      {/* Suggested Products */}
      <SuggestedProducts products={suggested} />
    </div>
  );
};

export default ProductDetail;
