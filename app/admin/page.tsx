"use client";

import { useState, useEffect } from "react";
import CustomCursor from "../../components/CustomCursor";
import Navigation from "../../components/Navigation";
import Notification from "../../components/Notification";
import { Product, Category } from "../../components/ProductGrid";

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
  // PLANTS TRADITIONNELS - ajout de quelques exemples
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
    name: "Tomate coeur de bœuf",
    cat: "plants-traditionnels",
    desc: "Tomate en forme de cœur, charnue et juteuse.",
    color: "#e77284",
    img: "https://images.unsplash.com/photo-1546470427-e9b3a5db3b2e?auto=format&fit=crop&w=800&q=80",
    price: 5,
  },
];

const initialCategories: Category[] = [
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
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf09ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "aromatiques-pot-15",
    name: "aromatiques-pot-15",
    displayName: "Aromatiques Pot 15",
    emoji: "🌱",
    background: "linear-gradient(135deg, #4CAF50, #81C784)",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "aromatiques-pot-3-litres",
    name: "aromatiques-pot-3-litres",
    displayName: "Aromatiques Pot 3 Litres",
    emoji: "🌿",
    background: "linear-gradient(135deg, #388E3C, #66BB6A)",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
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
];

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<"products" | "categories">("products");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [editIndex, setEditIndex] = useState(-1);
  const [editCategoryIndex, setEditCategoryIndex] = useState(-1);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
    show: boolean;
  }>({
    message: "",
    type: "success",
    show: false,
  });

  const [productFormData, setProductFormData] = useState({
    name: "",
    cat: "plants-greffes",
    desc: "",
    color: "#131311",
    img: "",
    price: 0,
  });

  const [categoryFormData, setCategoryFormData] = useState({
    name: "",
    displayName: "",
    emoji: "",
    background: "",
    image: "",
  });

  const [productSearchTerm, setProductSearchTerm] = useState("");
  const [categorySearchTerm, setCategorySearchTerm] = useState("");

  useEffect(() => {
    // Check if already logged in
    const loggedIn = localStorage.getItem("adminLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    // Load products
    const savedProducts = localStorage.getItem("AlbernyDavidProducts");
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch {
        setProducts(initialProducts);
      }
    }

    // Load categories
    const savedCategories = localStorage.getItem("AlbernyDavidCategories");
    if (savedCategories) {
      try {
        setCategories(JSON.parse(savedCategories));
      } catch {
        setCategories(initialCategories);
      }
    }
  }, []);

  const syncProductsStorage = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem("AlbernyDavidProducts", JSON.stringify(newProducts));
  };

  const syncCategoriesStorage = (newCategories: Category[]) => {
    setCategories(newCategories);
    localStorage.setItem("AlbernyDavidCategories", JSON.stringify(newCategories));
  };

  const handleLogin = () => {
    const username = (document.getElementById("admin-user") as HTMLInputElement)?.value;
    const password = (document.getElementById("admin-pass") as HTMLInputElement)?.value;

    if (username === "admin" && password === "admin2024") {
      setIsLoggedIn(true);
      localStorage.setItem("adminLoggedIn", "true");
    } else {
      setNotification({
        message: "⚠ Identifiants incorrects.",
        type: "error",
        show: true,
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("adminLoggedIn");
  };

  // Product functions
  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!productFormData.name.trim() || !productFormData.desc.trim()) {
      setNotification({
        message: "⚠ Veuillez remplir tous les champs obligatoires.",
        type: "error",
        show: true,
      });
      return;
    }

    const newProduct: Product = {
      id: editIndex >= 0 ? products[editIndex].id : Date.now(),
      name: productFormData.name,
      cat: productFormData.cat,
      desc: productFormData.desc,
      color: productFormData.color,
      img: productFormData.img,
      price: productFormData.price,
    };

    let updatedProducts;
    if (editIndex >= 0) {
      updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setNotification({
        message: "✅ Produit modifié avec succès !",
        type: "success",
        show: true,
      });
    } else {
      updatedProducts = [...products, newProduct];
      setNotification({
        message: "✅ Produit ajouté avec succès !",
        type: "success",
        show: true,
      });
    }

    syncProductsStorage(updatedProducts);
    resetProductForm();
  };

  const resetProductForm = () => {
    setProductFormData({
      name: "",
      cat: categories[0]?.id || "plants-greffes",
      desc: "",
      color: "#131311",
      img: "",
      price: 0,
    });
    setEditIndex(-1);
  };

  const editProduct = (index: number) => {
    const product = products[index];
    setProductFormData({
      name: product.name,
      cat: product.cat,
      desc: product.desc,
      color: product.color,
      img: product.img || "",
      price: product.price,
    });
    setEditIndex(index);
  };

  const deleteProduct = (index: number) => {
    if (!confirm("Supprimer ce produit ?")) return;
    const updatedProducts = products.filter((_, i) => i !== index);
    syncProductsStorage(updatedProducts);
    setNotification({
      message: "🗑️ Produit supprimé avec succès !",
      type: "success",
      show: true,
    });
  };

  // Category functions
  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!categoryFormData.name.trim() || !categoryFormData.displayName.trim()) {
      setNotification({
        message: "⚠ Veuillez remplir tous les champs obligatoires.",
        type: "error",
        show: true,
      });
      return;
    }

    const newCategory: Category = {
      id: editCategoryIndex >= 0 ? categories[editCategoryIndex].id : categoryFormData.name.toLowerCase().replace(/\s+/g, '-'),
      name: categoryFormData.name,
      displayName: categoryFormData.displayName,
      emoji: categoryFormData.emoji,
      background: categoryFormData.background,
      image: categoryFormData.image,
    };

    let updatedCategories;
    if (editCategoryIndex >= 0) {
      updatedCategories = [...categories];
      updatedCategories[editCategoryIndex] = newCategory;
      setNotification({
        message: "✅ Catégorie modifiée avec succès !",
        type: "success",
        show: true,
      });
    } else {
      updatedCategories = [...categories, newCategory];
      setNotification({
        message: "✅ Catégorie ajoutée avec succès !",
        type: "success",
        show: true,
      });
    }

    syncCategoriesStorage(updatedCategories);
    resetCategoryForm();
  };

  const resetCategoryForm = () => {
    setCategoryFormData({
      name: "",
      displayName: "",
      emoji: "",
      background: "",
      image: "",
    });
    setEditCategoryIndex(-1);
  };

  const editCategory = (index: number) => {
    const category = categories[index];
    setCategoryFormData({
      name: category.name,
      displayName: category.displayName,
      emoji: category.emoji,
      background: category.background,
      image: category.image || "",
    });
    setEditCategoryIndex(index);
  };

  const deleteCategory = (index: number) => {
    const category = categories[index];
    const productsInCategory = products.filter(p => p.cat === category.id);

    if (productsInCategory.length > 0) {
      setNotification({
        message: `⚠ Impossible de supprimer cette catégorie car elle contient ${productsInCategory.length} produit(s).`,
        type: "error",
        show: true,
      });
      return;
    }

    if (!confirm("Supprimer cette catégorie ?")) return;
    const updatedCategories = categories.filter((_, i) => i !== index);
    syncCategoriesStorage(updatedCategories);
    setNotification({
      message: "🗑️ Catégorie supprimée avec succès !",
      type: "success",
      show: true,
    });
  };

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, show: false }));
  };

  // Search functions
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const filteredProducts = products.filter((p) =>
    productSearchTerm === "" ||
    normalizeText(p.name).includes(normalizeText(productSearchTerm)) ||
    normalizeText(p.desc).includes(normalizeText(productSearchTerm)) ||
    normalizeText(categories.find(c => c.id === p.cat)?.displayName || "").includes(normalizeText(productSearchTerm))
  );

  const filteredCategories = categories.filter((c) =>
    categorySearchTerm === "" ||
    normalizeText(c.displayName).includes(normalizeText(categorySearchTerm)) ||
    normalizeText(c.name).includes(normalizeText(categorySearchTerm))
  );

  return (
    <>
      <CustomCursor />
      <Navigation />
      <Notification
        message={notification.message}
        type={notification.type}
        show={notification.show}
        onClose={closeNotification}
      />
      <section
        className="admin-section"
        style={{ minHeight: "100vh", paddingTop: "8rem" }}
      >
        {!isLoggedIn ? (
          <div className="admin-login">
            <div className="section-label" style={{ justifyContent: "center" }}>
              Accès restreint
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2rem",
                fontWeight: 300,
                color: "var(--cream)",
                marginBottom: "0.5rem",
              }}
            >
              Espace <em style={{ color: "var(--rose)" }}>Administrateur</em>
            </h2>
            <p
              style={{
                fontSize: "0.78rem",
                color: "rgba(245,240,232,0.35)",
                marginBottom: "0",
              }}
            >
              Connexion requise pour accéder au tableau de bord.
            </p>
            <div className="admin-login-box">
              <h3>Connexion sécurisée</h3>
              <p style={{ color: "var(--mid)", marginBottom: "0.8rem" }}>
                Utilisateur : <strong>admin</strong> / Mot de passe :{" "}
                <strong>admin2024</strong>
              </p>
              <div className="admin-field">
                <label>Identifiant</label>
                <input type="text" id="admin-user" placeholder="admin" />
              </div>
              <div className="admin-field">
                <label>Mot de passe</label>
                <input type="password" id="admin-pass" placeholder="••••••••" />
              </div>
              <button className="btn-login" onClick={handleLogin}>
                Accéder au tableau de bord
              </button>
              <button
                className="btn-logout"
                style={{ marginTop: "0.75rem" }}
                onClick={() => {
                  localStorage.removeItem("adminLoggedIn");
                  setIsLoggedIn(false);
                }}
              >
                Réinitialiser session
              </button>
            </div>
          </div>
        ) : (
          <div className="admin-dashboard">
            <div className="admin-topbar">
              <h2>✦ Tableau de bord — AlbernyDavid</h2>
              <button className="btn-logout" onClick={handleLogout}>
                Déconnexion
              </button>
            </div>

            {/* Onglets */}
            <div className="admin-tabs">
              <button
                className={`admin-tab ${activeTab === "products" ? "active" : ""}`}
                onClick={() => setActiveTab("products")}
              >
                📦 Produits ({products.length})
              </button>
              <button
                className={`admin-tab ${activeTab === "categories" ? "active" : ""}`}
                onClick={() => setActiveTab("categories")}
              >
                🏷️ Catégories ({categories.length})
              </button>
            </div>

            <div className="admin-layout">
              {activeTab === "products" ? (
                <>
                  {/* Section Produits */}
                  <div className="admin-form-panel">
                    <div className="admin-form-title">
                      Ajouter / Modifier un produit
                    </div>
                    <div className="admin-form">
                      <div>
                        <label>Catégorie</label>
                        <select
                          value={productFormData.cat}
                          onChange={(e) =>
                            setProductFormData((prev) => ({
                              ...prev,
                              cat: e.target.value,
                            }))
                          }
                        >
                          {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                              {cat.emoji} {cat.displayName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label>Titre du produit</label>
                        <input
                          type="text"
                          value={productFormData.name}
                          onChange={(e) =>
                            setProductFormData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Ex: Rose de Damas"
                        />
                      </div>
                      <div>
                        <label>Description</label>
                        <textarea
                          value={productFormData.desc}
                          onChange={(e) =>
                            setProductFormData((prev) => ({
                              ...prev,
                              desc: e.target.value,
                            }))
                          }
                          placeholder="Décrivez ce produit…"
                        ></textarea>
                      </div>
                      <div>
                        <label>Prix (€)</label>
                        <input
                          type="number"
                          value={productFormData.price}
                          onChange={(e) =>
                            setProductFormData((prev) => ({
                              ...prev,
                              price: parseFloat(e.target.value) || 0,
                            }))
                          }
                          placeholder="0"
                          min="0"
                          step="0.01"
                        />
                      </div>
                      <div>
                        <label>Couleur associée</label>
                        <div className="color-row">
                          <input
                            type="color"
                            value={productFormData.color}
                            onChange={(e) => setProductFormData((prev) => ({
                              ...prev,
                              color: e.target.value,
                            }))}
                          />
                          <input
                            type="text"
                            value={productFormData.color}
                            onChange={(e) => setProductFormData((prev) => ({
                              ...prev,
                              color: e.target.value,
                            }))}
                            placeholder="#c9857a"
                          />
                        </div>
                      </div>
                      <div>
                        <label>Image du produit</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = (event) => {
                                setProductFormData((prev) => ({
                                  ...prev,
                                  img: event.target?.result as string,
                                }));
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                        {productFormData.img && (
                          <div
                            style={{
                              marginTop: "0.5rem",
                              fontSize: "0.8rem",
                              color: "rgba(245,240,232,0.6)",
                            }}
                          >
                            Image sélectionnée
                          </div>
                        )}
                      </div>
                      {productFormData.img && (
                        <div style={{ margin: "1rem 0", textAlign: "center" }}>
                          <img
                            src={productFormData.img}
                            alt="Aperçu"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "160px",
                              borderRadius: "8px",
                              border: "1px solid rgba(255,255,255,.15)",
                            }}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "https://via.placeholder.com/240?text=Image+indisponible";
                            }}
                          />
                        </div>
                      )}
                      <button className="btn-add" onClick={() => handleProductSubmit({ preventDefault: () => {} } as any)}>
                        {editIndex >= 0 ? "Mettre à jour" : "Ajouter le produit"}
                      </button>
                    </div>
                  </div>
                  <div className="admin-products-panel">
                    <div className="admin-form-title">
                      Produits existants (
                      <span id="prod-count">{filteredProducts.length}</span>)
                    </div>

                    {/* Barre de recherche pour les produits */}
                    <div className="admin-search-bar">
                      <input
                        type="text"
                        placeholder="🔍 Rechercher un produit..."
                        value={productSearchTerm}
                        onChange={(e) => setProductSearchTerm(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.5rem",
                          borderRadius: "8px",
                          border: "1px solid rgba(255,255,255,0.2)",
                          background: "rgba(255,255,255,0.05)",
                          color: "var(--cream)",
                          fontSize: "0.9rem",
                        }}
                      />
                    </div>

                    <div className="admin-products-list">
                      {filteredProducts.length === 0 ? (
                        <p
                          style={{
                            fontSize: "0.8rem",
                            color: "rgba(245,240,232,0.3)",
                            padding: "1rem",
                          }}
                        >
                          {productSearchTerm ? "Aucun produit trouvé pour cette recherche." : "Aucun produit pour l'instant."}
                        </p>
                      ) : (
                        filteredProducts.map((p, i) => {
                          const originalIndex = products.findIndex(prod => prod.id === p.id);
                          return (
                            <div key={p.id} className="admin-product-row">
                              <div
                                className="admin-prod-color"
                                style={{
                                  background:
                                    p.color || categories.find(c => c.id === p.cat)?.background || "#b8965a",
                                }}
                              ></div>
                              <div className="admin-prod-name">{p.name}</div>
                              <div className="admin-prod-cat">{categories.find(c => c.id === p.cat)?.displayName || p.cat}</div>
                              <div className="admin-prod-actions">
                                <button
                                  className="btn-edit"
                                  onClick={() => editProduct(originalIndex)}
                                  title="Modifier"
                                >
                                  ✎
                                </button>
                                <button
                                  className="btn-del"
                                  onClick={() => deleteProduct(originalIndex)}
                                  title="Supprimer"
                                >
                                  ✕
                                </button>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Section Catégories */}
                  <div className="admin-form-panel">
                    <div className="admin-form-title">
                      Ajouter / Modifier une catégorie
                    </div>
                    <div className="admin-form">
                      <div>
                        <label>Nom technique</label>
                        <input
                          type="text"
                          value={categoryFormData.name}
                          onChange={(e) =>
                            setCategoryFormData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Ex: plants-greffes"
                        />
                      </div>
                      <div>
                        <label>Nom d'affichage</label>
                        <input
                          type="text"
                          value={categoryFormData.displayName}
                          onChange={(e) =>
                            setCategoryFormData((prev) => ({
                              ...prev,
                              displayName: e.target.value,
                            }))
                          }
                          placeholder="Ex: Plants Greffes"
                        />
                      </div>
                      <div>
                        <label>Emoji</label>
                        <input
                          type="text"
                          value={categoryFormData.emoji}
                          onChange={(e) =>
                            setCategoryFormData((prev) => ({
                              ...prev,
                              emoji: e.target.value,
                            }))
                          }
                          placeholder="Ex: 🌱"
                        />
                      </div>
                      <div>
                        <label>Arrière-plan CSS</label>
                        <input
                          type="text"
                          value={categoryFormData.background}
                          onChange={(e) =>
                            setCategoryFormData((prev) => ({
                              ...prev,
                              background: e.target.value,
                            }))
                          }
                          placeholder="Ex: linear-gradient(135deg, #4CAF50, #81C784)"
                        />
                      </div>
                      <div>
                        <label>Image de catégorie</label>
                        <input
                          type="text"
                          value={categoryFormData.image}
                          onChange={(e) =>
                            setCategoryFormData((prev) => ({
                              ...prev,
                              image: e.target.value,
                            }))
                          }
                          placeholder="URL de l'image..."
                        />
                      </div>
                      <button className="btn-add" onClick={() => handleCategorySubmit({ preventDefault: () => {} } as any)}>
                        {editCategoryIndex >= 0 ? "Mettre à jour" : "Ajouter la catégorie"}
                      </button>
                    </div>
                  </div>
                  <div className="admin-products-panel">
                    <div className="admin-form-title">
                      Catégories existantes (
                      <span id="cat-count">{filteredCategories.length}</span>)
                    </div>

                    {/* Barre de recherche pour les catégories */}
                    <div className="admin-search-bar">
                      <input
                        type="text"
                        placeholder="🔍 Rechercher une catégorie..."
                        value={categorySearchTerm}
                        onChange={(e) => setCategorySearchTerm(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.5rem",
                          borderRadius: "8px",
                          border: "1px solid rgba(255,255,255,0.2)",
                          background: "rgba(255,255,255,0.05)",
                          color: "var(--cream)",
                          fontSize: "0.9rem",
                        }}
                      />
                    </div>

                    <div className="admin-products-list">
                      {filteredCategories.length === 0 ? (
                        <p
                          style={{
                            fontSize: "0.8rem",
                            color: "rgba(245,240,232,0.3)",
                            padding: "1rem",
                          }}
                        >
                          {categorySearchTerm ? "Aucune catégorie trouvée pour cette recherche." : "Aucune catégorie pour l'instant."}
                        </p>
                      ) : (
                        filteredCategories.map((c, i) => {
                          const originalIndex = categories.findIndex(cat => cat.id === c.id);
                          const productCount = products.filter(p => p.cat === c.id).length;
                          return (
                            <div key={c.id} className="admin-product-row">
                              <div
                                className="admin-prod-color"
                                style={{
                                  background: c.background,
                                }}
                              ></div>
                              <div className="admin-prod-name">
                                {c.emoji} {c.displayName}
                                <span style={{ fontSize: "0.8rem", color: "rgba(245,240,232,0.5)", marginLeft: "0.5rem" }}>
                                  ({productCount} produit{productCount !== 1 ? "s" : ""})
                                </span>
                              </div>
                              <div className="admin-prod-cat">{c.name}</div>
                              <div className="admin-prod-actions">
                                <button
                                  className="btn-edit"
                                  onClick={() => editCategory(originalIndex)}
                                  title="Modifier"
                                >
                                  ✎
                                </button>
                                <button
                                  className="btn-del"
                                  onClick={() => deleteCategory(originalIndex)}
                                  title="Supprimer"
                                  disabled={productCount > 0}
                                  style={{ opacity: productCount > 0 ? 0.5 : 1 }}
                                >
                                  ✕
                                </button>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
