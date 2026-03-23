import CustomCursor from '../components/CustomCursor';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <section className="products-section">
        <div className="products-header">
          <div className="section-label">Sélection</div>
          <h2 className="section-title">Nos <em>créations</em> vedettes</h2>
        </div>
        <ProductGrid limit={4} />
      </section>
      <Footer />
    </>
  );
}
