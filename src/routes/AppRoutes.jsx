import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function AppRoutes({ onOpenQuoteModal }) {
  return (
    <>
      <ScrollToTopOnRoute />
      <Routes>
        <Route path="/" element={<Home onOpenQuoteModal={onOpenQuoteModal} />} />
        <Route path="/about" element={<About onOpenQuoteModal={onOpenQuoteModal} />} />
        <Route path="/products" element={<Products onOpenQuoteModal={onOpenQuoteModal} />} />
        <Route path="/products/:productId" element={<ProductDetail onOpenQuoteModal={onOpenQuoteModal} />} />
        <Route path="/portfolio" element={<Portfolio onOpenQuoteModal={onOpenQuoteModal} />} />
        <Route path="/contact" element={<Contact onOpenQuoteModal={onOpenQuoteModal} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
