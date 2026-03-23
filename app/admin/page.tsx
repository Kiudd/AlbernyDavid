'use client';

import { useState, useEffect } from 'react';
import CustomCursor from '../../components/CustomCursor';
import Navigation from '../../components/Navigation';
import Notification from '../../components/Notification';
import { Product } from '../../components/ProductGrid';

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

const catColors: Record<string, string> = {
  fleurs: '#c9857a',
  fruits: '#d4b87a',
  arbres: '#7a8c6e',
  herbes: '#9a80c0'
};

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editIndex, setEditIndex] = useState(-1);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error'; show: boolean }>({
    message: '',
    type: 'success',
    show: false
  });

  const [formData, setFormData] = useState({
    name: '',
    cat: 'fleurs',
    desc: '',
    color: '#c9857a',
    img: ''
  });

  useEffect(() => {
    // Check if already logged in (simple localStorage for demo)
    const loggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);

    const savedProducts = localStorage.getItem('albernydavidProducts');
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch {
        setProducts(initialProducts);
      }
    }
  }, []);

  const syncProductsStorage = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('albernydavidProducts', JSON.stringify(newProducts));
  };

  const handleLogin = () => {
    const username = (document.getElementById('admin-user') as HTMLInputElement)?.value;
    const password = (document.getElementById('admin-pass') as HTMLInputElement)?.value;

    if (username === 'admin' && password === 'admin2024') {
      setIsLoggedIn(true);
      localStorage.setItem('adminLoggedIn', 'true');
    } else {
      setNotification({
        message: '⚠ Identifiants incorrects.',
        type: 'error',
        show: true
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminLoggedIn');
  };

  const syncColor = (value: string) => {
    setFormData(prev => ({ ...prev, color: value }));
  };

  const syncColorText = (value: string) => {
    if (/^#[0-9a-fA-F]{6}$/.test(value)) {
      setFormData(prev => ({ ...prev, color: value }));
    }
  };

  const saveProduct = () => {
    if (!formData.name.trim()) {
      setNotification({
        message: '⚠ Le titre est obligatoire.',
        type: 'error',
        show: true
      });
      return;
    }

    if (editIndex >= 0) {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = { ...updatedProducts[editIndex], ...formData };
      syncProductsStorage(updatedProducts);
      setNotification({
        message: '✦ Produit mis à jour avec succès.',
        type: 'success',
        show: true
      });
    } else {
      const newProduct: Product = {
        id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
        ...formData
      };
      syncProductsStorage([...products, newProduct]);
      setNotification({
        message: '✦ Produit ajouté avec succès.',
        type: 'success',
        show: true
      });
    }

    setFormData({
      name: '',
      cat: 'fleurs',
      desc: '',
      color: '#c9857a',
      img: ''
    });
    setEditIndex(-1);
  };

  const editProduct = (index: number) => {
    const product = products[index];
    setFormData({
      name: product.name,
      cat: product.cat,
      desc: product.desc,
      color: product.color,
      img: product.img || ''
    });
    setEditIndex(index);
  };

  const deleteProduct = (index: number) => {
    if (!confirm('Supprimer ce produit ?')) return;
    const updatedProducts = products.filter((_, i) => i !== index);
    syncProductsStorage(updatedProducts);
    setNotification({
      message: '✦ Produit supprimé.',
      type: 'success',
      show: true
    });
  };

  const closeNotification = () => {
    setNotification(prev => ({ ...prev, show: false }));
  };

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
      <section className="admin-section" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
        {!isLoggedIn ? (
          <div className="admin-login">
            <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold)' }}>Accès restreint</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300, color: 'var(--bark)', marginBottom: '0.5rem' }}>
              Espace <em style={{ color: 'var(--rose)' }}>Administrateur</em>
            </h2>
            <p style={{ fontSize: '0.78rem', color: 'var(--bark-l)', marginBottom: '0' }}>
              Connexion requise pour accéder au tableau de bord.
            </p>
            <div className="admin-login-box">
              <h3>Connexion sécurisée</h3>
              <p style={{ color: 'var(--mid)', marginBottom: '0.8rem' }}>Utilisateur : <strong>admin</strong> / Mot de passe : <strong>admin2024</strong></p>
              <div className="admin-field">
                <label>Identifiant</label>
                <input type="text" id="admin-user" placeholder="admin" />
              </div>
              <div className="admin-field">
                <label>Mot de passe</label>
                <input type="password" id="admin-pass" placeholder="••••••••" />
              </div>
              <button className="btn-login" onClick={handleLogin}>Accéder au tableau de bord</button>
              <button
                className="btn-logout"
                style={{ marginTop: '0.75rem' }}
                onClick={() => {
                  localStorage.removeItem('adminLoggedIn');
                  setIsLoggedIn(false);
                }}
              >Réinitialiser session</button>
            </div>
          </div>
        ) : (
          <div className="admin-dashboard">
            <div className="admin-topbar">
              <h2>✦ Tableau de bord — AlbernyDavide</h2>
              <button className="btn-logout" onClick={handleLogout}>Déconnexion</button>
            </div>
            <div className="admin-layout">
              <div className="admin-form-panel">
                <div className="admin-form-title">Ajouter / Modifier un produit</div>
                <div className="admin-form">
                  <div>
                    <label>Catégorie</label>
                    <select
                      value={formData.cat}
                      onChange={(e) => setFormData(prev => ({ ...prev, cat: e.target.value }))}
                    >
                      <option value="fleurs">🌸 Fleurs</option>
                      <option value="fruits">🍊 Fruits</option>
                      <option value="arbres">🌳 Arbres</option>
                      <option value="herbes">🌿 Herbes</option>
                    </select>
                  </div>
                  <div>
                    <label>Titre du produit</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Ex: Rose de Damas"
                    />
                  </div>
                  <div>
                    <label>Description</label>
                    <textarea
                      value={formData.desc}
                      onChange={(e) => setFormData(prev => ({ ...prev, desc: e.target.value }))}
                      placeholder="Décrivez ce produit…"
                    ></textarea>
                  </div>
                  <div>
                    <label>Couleur associée</label>
                    <div className="color-row">
                      <input
                        type="color"
                        value={formData.color}
                        onChange={(e) => syncColor(e.target.value)}
                      />
                      <input
                        type="text"
                        value={formData.color}
                        onChange={(e) => syncColorText(e.target.value)}
                        placeholder="#c9857a"
                      />
                    </div>
                  </div>
                  <div>
                    <label>URL de l'image</label>
                    <input
                      type="text"
                      value={formData.img}
                      onChange={(e) => setFormData(prev => ({ ...prev, img: e.target.value }))}
                      placeholder="https://…image.jpg"
                    />
                  </div>
                  {formData.img && (
                    <div style={{ margin: '1rem 0', textAlign: 'center' }}>
                      <img
                        src={formData.img}
                        alt="Aperçu"
                        style={{ maxWidth: '100%', maxHeight: '160px', borderRadius: '8px', border: '1px solid rgba(255,255,255,.15)' }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/240?text=Image+indisponible';
                        }}
                      />
                    </div>
                  )}
                  <button className="btn-add" onClick={saveProduct}>
                    {editIndex >= 0 ? 'Mettre à jour' : 'Ajouter le produit'}
                  </button>
                </div>
              </div>
              <div className="admin-products-panel">
                <div className="admin-form-title">Produits existants (<span id="prod-count">{products.length}</span>)</div>
                <div className="admin-products-list">
                  {products.length === 0 ? (
                    <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.3)', padding: '1rem' }}>
                      Aucun produit pour l'instant.
                    </p>
                  ) : (
                    products.map((p, i) => (
                      <div key={p.id} className="admin-product-row">
                        <div
                          className="admin-prod-color"
                          style={{ background: p.color || catColors[p.cat] || '#b8965a' }}
                        ></div>
                        <div className="admin-prod-name">{p.name}</div>
                        <div className="admin-prod-cat">{p.cat}</div>
                        <div className="admin-prod-actions">
                          <button className="btn-edit" onClick={() => editProduct(i)} title="Modifier">✎</button>
                          <button className="btn-del" onClick={() => deleteProduct(i)} title="Supprimer">✕</button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}