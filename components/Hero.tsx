import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-flora">
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
      </div>

      {/* 3D Ring */}
      <div className="hero-3d-ring">
        <div className="ring-3d">
          <div className="ring-layer"></div>
          <div className="ring-layer"></div>
          <div className="ring-layer"></div>
          <div className="ring-layer"></div>
          <div className="orbit-dot"></div>
          <div className="orbit-dot"></div>
          <div className="orbit-dot"></div>
          <div className="ring-center">AD</div>
        </div>
      </div>

      <svg className="hero-leaves deco-branch" width="300" height="400" viewBox="0 0 300 400" fill="none">
        <path d="M150 380 Q120 300 80 250 Q40 200 60 150 Q80 100 130 80" stroke="#7a8c6e" strokeWidth="2" fill="none"/>
        <ellipse cx="80" cy="200" rx="50" ry="25" fill="#7a8c6e" transform="rotate(-30 80 200)" opacity="0.8"/>
        <ellipse cx="100" cy="150" rx="45" ry="22" fill="#a8b89a" transform="rotate(-50 100 150)" opacity="0.7"/>
        <ellipse cx="130" cy="110" rx="40" ry="20" fill="#7a8c6e" transform="rotate(-60 130 110)" opacity="0.9"/>
        <ellipse cx="60" cy="250" rx="55" ry="28" fill="#a8b89a" transform="rotate(-15 60 250)" opacity="0.6"/>
      </svg>

      <div className="hero-content">
        <div className="hero-tag">Art Botanique & Décoration</div>
        <h1 className="hero-title">
          La nature<br/><em>réinventée</em><br/>en <span className="gold">art</span>
        </h1>
        <p className="hero-subtitle">
          Des créations végétales d'exception,<br/>sculptées avec passion et délicatesse.
        </p>
        <div className="hero-cta">
          <Link href="/produits" className="btn-primary">
            <span>Découvrir la collection</span>
          </Link>
          <Link href="/presentation" className="btn-ghost">
            Notre histoire
          </Link>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>Défiler</span>
      </div>
    </section>
  );
}