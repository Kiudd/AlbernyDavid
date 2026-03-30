import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">
            Albern<span>y</span>Davide
          </div>
          <p className="footer-tagline">
            L'art botanique au service de votre intérieur — des créations
            végétales d'exception, nées de la passion et du savoir-faire.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/presentation">Présentation</Link>
            </li>
            <li>
              <Link href="/produits">Produits</Link>
            </li>
            <li>
              <Link href="/localisation">Localisation</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li>
              <a>12 Rue des Fleurs, Lyon</a>
            </li>
            <li>
              <a>contact@AlbernyDavid.fr</a>
            </li>
            <li>
              <a>+33 4 78 00 00 00</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">
          © 2024 AlbernyDavid — Tous droits réservés
        </span>
        <span className="footer-sep">✦ Fait avec passion</span>
      </div>
    </footer>
  );
}
