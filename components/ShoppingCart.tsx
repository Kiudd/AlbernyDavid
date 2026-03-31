"use client";

import { useEffect } from "react";
import { useCart } from "./CartContext";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalPrice,
    addToCart,
  } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Expose addToCart function globally for ProductCard to use
  useEffect(() => {
    (window as any).addToCart = addToCart;
  }, [addToCart]);

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Panier ({totalItems})</h3>
          <button className="cart-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <p className="cart-empty">Votre panier est vide</p>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <div className="cart-item-name">{item.name}</div>
                      <div className="cart-item-price">{item.price}€</div>
                    </div>
                    <div className="cart-item-controls">
                      <button
                        className="cart-quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="cart-quantity">{item.quantity}</span>
                      <button
                        className="cart-quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        className="cart-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <div className="cart-total-label">Total:</div>
                <div className="cart-total-price">{totalPrice.toFixed(2)}€</div>
              </div>
              <button className="cart-checkout-btn">Commander</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}