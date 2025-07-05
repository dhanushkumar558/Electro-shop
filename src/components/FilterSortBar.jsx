import React from 'react';
import { useTheme } from '../themeContext';
import { motion } from 'framer-motion';

const FilterSortBar = ({ sortOption, onSortChange }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      className="mb-4 d-flex flex-column align-items-center w-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
     

      <select
        id="sortSelect"
        className={`form-select fw-semibold px-3 py-2 rounded-3 shadow-sm border-1 ${
          darkMode
            ? 'bg-dark text-light border-secondary'
            : 'bg-white text-dark border-secondary'
        }`}
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        style={{
          maxWidth: '280px',
          transition: 'all 0.3s ease',
        }}
      >
        <option value="">🔽 Sort By</option>
        <option value="priceLow">💰 Price: Low to High</option>
        <option value="priceHigh">💸 Price: High to Low</option>
        <option value="nameAsc">🔤 Name: A to Z</option>
        <option value="nameDesc">🔡 Name: Z to A</option>
      </select>

      <style>{`
        select.form-select:focus {
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          border-color: #0d6efd;
        }

        option {
          padding: 10px;
        }
      `}</style>
    </motion.div>
  );
};

export default FilterSortBar;
