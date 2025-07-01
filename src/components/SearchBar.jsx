import React from 'react';
import { useTheme } from '../themeContext';
import { motion } from 'framer-motion';

const SearchBar = ({ searchTerm, onSearch }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      className="mb-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <input
        type="text"
        className={`form-control form-control-lg ${
          darkMode ? 'bg-dark text-light border-secondary' : ''
        }`}
        placeholder="🔍 Search products by name..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </motion.div>
  );
};

export default SearchBar;
