"use client";

import { useState } from "react";
import CustomCursor from '../../components/CustomCursor';
import Navigation from '../../components/Navigation';
import ProductGrid from '../../components/ProductGrid';
import ShoppingCart from '../../components/ShoppingCart';

export default function Produits() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      <Navigation />
      <section className="products-section" style={{ paddingTop: '10rem', minHeight: '100vh' }}>
        <div className="products-header">
          <div className="section-label">Catalogue</div>
          <h1 className="section-title">Notre <em>collection</em></h1>
        </div>
        <div className="products-controls">
          <button
            className="cart-toggle-btn"
            onClick={() => setCartOpen(true)}
          >
            🛒 Panier
          </button>
        </div>
        <ProductGrid showFilters={true} />
      </section>
      <ShoppingCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}