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
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2928.4793730915135!2d2.964816975953895!3d42.77821477115711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b0665f4ca39c8b%3A0xf9e878856d4bf3de!2sAlberny%20David!5e0!3m2!1sfr!2sfr!4v1774719524324!5m2!1sfr!2sfr" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}