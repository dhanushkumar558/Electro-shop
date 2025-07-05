import React from 'react';
import { useTheme } from '../themeContext';
import { motion } from 'framer-motion';

const SearchBar = ({ searchTerm, onSearch }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <input
        type="text"
        className={`form-control form-control-lg rounded-4 shadow-sm ${
          darkMode
            ? 'bg-dark text-light border-secondary'
            : 'bg-white text-dark border-light'
        }`}
        placeholder="🔍 Search products by name..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        style={{
          paddingLeft: '1.5rem',
          fontWeight: 500,
          boxShadow: darkMode
            ? '0 2px 10px rgba(0,0,0,0.3)'
            : '0 2px 12px rgba(0,0,0,0.1)',
          transition: 'box-shadow 0.3s ease',
        }}
      />
    </motion.div>
  );
};

export default SearchBar;
