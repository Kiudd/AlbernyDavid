"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export interface Product {
  id: number;
  name: string;
  cat: string;
  desc: string;
  color: string;
  img?: string;
  price: number;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Rose de Damas",
    cat: "fleurs",
    desc: "Une rose ancienne aux pétales veloutés, à la fragrance envoûtante et à la couleur d'un rose profond.",
    color: "#c9857a",
    img: "https://images.unsplash.com/photo-1549487860-1edc0f5754c3?auto=format&fit=crop&w=800&q=80",
    price: 25,
  },
  {
    id: 2,
    name: "Pivoine Coral",
    cat: "fleurs",
    desc: "Floraison spectaculaire aux teintes corail chaud, idéale pour les compositions estivales luxuriantes.",
    color: "#e8a090",
    img: "https://images.unsplash.com/photo-1492181475465-15cbe7aee7c6?auto=format&fit=crop&w=800&q=80",
    price: 35,
  },
  {
    id: 3,
    name: "Iris Violet",
    cat: "fleurs",
    desc: "Élégance pure avec ses pétales en velours violet profond, symbole de sagesse et d'admiration.",
    color: "#7a6090",
    img: "https://images.unsplash.com/photo-1498758801045-f58d0a45b5c6?auto=format&fit=crop&w=800&q=80",
    price: 20,
  },
  {
    id: 4,
    name: "Citron Meyer",
    cat: "fruits",
    desc: "Citronnier compact au feuillage lustré, produisant de petits fruits dorés très parfumés.",
    color: "#d4b87a",
    img: "https://images.unsplash.com/photo-1548696933-f03bcbbf49d8?auto=format&fit=crop&w=800&q=80",
    price: 45,
  },
  {
    id: 5,
    name: "Figuier Nain",
    cat: "fruits",
    desc: "Variété compacte au feuillage découpé, idéale en pot. Produit de petites figues violettes en été.",
    color: "#8a7060",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    price: 40,
  },
  {
    id: 6,
    name: "Grenade Ornementale",
    cat: "fruits",
    desc: "Fleurs écarlates suivies de fruits rouge-orangé décoratifs, une beauté méditerranéenne en miniature.",
    color: "#c05040",
    img: "https://images.unsplash.com/photo-1543919441-c2f3fff625e6?auto=format&fit=crop&w=800&q=80",
    price: 50,
  },
  {
    id: 7,
    name: "Bonsaï Érable",
    cat: "arbres",
    desc: "Érable du Japon en miniature, aux feuilles découpées qui s'embrasent en rouge à l'automne.",
    color: "#c07050",
    img: "https://images.unsplash.com/photo-1585238342028-20ca1f0c0710?auto=format&fit=crop&w=800&q=80",
    price: 120,
  },
  {
    id: 8,
    name: "Olivier Centenaire",
    cat: "arbres",
    desc: "Tronc tortueux et feuillage argenté, symbole méditerranéen de longévité et de paix.",
    color: "#a8b89a",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    price: 200,
  },
  {
    id: 9,
    name: "Lavande de Provence",
    cat: "herbes",
    desc: "Épi parfumé aux fleurs violettes, un classique intemporel qui embaume les intérieurs.",
    color: "#9a80c0",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    price: 15,
  },
  {
    id: 10,
    name: "Basilic Pourpre",
    cat: "herbes",
    desc: "Herbe aromatique aux feuilles violacées, aussi décorative que parfumée en cuisine gastronomique.",
    color: "#7a5060",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 12,
  },
  {
    id: 11,
    name: "Eucalyptus Gunni",
    cat: "arbres",
    desc: "Feuillage rond et argenté très tendance en décoration, avec son parfum frais et apaisant.",
    color: "#8aaa98",
    img: "https://images.unsplash.com/photo-1499473849072-54bd8e7e2e4c?auto=format&fit=crop&w=800&q=80",
    price: 30,
  },
  {
    id: 12,
    name: "Anémone Japonaise",
    cat: "fleurs",
    desc: "Fleurs délicates aux pétales satinés blancs ou roses, qui dansent au moindre souffle de vent.",
    color: "#e8c4d0",
    img: "https://images.unsplash.com/photo-1542957149-34f95a87f9cc?auto=format&fit=crop&w=800&q=80",
    price: 18,
  },
];

interface ProductGridProps {
  limit?: number;
  showFilters?: boolean;
}

export default function ProductGrid({
  limit,
  showFilters = false,
}: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeFilter, setActiveFilter] = useState("tous");

  useEffect(() => {
    const saved = localStorage.getItem("AlbernyDavidProducts");
    if (saved) {
      try {
        setProducts(JSON.parse(saved));
      } catch {
        setProducts(initialProducts);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("AlbernyDavidProducts", JSON.stringify(products));
  }, [products]);

  const filteredProducts =
    activeFilter === "tous"
      ? products
      : products.filter((p) => p.cat === activeFilter);

  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  useEffect(() => {
    // Intersection Observer for reveal animations
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );

    const cards = document.querySelectorAll(".product-card");
    cards.forEach((card) => io.observe(card));

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
            className={`cat-tab ${activeFilter === "tous" ? "active" : ""}`}
            onClick={() => handleFilter("tous")}
          >
            Tous
          </button>
          <button
            className={`cat-tab ${activeFilter === "fleurs" ? "active" : ""}`}
            onClick={() => handleFilter("fleurs")}
          >
            Fleurs
          </button>
          <button
            className={`cat-tab ${activeFilter === "fruits" ? "active" : ""}`}
            onClick={() => handleFilter("fruits")}
          >
            Fruits
          </button>
          <button
            className={`cat-tab ${activeFilter === "arbres" ? "active" : ""}`}
            onClick={() => handleFilter("arbres")}
          >
            Arbres
          </button>
          <button
            className={`cat-tab ${activeFilter === "herbes" ? "active" : ""}`}
            onClick={() => handleFilter("herbes")}
          >
            Herbes
          </button>
        </div>
      )}
      <div className="products-grid">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
