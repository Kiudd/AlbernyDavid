"use client";

import CustomCursor from '../../components/CustomCursor';
import Navigation from '../../components/Navigation';
import ProductGrid from '../../components/ProductGrid';
import ShoppingCart from '../../components/ShoppingCart';
import { useCart } from '../../components/CartContext';

export default function Produits() {
  const { isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      <CustomCursor />
      <Navigation />
      <section className="products-section" style={{ paddingTop: '10rem', minHeight: '100vh' }}>
        <div className="products-header">
          <div className="section-label">Catalogue</div>
          <h1 className="section-title">Notre <em>collection</em></h1>
        </div>
        <ProductGrid showFilters={true} />
      </section>
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}