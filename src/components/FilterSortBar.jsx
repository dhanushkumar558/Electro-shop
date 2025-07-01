import React from 'react';
import { useTheme } from '../themeContext';
import { motion } from 'framer-motion';

const FilterSortBar = ({ sortOption, onSortChange }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      className="mb-4 d-flex justify-content-center w-100"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <select
        className={`form-select shadow-sm ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        style={{ maxWidth: '250px' }}
      >
        <option value="">Sort By</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="nameAsc">Name: A to Z</option>
        <option value="nameDesc">Name: Z to A</option>
      </select>
    </motion.div>
  );
};

export default FilterSortBar;
