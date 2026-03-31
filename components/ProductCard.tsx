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
};

const catEmoji: Record<string, string> = {
  fleurs: '🌸',
  fruits: '🍊',
  arbres: '🌳',
  herbes: '🌿',
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