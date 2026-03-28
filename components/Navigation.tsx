'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.nav
      id="navbar"
      className={isScrolled ? 'scrolled' : ''}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href="/" className="nav-logo">
          AlbernyDavid
        </Link>
      </motion.div>

      <ul className="nav-links">
        {[
          { href: '/', label: 'Accueil' },
          { href: '/presentation', label: 'Présentation' },
          { href: '/produits', label: 'Produits' },
          { href: '/localisation', label: 'Localisation' },
          { href: '/contact', label: 'Contact' }
        ].map(({ href, label }) => (
          <motion.li
            key={href}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href={href}
              className={pathname === href ? 'active' : ''}
            >
              {label}
              <motion.span
                className="nav-link-indicator"
                initial={{ width: pathname === href ? '100%' : '0%' }}
                animate={{ width: pathname === href ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.li>
        ))}
      </ul>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/admin" className="nav-admin">
          Espace Admin
        </Link>
      </motion.div>
    </motion.nav>
  );
}