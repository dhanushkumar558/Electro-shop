import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useTheme } from '../themeContext';
import { motion } from 'framer-motion';

function ProductCard({ product }) {
  const { darkMode } = useTheme();

  return (
    <Link
      to={`/product/${product.id}`}
      className="text-decoration-none d-flex justify-content-center"
      aria-label={`View details of ${product.name}`}
    >
      <motion.div
        className={`card product-card shadow-sm border-0 rounded-4 ${
          darkMode ? 'bg-dark text-light' : 'bg-white text-dark'
        }`}
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <img
          src={product.images?.[0] || '/placeholder.jpg'}
          alt={product.name}
          className="card-img-top rounded-top-4"
          style={{
            height: '180px',
            objectFit: 'cover',
          }}
        />
        <div className="card-body d-flex flex-column px-3 pb-3 pt-2 text-center">
          <h5 className="card-title fw-semibold text-truncate">{product.name}</h5>
          <p className="text-muted small mb-1">Starting at</p>
          <h6 className="fw-bold text-primary mb-0">{product.price}</h6>
        </div>
      </motion.div>
    </Link>
  );
}

export default ProductCard;
