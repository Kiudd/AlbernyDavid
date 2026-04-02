interface Product {
  id: number;
  name: string;
  cat: string;
  desc: string;
  color: string;
  img?: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const catBg: Record<string, string> = {
  fleurs: 'linear-gradient(160deg,rgba(232,180,170,0.5),rgba(201,133,122,0.3))',
  fruits: 'linear-gradient(160deg,rgba(212,184,122,0.5),rgba(184,150,90,0.3))',
  arbres: 'linear-gradient(160deg,rgba(122,140,110,0.5),rgba(168,184,154,0.3))',
  herbes: 'linear-gradient(160deg,rgba(154,128,192,0.4),rgba(180,160,210,0.25))',
  'plants-greffes': 'linear-gradient(160deg,rgba(200,150,100,0.5),rgba(180,130,80,0.3))',
  'plants-traditionnels': 'linear-gradient(160deg,rgba(150,200,100,0.5),rgba(130,180,80,0.3))',
  suite: 'linear-gradient(160deg,rgba(100,150,200,0.5),rgba(80,130,180,0.3))',
  'aromatiques-pot-10-5': 'linear-gradient(160deg,rgba(200,100,150,0.5),rgba(180,80,130,0.3))',
  'aromatiques-pot-15': 'linear-gradient(160deg,rgba(150,100,200,0.5),rgba(130,80,180,0.3))',
  'aromatiques-pot-3-litres': 'linear-gradient(160deg,rgba(100,200,150,0.5),rgba(80,180,130,0.3))',
  divers: 'linear-gradient(160deg,rgba(200,200,100,0.5),rgba(180,180,80,0.3))',
  oignons: 'linear-gradient(160deg,rgba(150,150,150,0.5),rgba(130,130,130,0.3))',
};

const catEmoji: Record<string, string> = {
  fleurs: '🌸',
  fruits: '🍊',
  arbres: '🌳',
  herbes: '🌿',
  'plants-greffes': '🌱',
  'plants-traditionnels': '🍅',
  suite: '🍈',
  'aromatiques-pot-10-5': '🌿',
  'aromatiques-pot-15': '🌿',
  'aromatiques-pot-3-litres': '🌿',
  divers: '🥕',
  oignons: '🧅',
};

export default function ProductCard({ product }: ProductCardProps) {
  const bg = catBg[product.cat] || catBg.fleurs;
  const emoji = catEmoji[product.cat] || '✦';

  return (
    <div className="product-card reveal" data-cat={product.cat}>
      <div className="product-card-inner">
        <div className="product-img">
          <div className="product-img-bg prod-illus" style={{ background: bg }}>
            {product.img ? (
              <img
                src={product.img}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                alt={product.name}
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.parentElement!.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;">${emoji}</div>`;
                }}
              />
            ) : (
              <div style={{ fontSize: '5rem', opacity: 0.6 }}>{emoji}</div>
            )}
          </div>
          <div className="product-overlay"></div>
          <div className="product-color-dot" style={{ background: product.color }}></div>
        </div>
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-desc">{product.desc}</div>
        <div className="product-price">{product.price}€</div>
        <div className="product-footer">
          <span className="product-cat">{product.cat}</span>
          <button
            className="product-add-cart"
            onClick={() => {
              if ((window as any).addToCart) {
                (window as any).addToCart(product);
              }
            }}
          >
            Ajouter au panier
          </button>
          <div className="product-arrow">→</div>
        </div>
      </div>
    </div>
  );
}