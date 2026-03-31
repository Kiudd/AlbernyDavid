"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.nav
      id="navbar"
      className={isScrolled ? "scrolled" : ""}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href="/" className="nav-logo" onClick={closeMobileMenu}>
          AlbernyDavid
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <ul className="nav-links desktop-nav">
        {[
          { href: "/", label: "Accueil" },
          { href: "/presentation", label: "Présentation" },
          { href: "/produits", label: "Produits" },
          { href: "/localisation", label: "Localisation" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <motion.li
            key={href}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link href={href} className={pathname === href ? "active" : ""}>
              {label}
              <motion.span
                className="nav-link-indicator"
                initial={{ width: pathname === href ? "100%" : "0%" }}
                animate={{ width: pathname === href ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Cart Button */}
      <motion.button
        className="nav-cart-btn"
        onClick={() => setIsCartOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🛒
        {totalItems > 0 && (
          <span className="cart-count">{totalItems}</span>
        )}
      </motion.button>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="nav-links mobile-nav">
              {[
                { href: "/", label: "Accueil" },
                { href: "/presentation", label: "Présentation" },
                { href: "/produits", label: "Produits" },
                { href: "/localisation", label: "Localisation" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <motion.li
                  key={href}
                  variants={linkVariants}
                  whileTap="tap"
                >
                  <Link
                    href={href}
                    className={pathname === href ? "active" : ""}
                    onClick={closeMobileMenu}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={linkVariants}
                whileTap="tap"
              >
                <button
                  className="nav-cart-btn mobile-cart-btn"
                  onClick={() => {
                    setIsCartOpen(true);
                    closeMobileMenu();
                  }}
                >
                  🛒 Panier
                  {totalItems > 0 && (
                    <span className="cart-count">{totalItems}</span>
                  )}
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="/admin" className="nav-admin">
          Espace Admin
        </Link>
      </motion.div>
    </motion.nav>
  );
}
