import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useTheme } from '../themeContext';
import { motion } from 'framer-motion';

function ProductSection({ title, products }) {
  const { darkMode } = useTheme();
  const sectionProducts = products.slice(0, 4);

  return (
    <motion.section
      className={`mb-5 p-3 rounded ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >

   <div className="row align-items-center mb-4">
  {/* Title column */}
  <div className="col-8 col-sm text-start text-sm-center">
    <h2 className="fw-bold text-capitalize mb-0">{title}</h2>
  </div>

  {/* Mobile: Small button, only shown below 576px */}
  <div className="col-4 col-sm-auto text-end d-sm-none">
    <Link
      to={`/view-all/${title}`}
      className="btn btn-outline-primary btn-sm rounded-pill fw-semibold shadow-sm"
    >
      🔎All
    </Link>
  </div>

  {/* Tablet/Desktop: Normal button, hidden on mobile */}
  <div className="col-sm-auto text-end d-none d-sm-block">
    <Link
      to={`/view-all/${title}`}
      className="btn btn-outline-primary rounded-pill fw-semibold shadow-sm"
    >
     🔎All
    </Link>
  </div>
</div>





      <div className="row g-4">
  {sectionProducts.map((product, index) => (
    <motion.div
      key={product.id}
      className="col-12 col-sm-6 col-lg-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
    >
      <ProductCard product={product} />
    </motion.div>
  ))}
</div>

    </motion.section>
  );
}

export default ProductSection;
