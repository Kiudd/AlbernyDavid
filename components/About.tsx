export default function About() {
  return (
    <section className="about">
      <div className="about-visual">
        <div className="about-frame">
          <div className="about-frame-inner">
            <div className="botanical-3d">
              <div className="b-stem"></div>
              <div className="b-leaf"></div>
              <div className="b-leaf"></div>
              <div className="b-leaf"></div>
              <div className="b-leaf"></div>
              <div className="b-flower">
                <div className="b-petal-f"></div>
                <div className="b-petal-f"></div>
                <div className="b-petal-f"></div>
                <div className="b-petal-f"></div>
                <div className="b-petal-f"></div>
                <div className="b-petal-f"></div>
                <div className="b-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-corner tl"></div>
        <div className="about-corner br"></div>
        <div className="about-badge">
          <div className="about-badge-inner">
            <span className="about-badge-num">15</span>
            <span className="about-badge-txt">ans</span>
          </div>
        </div>
      </div>
      <div className="about-text">
        <div className="section-label">Notre atelier</div>
        <h2 className="section-title">
          L'art du vivant,
          <br />
          <em>transmis avec soin</em>
        </h2>
        <p className="about-desc">
          AlbernyDavid est né d'une passion profonde pour la beauté du monde
          végétal. Depuis 2009, notre atelier crée des compositions uniques qui
          transforment chaque espace en œuvre d'art naturelle.
        </p>
        <p className="about-desc">
          Chaque création est pensée, conçue et réalisée à la main, avec des
          matières soigneusement sélectionnées pour leur qualité et leur
          caractère singulier.
        </p>
        <div className="about-stats">
          <div>
            <span className="stat-num">240+</span>
            <span className="stat-label">Espèces</span>
          </div>
          <div>
            <span className="stat-num">1.2k</span>
            <span className="stat-label">Clients</span>
          </div>
          <div>
            <span className="stat-num">4</span>
            <span className="stat-label">Catégories</span>
          </div>
        </div>
      </div>
    </section>
  );
}
