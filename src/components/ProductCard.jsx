import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useTheme } from '../themeContext';
import { motion } from 'framer-motion';

function ProductCard({ product }) {
  const { darkMode } = useTheme();

  return (
    <Link to={`/product/${product.id}`} className="text-decoration-none">
      <motion.div
        className={`card h-100 border-0 shadow-lg rounded-4 product-card transition-fast ${
          darkMode ? 'bg-dark text-light' : 'bg-white text-dark'
        }`}
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <img
          src={product.images[0]}
          className="card-img-top rounded-top-4 text-center"
          alt={product.name}
          style={{ objectFit: 'cover', height: '130px' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-truncate text-center">{product.name}</h5>
          <p className="text-muted small text-center">Starting at</p>
          <h6 className="fw-bold text-primary mb-3 text-center">{product.price}</h6>
        </div>
      </motion.div>
    </Link>
  );
}

export default ProductCard;
