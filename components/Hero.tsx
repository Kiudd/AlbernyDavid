'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Délai minimal pour éviter les flashs
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <section className="hero hero-loading">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-tag">Art Botanique & Décoration</div>
          <h1 className="hero-title">
            La nature<br/><em>réinventée</em><br/>en <span className="gold">art</span>
          </h1>
          <p className="hero-subtitle">
            Des créations végétales d'exception,<br/>sculptées avec passion et délicatesse.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <div className="hero-bg"></div>

      {/* Version simplifiée des pétales - moins d'animations */}
      <div className="hero-flora">
        <motion.div
          className="petal"
          animate={{
            y: [0, -20, 10, 0],
            rotate: [0, 5, -3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="petal"
          animate={{
            y: [0, -20, 10, 0],
            rotate: [0, 5, -3, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -3,
          }}
        ></motion.div>
        <motion.div
          className="petal"
          animate={{
            y: [0, -20, 10, 0],
            rotate: [0, 5, -3, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -6,
          }}
        ></motion.div>
      </div>

      {/* Anneau 3D simplifié */}
      <div className="hero-3d-ring">
        <motion.div
          className="ring-3d"
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="ring-layer"></div>
          <div className="ring-layer"></div>
          <div className="ring-layer"></div>
          <div className="ring-layer"></div>
          <div className="orbit-dot"></div>
          <div className="orbit-dot"></div>
          <div className="orbit-dot"></div>
          <div className="ring-center">AD</div>
        </motion.div>
      </div>

      <svg className="hero-leaves deco-branch" width="300" height="400" viewBox="0 0 300 400" fill="none">
        <path d="M150 380 Q120 300 80 250 Q40 200 60 150 Q80 100 130 80" stroke="#7a8c6e" strokeWidth="2" fill="none"/>
        <ellipse cx="80" cy="200" rx="50" ry="25" fill="#7a8c6e" transform="rotate(-30 80 200)" opacity="0.8"/>
        <ellipse cx="100" cy="150" rx="45" ry="22" fill="#a8b89a" transform="rotate(-50 100 150)" opacity="0.7"/>
        <ellipse cx="130" cy="110" rx="40" ry="20" fill="#7a8c6e" transform="rotate(-60 130 110)" opacity="0.9"/>
        <ellipse cx="60" cy="250" rx="55" ry="28" fill="#a8b89a" transform="rotate(-15 60 250)" opacity="0.6"/>
      </svg>

      <div className="hero-content">
        <motion.div
          className="hero-tag"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Art Botanique & Décoration
        </motion.div>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          La nature<br/><em>réinventée</em><br/>en <span className="gold">art</span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Des créations végétales d'exception,<br/>sculptées avec passion et délicatesse.
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/produits" className="btn-primary">
            <span>Découvrir la collection</span>
          </Link>
          <Link href="/presentation" className="btn-ghost">
            Notre histoire
          </Link>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>Défiler</span>
      </div>
    </section>
  );
}