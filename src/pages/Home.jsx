import React from 'react';
import { motion } from 'framer-motion';
import ProductSection from '../components/ProductSection';
import SearchBar from '../components/SearchBar';
import FilterSortBar from '../components/FilterSortBar';
import products from '../data/products';
import { useSearch } from '../context/SearchContext';
import { useTheme } from '../themeContext';

const categories = [
  'Home Electronics',
  'Kitchen Electronics',
  'Gardening',
  'Personal Care',
  'Automobiles',
];

function Home() {
  const { searchTerm, setSearchTerm, sortOption, setSortOption } = useSearch();
  const { darkMode } = useTheme();

  const filterAndSort = (category) => {
    return products
      .filter(
        (p) =>
          p.category === category &&
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        if (sortOption === 'priceLow') return priceA - priceB;
        if (sortOption === 'priceHigh') return priceB - priceA;
        if (sortOption === 'nameAsc') return a.name.localeCompare(b.name);
        if (sortOption === 'nameDesc') return b.name.localeCompare(a.name);
        return 0;
      });
  };

  return (
    <main
      className={`container-fluid px-5 py-5 rounded shadow-sm ${
        darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
      }`}
    >
      {/* ✨ Welcome Header */}
      <motion.header
        className="text-center mb-5"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
    <h1 className="fw-bold display-4 text-gradient ambient-glow">
  ⚡ Welcome to ElectroShop
</h1>

<style>{`
  .text-gradient {
    background: linear-gradient(90deg, #0d6efd, #00c6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ambient-glow {
    text-shadow:
      0px 3px 5px rgba(0, 198, 255, 0.2),
      0px 1px 1px rgba(255, 255, 255, 0.1);
  }
`}</style>




        <p className="fs-5 fw-semibold">
          Discover the latest gadgets and appliances curated just for you
        </p>
      </motion.header>

      {/* 🔍 Search & Sort */}
      <div className="mb-4">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <FilterSortBar sortOption={sortOption} onSortChange={setSortOption} />
      </div>

      {/* 🛍️ Product Sections */}
      {categories.map((category, index) => {
        const filtered = filterAndSort(category);
        return filtered.length > 0 ? (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="mb-5"
          >
            {/* Only render the ProductSection — it already includes the title */}
            <ProductSection title={category} products={filtered} />
          </motion.div>
        ) : null;
      })}

      <style>{`
        .text-gradient {
          background: linear-gradient(90deg, #0d6efd, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </main>
  );
}

export default Home;
