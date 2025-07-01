import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import ViewAll from './pages/ViewAll';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Settings from './pages/Settings';
import ScrollToTop from './components/ScrollToTop';

import { SearchProvider } from './context/SearchContext';
import { ThemeProvider, useTheme } from './themeContext';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';

function ThemedApp() {
  const { darkMode } = useTheme();

  // Apply class to <body> on theme change
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/view-all/:category" element={<ViewAll />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
        <Footer />  
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <SearchProvider>
          <ThemedApp />
        </SearchProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
