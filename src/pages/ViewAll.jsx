import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import { useSearch } from '../context/SearchContext';
import SearchBar from '../components/SearchBar';
import FilterSortBar from '../components/FilterSortBar';

const ViewAll = () => {
  const { category } = useParams();
  const { searchTerm, setSearchTerm, sortOption, setSortOption } = useSearch();

  const filtered = products
    .filter(
      (p) =>
        p.category.toLowerCase() === category.toLowerCase() &&
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

  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6 text-capitalize">
          ⚡ All Products in {category}
        </h2>
        <p className="text-muted fs-5">
          Browse our collection of high-quality {category.toLowerCase()}
        </p>
      </div>

      {/* 🔍 Search and Sort UI (reusing global context) */}
      <div className="mb-4">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <FilterSortBar sortOption={sortOption} onSortChange={setSortOption} />
      </div>

      <div className="row g-4">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div key={product.id} className="col-6 col-sm-6 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-muted">
            <p>No products found for this category.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ViewAll;
