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
  } custom-sort`}
  value={sortOption}
  onChange={(e) => onSortChange(e.target.value)}
  style={{
    maxWidth: '220px',
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
       .custom-sort option {
    padding: 12px;
    font-weight: 500;
    background-color: #fff;
    color: #333;
  }

  .custom-sort option:hover,
  .custom-sort option:focus {
    background-color: #fceef5; /* Light pink for bakery charm */
    color: #d63384;
  }

  /* Dark mode adjustments */
  .bg-dark .custom-sort option {
    background-color: #212529;
    color: #f8f9fa;
  }

  .bg-dark .custom-sort option:hover {
    background-color: #2b2b2b;
    color: #ff80ab;
      `}</style>
    </motion.div>
  );
};

export default FilterSortBar;
