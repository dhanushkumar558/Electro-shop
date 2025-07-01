import React from 'react';
import { useTheme } from '../themeContext';

const FilterSortBar = ({ sortOption, onSortChange }) => {
  const { darkMode } = useTheme();

  return (
    <div className="mb-4 d-flex justify-content-center w-100">
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
    </div>
  );
};

export default FilterSortBar;
