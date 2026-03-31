"use client";

import { useCart } from "../components/CartContext";
import ShoppingCart from "../components/ShoppingCart";

export default function ShoppingCartWrapper() {
  const { isCartOpen, setIsCartOpen } = useCart();

  return (
    <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
  );
}