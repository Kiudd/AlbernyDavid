'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export interface Product {
  id: number;
  name: string;
  cat: string;
  desc: string;
  color: string;
  img?: string;
}

const initialProducts: Product[] = [
  { id:1, name:'Rose de Damas', cat:'fleurs', desc:'Une rose ancienne aux pétales veloutés, à la fragrance envoûtante et à la couleur d\'un rose profond.', color:'#c9857a', img:'' },
  { id:2, name:'Pivoine Coral', cat:'fleurs', desc:'Floraison spectaculaire aux teintes corail chaud, idéale pour les compositions estivales luxuriantes.', color:'#e8a090', img:'' },
  { id:3, name:'Iris Violet', cat:'fleurs', desc:'Élégance pure avec ses pétales en velours violet profond, symbole de sagesse et d\'admiration.', color:'#7a6090', img:'' },
  { id:4, name:'Citron Meyer', cat:'fruits', desc:'Citronnier compact au feuillage lustré, produisant de petits fruits dorés très parfumés.', color:'#d4b87a', img:'' },
  { id:5, name:'Figuier Nain', cat:'fruits', desc:'Variété compacte au feuillage découpé, idéale en pot. Produit de petites figues violettes en été.', color:'#8a7060', img:'' },
  { id:6, name:'Grenade Ornementale', cat:'fruits', desc:'Fleurs écarlates suivies de fruits rouge-orangé décoratifs, une beauté méditerranéenne en miniature.', color:'#c05040', img:'' },
  { id:7, name:'Bonsaï Érable', cat:'arbres', desc:'Érable du Japon en miniature, aux feuilles découpées qui s\'embrasent en rouge à l\'automne.', color:'#c07050', img:'' },
  { id:8, name:'Olivier Centenaire', cat:'arbres', desc:'Tronc tortueux et feuillage argenté, symbole méditerranéen de longévité et de paix.', color:'#a8b89a', img:'' },
  { id:9, name:'Lavande de Provence', cat:'herbes', desc:'Épi parfumé aux fleurs violettes, un classique intemporel qui embaume les intérieurs.', color:'#9a80c0', img:'' },
  { id:10, name:'Basilic Pourpre', cat:'herbes', desc:'Herbe aromatique aux feuilles violacées, aussi décorative que parfumée en cuisine gastronomique.', color:'#7a5060', img:'' },
  { id:11, name:'Eucalyptus Gunni', cat:'arbres', desc:'Feuillage rond et argenté très tendance en décoration, avec son parfum frais et apaisant.', color:'#8aaa98', img:'' },
  { id:12, name:'Anémone Japonaise', cat:'fleurs', desc:'Fleurs délicates aux pétales satinés blancs ou roses, qui dansent au moindre souffle de vent.', color:'#e8c4d0', img:'' },
];

interface ProductGridProps {
  limit?: number;
  showFilters?: boolean;
}

export default function ProductGrid({ limit, showFilters = false }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeFilter, setActiveFilter] = useState('tous');

  const filteredProducts = activeFilter === 'tous'
    ? products
    : products.filter(p => p.cat === activeFilter);

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  useEffect(() => {
    // Intersection Observer for reveal animations
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => io.observe(card));

    return () => io.disconnect();
  }, [displayedProducts]);

  const handleFilter = (cat: string) => {
    setActiveFilter(cat);
  };

  return (
    <>
      {showFilters && (
        <div className="category-tabs">
          <button
            className={`cat-tab ${activeFilter === 'tous' ? 'active' : ''}`}
            onClick={() => handleFilter('tous')}
          >
            Tous
          </button>
          <button
            className={`cat-tab ${activeFilter === 'fleurs' ? 'active' : ''}`}
            onClick={() => handleFilter('fleurs')}
          >
            Fleurs
          </button>
          <button
            className={`cat-tab ${activeFilter === 'fruits' ? 'active' : ''}`}
            onClick={() => handleFilter('fruits')}
          >
            Fruits
          </button>
          <button
            className={`cat-tab ${activeFilter === 'arbres' ? 'active' : ''}`}
            onClick={() => handleFilter('arbres')}
          >
            Arbres
          </button>
          <button
            className={`cat-tab ${activeFilter === 'herbes' ? 'active' : ''}`}
            onClick={() => handleFilter('herbes')}
          >
            Herbes
          </button>
        </div>
      )}
      <div className="products-grid">
        {displayedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}