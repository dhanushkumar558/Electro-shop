import React from 'react';
import ProductCard from './ProductCard';
import { useTheme } from '../themeContext';

const SuggestedProducts = ({ products }) => {
  const { darkMode } = useTheme();

  if (!products || products.length === 0) return null;

  return (
    <section
      className={`mt-5 pt-4 border-top ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}
    >
      <h3 className="fw-bold mb-4 text-gradient text-center">🎯 You Might Also Like</h3>

      <div className="row g-4">
        {products.map((product, index) => (
          <div className="col-6 col-sm-6 col-lg-3" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #007bff, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default SuggestedProducts;
