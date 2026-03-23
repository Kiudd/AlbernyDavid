'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
      <Link href="/" className="nav-logo">
        Alberny<span>y</span>Davide
      </Link>
      <ul className="nav-links">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/presentation">Présentation</Link></li>
        <li><Link href="/produits">Produits</Link></li>
        <li><Link href="/localisation">Localisation</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <Link href="/admin" className="nav-admin">
        Espace Admin
      </Link>
    </nav>
  );
}