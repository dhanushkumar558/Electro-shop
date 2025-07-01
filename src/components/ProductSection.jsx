import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useTheme } from '../themeContext';

function ProductSection({ title, products }) {
  const { darkMode } = useTheme();
  const sectionProducts = products.slice(0, 4);

  return (
    <section className={`mb-5 p-3 rounded ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-capitalize">{title}</h2>
        <Link
          to={`/view-all/${title}`}
          className="btn btn-outline-primary rounded-pill fw-semibold shadow-sm"
        >
          🔎 View All
        </Link>
      </div>

      <div className="row g-4">
        {sectionProducts.map((product) => (
          <div key={product.id} className="col-6 col-sm-6 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
