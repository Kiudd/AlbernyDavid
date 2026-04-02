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

export interface Category {
  id: string;
  name: string;
  displayName: string;
  emoji: string;
  background: string;
  image?: string;
  subcategories?: Category[];
}

const initialProducts: Product[] = [
  // PLANTS GREFFES
  {
    id: 1,
    name: "Tomate cobra",
    cat: "plants-greffes",
    desc: "Variété de tomate greffée résistante aux maladies.",
    color: "#131311",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 2,
    name: "Tomate buffalo",
    cat: "plants-greffes",
    desc: "Tomate greffée au goût sucré et à la chair ferme.",
    color: "#ffeb53",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 3,
    name: "Tomate corrazon",
    cat: "plants-greffes",
    desc: "Tomate greffée en forme de cœur, douce et savoureuse.",
    color: "#e26f80",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 4,
    name: "Tomate cornabelle",
    cat: "plants-greffes",
    desc: "Variété greffée de tomate cerise sucrée.",
    color: "#d98b6d",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 5,
    name: "Aubergine",
    cat: "plants-greffes",
    desc: "Aubergine greffée pour une meilleure productivité.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 6,
    name: "Poivron",
    cat: "plants-greffes",
    desc: "Poivron greffé résistant aux maladies du sol.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  // PLANTS TRADITIONNELS
  {
    id: 7,
    name: "Tomate st pierre",
    cat: "plants-traditionnels",
    desc: "Variété traditionnelle de tomate ancienne.",
    color: "#1a1a1a",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 8,
    name: "Tomate marmande",
    cat: "plants-traditionnels",
    desc: "Tomate traditionnelle charnue et savoureuse.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 9,
    name: "Tomate coeur de bœuf",
    cat: "plants-traditionnels",
    desc: "Tomate en forme de cœur, charnue et juteuse.",
    color: "#e77284",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 10,
    name: "Tomate superskeatck F1",
    cat: "plants-traditionnels",
    desc: "Hybride F1 productive et résistante.",
    color: "#fde959",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 6,
  },
  {
    id: 11,
    name: "Tomate carmello F1",
    cat: "plants-traditionnels",
    desc: "Variété F1 aux fruits allongés et sucrés.",
    color: "#508a6a",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 6,
  },
  {
    id: 12,
    name: "Tomate montfavet F1",
    cat: "plants-traditionnels",
    desc: "Hybride F1 traditionnelle provençale.",
    color: "#7b567a",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 6,
  },
  {
    id: 13,
    name: "Tomate roma",
    cat: "plants-traditionnels",
    desc: "Tomate allongée idéale pour les sauces.",
    color: "#5286b5",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 14,
    name: "Tomate grappe",
    cat: "plants-traditionnels",
    desc: "Tomates en grappes faciles à cueillir.",
    color: "#0c96cd",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 15,
    name: "Tomate cerise",
    cat: "plants-traditionnels",
    desc: "Petites tomates sucrées parfaites en salade.",
    color: "#d9906e",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 16,
    name: "Tomate supersweet 100",
    cat: "plants-traditionnels",
    desc: "Variété très sucrée aux petits fruits.",
    color: "#6e99ab",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 17,
    name: "Tomate bonbon crovarese",
    cat: "plants-traditionnels",
    desc: "Tomates cerises allongées et sucrées.",
    color: "#7289c7",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 18,
    name: "Tomate poire jaune",
    cat: "plants-traditionnels",
    desc: "Tomates en forme de poire de couleur jaune.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 19,
    name: "Tomate cerise blackcherry",
    cat: "plants-traditionnels",
    desc: "Tomates cerises noires très sucrées.",
    color: "#b27276",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 20,
    name: "Tomate gardener delight",
    cat: "plants-traditionnels",
    desc: "Variété ancienne très savoureuse.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 21,
    name: "Tomate or gran borghese",
    cat: "plants-traditionnels",
    desc: "Tomate ancienne italienne.",
    color: "#ffe552",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 22,
    name: "Tomate noire de crimée",
    cat: "plants-traditionnels",
    desc: "Tomate noire ancienne très goûteuse.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 23,
    name: "Tomate cornue des andes",
    cat: "plants-traditionnels",
    desc: "Tomate cornue originaire des Andes.",
    color: "#b4618d",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 24,
    name: "Tomates green zebra",
    cat: "plants-traditionnels",
    desc: "Tomates vertes striées de jaune.",
    color: "#6abe6b",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 25,
    name: "Tomate ananas",
    cat: "plants-traditionnels",
    desc: "Tomate douce au goût d'ananas.",
    color: "#fcbc62",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 26,
    name: "Tomate rose de berne",
    cat: "plants-traditionnels",
    desc: "Tomate rose ancienne suisse.",
    color: "#fcc8cf",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 27,
    name: "Aubergine barbentane",
    cat: "plants-traditionnels",
    desc: "Aubergine traditionnelle provençale.",
    color: "#2c2e2b",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 28,
    name: "Aubergine blanche zébré violet",
    cat: "plants-traditionnels",
    desc: "Aubergine blanche avec zébrures violettes.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 29,
    name: "Poivron doux d'Espagne",
    cat: "plants-traditionnels",
    desc: "Poivron doux traditionnel espagnol.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 30,
    name: "Poivron lamuyo F1",
    cat: "plants-traditionnels",
    desc: "Hybride F1 de poivron doux.",
    color: "#1c1b1c",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 31,
    name: "Poivron jaune carré d'asti",
    cat: "plants-traditionnels",
    desc: "Poivron jaune carré italien.",
    color: "#fcef4b",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 32,
    name: "Piment de padron",
    cat: "plants-traditionnels",
    desc: "Petits piments espagnols doux.",
    color: "#febf66",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 33,
    name: "Piment doux des landes",
    cat: "plants-traditionnels",
    desc: "Piment doux traditionnel des Landes.",
    color: "#2d6896",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 34,
    name: "Piment type espelette Gorria",
    cat: "plants-traditionnels",
    desc: "Piment d'Espelette traditionnel.",
    color: "#53a35d",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 35,
    name: "Piment de cayenne",
    cat: "plants-traditionnels",
    desc: "Piment fort de Cayenne.",
    color: "#d76f7d",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 36,
    name: "Piment oiseau",
    cat: "plants-traditionnels",
    desc: "Petit piment très fort.",
    color: "#f19dba",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 37,
    name: "Piment arc en ciel",
    cat: "plants-traditionnels",
    desc: "Piment aux couleurs variées.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 38,
    name: "Courgette verte maraîchère",
    cat: "plants-traditionnels",
    desc: "Courgette verte traditionnelle.",
    color: "#1f1f1f",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  {
    id: 39,
    name: "Courgette Lungo Bianco",
    cat: "plants-traditionnels",
    desc: "Courgette blanche italienne.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  {
    id: 40,
    name: "Courgette bianca di Trieste",
    cat: "plants-traditionnels",
    desc: "Courgette blanche de Trieste.",
    color: "#6ab75e",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  {
    id: 41,
    name: "Courgette Goldena",
    cat: "plants-traditionnels",
    desc: "Courgette dorée.",
    color: "#cbd8e2",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  {
    id: 42,
    name: "Courgette ronde de nice",
    cat: "plants-traditionnels",
    desc: "Courgette ronde niçoise.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  {
    id: 43,
    name: "Concombre vert long",
    cat: "plants-traditionnels",
    desc: "Concombre vert traditionnel.",
    color: "#1f7cbd",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  {
    id: 44,
    name: "Concombre Arménien Serpent chiaro",
    cat: "plants-traditionnels",
    desc: "Concombre arménien serpentin.",
    color: "#58adde",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  {
    id: 45,
    name: "Cornichon",
    cat: "plants-traditionnels",
    desc: "Petits cornichons pour la conservation.",
    color: "#fafbd4",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  {
    id: 46,
    name: "Melon charentais lisse",
    cat: "plants-traditionnels",
    desc: "Melon charentais à peau lisse.",
    color: "#cf9dd6",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 47,
    name: "Melon Zuccherino d'Ingenioli",
    cat: "plants-traditionnels",
    desc: "Melon italien sucré.",
    color: "#ceced2",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 48,
    name: "Melon brodé",
    cat: "plants-traditionnels",
    desc: "Melon brodé traditionnel.",
    color: "#c9ceca",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  // SUITE
  {
    id: 49,
    name: "Melon jaune",
    cat: "suite",
    desc: "Melon jaune sucré.",
    color: "#feea4e",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 50,
    name: "Melon vert",
    cat: "suite",
    desc: "Melon vert rafraîchissant.",
    color: "#578a5c",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 51,
    name: "Pastèque sugar baby",
    cat: "suite",
    desc: "Pastèque sucrée de petite taille.",
    color: "#eb7484",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 6,
  },
  {
    id: 52,
    name: "Pastèque Charleston Grey",
    cat: "suite",
    desc: "Pastèque Charleston Grey.",
    color: "#e5639d",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 6,
  },
  {
    id: 53,
    name: "Pastèque à confire",
    cat: "suite",
    desc: "Pastèque spéciale pour la confiture.",
    color: "#f277ae",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 6,
  },
  {
    id: 54,
    name: "Potiron rouge vif d'étampes",
    cat: "suite",
    desc: "Potiron rouge traditionnel.",
    color: "#94596f",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 55,
    name: "Potimarron",
    cat: "suite",
    desc: "Potimarron sucré pour les soupes.",
    color: "#f9bb5f",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 56,
    name: "Courge musquée walthan butternut",
    cat: "suite",
    desc: "Courge butternut musquée.",
    color: "#df8c70",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  // AROMATIQUES POT 10,5
  {
    id: 57,
    name: "Coriandre",
    cat: "aromatiques-pot-10-5",
    desc: "Herbe aromatique fraîche en pot de 10,5 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  {
    id: 58,
    name: "Aneth",
    cat: "aromatiques-pot-10-5",
    desc: "Aneth frais en pot de 10,5 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  {
    id: 59,
    name: "Ciboulette",
    cat: "aromatiques-pot-10-5",
    desc: "Ciboulette en pot de 10,5 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  {
    id: 60,
    name: "Persil plat",
    cat: "aromatiques-pot-10-5",
    desc: "Persil plat en pot de 10,5 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  {
    id: 61,
    name: "Persil frisé",
    cat: "aromatiques-pot-10-5",
    desc: "Persil frisé en pot de 10,5 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  // AROMATIQUES POT 15
  {
    id: 62,
    name: "Basilic grand vert",
    cat: "aromatiques-pot-15",
    desc: "Basilic grand vert en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 63,
    name: "Basilic pourpre",
    cat: "aromatiques-pot-15",
    desc: "Basilic pourpre en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 64,
    name: "Basilic citron",
    cat: "aromatiques-pot-15",
    desc: "Basilic au citron en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 65,
    name: "Persil japonais rouge shiso",
    cat: "aromatiques-pot-15",
    desc: "Shiso rouge en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 66,
    name: "Persil japonais vert shiso",
    cat: "aromatiques-pot-15",
    desc: "Shiso vert en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 67,
    name: "Persil japonais Britton shiso",
    cat: "aromatiques-pot-15",
    desc: "Shiso Britton en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 68,
    name: "Thym",
    cat: "aromatiques-pot-15",
    desc: "Thym en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 69,
    name: "Thym citron",
    cat: "aromatiques-pot-15",
    desc: "Thym au citron en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 70,
    name: "Romarin",
    cat: "aromatiques-pot-15",
    desc: "Romarin en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 71,
    name: "Oseille",
    cat: "aromatiques-pot-15",
    desc: "Oseille en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 72,
    name: "Sauge officinale",
    cat: "aromatiques-pot-15",
    desc: "Sauge officinale en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 73,
    name: "Verveine citronnelle",
    cat: "aromatiques-pot-15",
    desc: "Verveine citronnelle en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 74,
    name: "Verveine d'argentine",
    cat: "aromatiques-pot-15",
    desc: "Verveine d'Argentine en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 75,
    name: "Mélisse",
    cat: "aromatiques-pot-15",
    desc: "Mélisse en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 76,
    name: "Estragon",
    cat: "aromatiques-pot-15",
    desc: "Estragon en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 77,
    name: "Origan",
    cat: "aromatiques-pot-15",
    desc: "Origan en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 78,
    name: "Sarriette",
    cat: "aromatiques-pot-15",
    desc: "Sarriette en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 79,
    name: "Menthe verte",
    cat: "aromatiques-pot-15",
    desc: "Menthe verte en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 80,
    name: "Menthe marocaine",
    cat: "aromatiques-pot-15",
    desc: "Menthe marocaine en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 81,
    name: "Menthe fraise",
    cat: "aromatiques-pot-15",
    desc: "Menthe à la fraise en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 82,
    name: "Menthe chocolat",
    cat: "aromatiques-pot-15",
    desc: "Menthe au chocolat en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 83,
    name: "Menthe corse",
    cat: "aromatiques-pot-15",
    desc: "Menthe corse en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 84,
    name: "Lavande",
    cat: "aromatiques-pot-15",
    desc: "Lavande en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 85,
    name: "Santoline",
    cat: "aromatiques-pot-15",
    desc: "Santoline en pot de 15 cm.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  // AROMATIQUES EN POT DE 3 LITRES
  {
    id: 86,
    name: "Citronelle de Madagascar",
    cat: "aromatiques-pot-3-litres",
    desc: "Citronelle de Madagascar en pot de 3 litres.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 8,
  },
  {
    id: 87,
    name: "Laurier sauce",
    cat: "aromatiques-pot-3-litres",
    desc: "Laurier sauce en pot de 3 litres.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 8,
  },
  {
    id: 88,
    name: "Hélichryse",
    cat: "aromatiques-pot-3-litres",
    desc: "Hélichryse en pot de 3 litres.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
    price: 8,
  },
  // DIVERS
  {
    id: 89,
    name: "Coqueret du Pérou",
    cat: "divers",
    desc: "Coqueret du Pérou.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 90,
    name: "Patate douce",
    cat: "divers",
    desc: "Patate douce.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 4,
  },
  {
    id: 91,
    name: "Fraisier charlotte",
    cat: "divers",
    desc: "Fraisier Charlotte.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 6,
  },
  {
    id: 92,
    name: "Fraisier Mara des bois",
    cat: "divers",
    desc: "Fraisier Mara des Bois.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 6,
  },
  {
    id: 93,
    name: "Fraisier Anabelle",
    cat: "divers",
    desc: "Fraisier Anabelle.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 6,
  },
  {
    id: 94,
    name: "Fraisier Anais",
    cat: "divers",
    desc: "Fraisier Anais.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 6,
  },
  {
    id: 95,
    name: "Framboisier",
    cat: "divers",
    desc: "Framboisier.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 8,
  },
  {
    id: 96,
    name: "Groseiller",
    cat: "divers",
    desc: "Groseiller.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 7,
  },
  {
    id: 97,
    name: "Cassissier",
    cat: "divers",
    desc: "Cassissier.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 7,
  },
  {
    id: 98,
    name: "Artichaux",
    cat: "divers",
    desc: "Artichauts.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
  {
    id: 99,
    name: "Salades",
    cat: "divers",
    desc: "Salades variées.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 3,
  },
  // OIGNONS
  {
    id: 100,
    name: "Rouges de Toulouges",
    cat: "oignons",
    desc: "Oignons rouges de Toulouges.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 2,
  },
  {
    id: 101,
    name: "Jaune des cévennes",
    cat: "oignons",
    desc: "Oignons jaunes des Cévennes.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 2,
  },
  {
    id: 102,
    name: "Mulhouse",
    cat: "oignons",
    desc: "Oignons de Mulhouse.",
    color: "#ffffff",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 2,
  },
];

const initialCategories: Category[] = [
  {
    id: "plan-maraicher",
    name: "plan-maraicher",
    displayName: "Plan Maraîcher",
    emoji: "🌱",
    background: "linear-gradient(135deg, #4CAF50, #81C784)",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    subcategories: [
      {
        id: "plants-greffes",
        name: "plants-greffes",
        displayName: "Plants Greffes",
        emoji: "🌱",
        background: "linear-gradient(135deg, #4CAF50, #81C784)",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "plants-traditionnels",
        name: "plants-traditionnels",
        displayName: "Plants Traditionnels",
        emoji: "🍅",
        background: "linear-gradient(135deg, #FF5722, #FF8A65)",
        image: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "suite",
        name: "suite",
        displayName: "Suite",
        emoji: "🍈",
        background: "linear-gradient(135deg, #FF9800, #FFB74D)",
        image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "aromatiques-pot-10-5",
        name: "aromatiques-pot-10-5",
        displayName: "Aromatiques Pot 10,5",
        emoji: "🌿",
        background: "linear-gradient(135deg, #8BC34A, #AED581)",
        image: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "aromatiques-pot-15",
        name: "aromatiques-pot-15",
        displayName: "Aromatiques Pot 15",
        emoji: "🌱",
        background: "linear-gradient(135deg, #4CAF50, #81C784)",
        image: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "aromatiques-pot-3-litres",
        name: "aromatiques-pot-3-litres",
        displayName: "Aromatiques Pot 3 Litres",
        emoji: "🌿",
        background: "linear-gradient(135deg, #388E3C, #66BB6A)",
        image: "https://images.unsplash.com/photo-1601972597824-8cc2af70de2f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "divers",
        name: "divers",
        displayName: "Divers",
        emoji: "🥕",
        background: "linear-gradient(135deg, #795548, #A1887F)",
        image: "https://images.unsplash.com/photo-1449339854873-750e6913301b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "oignons",
        name: "oignons",
        displayName: "Oignons",
        emoji: "🧅",
        background: "linear-gradient(135deg, #FFEB3B, #FFF176)",
        image: "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "plantes-aromatiques-medicinales",
    name: "plantes-aromatiques-medicinales",
    displayName: "Plantes Aromatiques et Médicinales",
    emoji: "🌿",
    background: "linear-gradient(135deg, #8BC34A, #AED581)",
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf09ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "plantes-comestibles",
    name: "plantes-comestibles",
    displayName: "Plantes Comestibles",
    emoji: "🥗",
    background: "linear-gradient(135deg, #4CAF50, #81C784)",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "plantes-fleuries-annuelles",
    name: "plantes-fleuries-annuelles",
    displayName: "Plantes Fleuries Annuelles",
    emoji: "🌸",
    background: "linear-gradient(135deg, #E91E63, #F48FB1)",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "plantes-fleuries-vivaces-persistantes",
    name: "plantes-fleuries-vivaces-persistantes",
    displayName: "Plantes Fleuries Vivaces et Persistantes",
    emoji: "🌺",
    background: "linear-gradient(135deg, #9C27B0, #BA68C8)",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "plantes-vertes",
    name: "plantes-vertes",
    displayName: "Plantes Vertes",
    emoji: "🌿",
    background: "linear-gradient(135deg, #388E3C, #66BB6A)",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "arbustes-fleuris-haie",
    name: "arbustes-fleuris-haie",
    displayName: "Arbustes Fleuris et de Haie",
    emoji: "🌳",
    background: "linear-gradient(135deg, #795548, #A1887F)",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "plantes-grimpantes",
    name: "plantes-grimpantes",
    displayName: "Plantes Grimpantes",
    emoji: "🌿",
    background: "linear-gradient(135deg, #FF9800, #FFB74D)",
    image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "plantes-grasses",
    name: "plantes-grasses",
    displayName: "Plantes Grasses",
    emoji: "🌵",
    background: "linear-gradient(135deg, #607D8B, #90A4AE)",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cactus",
    name: "cactus",
    displayName: "Cactus",
    emoji: "🌵",
    background: "linear-gradient(135deg, #FF5722, #FF8A65)",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "suspensions",
    name: "suspensions",
    displayName: "Suspensions",
    emoji: "🪴",
    background: "linear-gradient(135deg, #2196F3, #64B5F6)",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "agrumes",
    name: "agrumes",
    displayName: "Agrumes",
    emoji: "🍊",
    background: "linear-gradient(135deg, #FF9800, #FFB74D)",
    image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "oliviers",
    name: "oliviers",
    displayName: "Oliviers",
    emoji: "🫒",
    background: "linear-gradient(135deg, #4CAF50, #81C784)",
    image: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "plantes-automne-cyclamen-chrysantheme",
    name: "plantes-automne-cyclamen-chrysantheme",
    displayName: "Plantes d'Automne Cyclamen - Chrysanthème",
    emoji: "🍂",
    background: "linear-gradient(135deg, #FF5722, #FF8A65)",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "plantes-exotiques",
    name: "plantes-exotiques",
    displayName: "Plantes Exotiques",
    emoji: "🌺",
    background: "linear-gradient(135deg, #9C27B0, #BA68C8)",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
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
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [activeFilter, setActiveFilter] = useState("tous");
  const [searchTerm, setSearchTerm] = useState("");

  // Effet pour gérer la recherche : quand on tape, passer automatiquement à "tous"
  useEffect(() => {
    if (searchTerm && activeFilter !== "tous") {
      setActiveFilter("tous");
    }
  }, [searchTerm, activeFilter]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("AlbernyDavidProducts");
    const savedCategories = localStorage.getItem("AlbernyDavidCategories");
    
    // Force update to new structure - clear old data
    localStorage.removeItem("AlbernyDavidProducts");
    localStorage.removeItem("AlbernyDavidCategories");
    
    // Always use the new initial data
    setProducts(initialProducts);
    setCategories(initialCategories);
    
    // Save the new data
    localStorage.setItem("AlbernyDavidProducts", JSON.stringify(initialProducts));
    localStorage.setItem("AlbernyDavidCategories", JSON.stringify(initialCategories));
  }, []);

  useEffect(() => {
    localStorage.setItem("AlbernyDavidProducts", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("AlbernyDavidCategories", JSON.stringify(categories));
  }, [categories]);

  const filteredProducts =
    activeFilter === "tous"
      ? products
      : products.filter((p) => {
          // Vérifier si le filtre actif est une sous-catégorie
          for (const category of categories) {
            if (category.subcategories) {
              const subcategory = category.subcategories.find(sub => sub.id === activeFilter);
              if (subcategory) {
                return p.cat === activeFilter;
              }
            }
          }
          // Si c'est une catégorie principale avec sous-catégories, afficher TOUTES les sous-catégories
          const mainCategory = categories.find(cat => cat.id === activeFilter);
          if (mainCategory?.subcategories) {
            return mainCategory.subcategories.some(sub => p.cat === sub.id);
          }
          // Sinon, filtrer normalement
          return p.cat === activeFilter;
        });

  // Fonction pour normaliser le texte (supprimer accents et mettre en minuscules)
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Supprime les accents
  };

  const searchedProducts = searchTerm
    ? filteredProducts.filter((p) =>
        normalizeText(p.name).includes(normalizeText(searchTerm)) ||
        normalizeText(p.desc).includes(normalizeText(searchTerm))
      )
    : filteredProducts;

  const displayedProducts = limit
    ? searchedProducts.slice(0, limit)
    : searchedProducts;

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
        <>
          {/* Barre de recherche */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Filtres par catégorie */}
          <div className="category-tabs">
            <button
              className={`cat-tab ${activeFilter === "tous" ? "active" : ""}`}
              onClick={() => handleFilter("tous")}
            >
              Tous
            </button>
            {categories.map((category) => (
              <div key={category.id}>
                <button
                  className={`cat-tab ${activeFilter === category.id ? "active" : ""}`}
                  onClick={() => handleFilter(category.id)}
                  style={{
                    background: activeFilter === category.id ? category.background : undefined,
                  }}
                >
                  {category.emoji} {category.displayName}
                </button>
                {/* Afficher les sous-catégories si la catégorie principale est sélectionnée */}
                {activeFilter === category.id && category.subcategories && (
                  <div className="subcategory-tabs">
                    {category.subcategories.map((subcategory) => (
                      <button
                        key={subcategory.id}
                        className={`cat-tab subcategory-tab ${activeFilter === subcategory.id ? "active" : ""}`}
                        onClick={() => handleFilter(subcategory.id)}
                        style={{
                          background: activeFilter === subcategory.id ? subcategory.background : undefined,
                        }}
                      >
                        {subcategory.emoji} {subcategory.displayName}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Category Image Display */}
      {activeFilter !== "tous" && (
        <div className="category-image-container">
          {(() => {
            // Chercher d'abord dans les sous-catégories
            let activeCategory = null;
            for (const category of categories) {
              if (category.subcategories) {
                const subcategory = category.subcategories.find(sub => sub.id === activeFilter);
                if (subcategory) {
                  activeCategory = subcategory;
                  break;
                }
              }
            }
            // Si pas trouvé dans les sous-catégories, chercher dans les catégories principales
            if (!activeCategory) {
              activeCategory = categories.find(cat => cat.id === activeFilter);
            }
            return activeCategory?.image ? (
              <div className="category-image-wrapper">
                <img 
                  src={activeCategory.image} 
                  alt={activeCategory.displayName}
                  className="category-image"
                />
                <div className="category-image-overlay">
                  <h2 className="category-title">{activeCategory.emoji} {activeCategory.displayName}</h2>
                </div>
              </div>
            ) : null;
          })()}
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
