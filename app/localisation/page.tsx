import CustomCursor from '../../components/CustomCursor';
import Navigation from '../../components/Navigation';

export default function Localisation() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <section className="location-section" style={{ minHeight: '100vh', paddingTop: '10rem' }}>
        <div>
          <div className="section-label">Où nous trouver</div>
          <h1 className="section-title">Notre <em>atelier</em><br/>vous attend</h1>
          <div className="location-address">
            12 Rue des Fleurs<br/>69001 Lyon<br/>France
          </div>
          <div className="location-hours">
            <div className="hours-title">Horaires d'ouverture</div>
            <div className="hours-row"><span className="day">Lundi – Vendredi</span><span>9h00 – 18h30</span></div>
            <div className="hours-row"><span className="day">Samedi</span><span>10h00 – 17h00</span></div>
            <div className="hours-row"><span className="day">Dimanche</span><span>Fermé</span></div>
          </div>
          <a className="btn-primary" href="#" style={{ display: 'inline-block', marginTop: '1rem' }}>
            <span>Obtenir l'itinéraire</span>
          </a>
        </div>
        <div className="location-map">
          <div className="map-grid"></div>
          <div className="map-roads">
            <div className="map-road h1"></div>
            <div className="map-road h2"></div>
            <div className="map-road v1"></div>
            <div className="map-road v2"></div>
            <div className="map-road d1"></div>
          </div>
          <div className="map-pin">
            <div className="map-pin-head"></div>
            <div className="map-pin-tail"></div>
          </div>
        </div>
      </section>
    </>
  );
}