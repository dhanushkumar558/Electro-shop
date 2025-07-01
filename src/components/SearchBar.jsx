import React from 'react';
import { useTheme } from '../themeContext';

const SearchBar = ({ searchTerm, onSearch }) => {
  const { darkMode } = useTheme();

  return (
    <div className="mb-3">
      <input
        type="text"
        className={`form-control form-control-lg ${
          darkMode ? 'bg-dark text-light border-secondary' : ''
        }`}
        placeholder="🔍 Search products by name..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
