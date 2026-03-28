import CustomCursor from "../../components/CustomCursor";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Presentation() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <section
        style={{
          paddingTop: "10rem",
          minHeight: "40vh",
          paddingLeft: "8%",
          paddingRight: "8%",
          background: "var(--cream)",
        }}
      >
        <div className="section-label">Notre histoire</div>
        <h1
          className="section-title"
          style={{ fontSize: "clamp(2.8rem,5vw,5rem)", marginBottom: "2rem" }}
        >
          L'âme d'<em>AlbernyDavid</em>
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
            marginTop: "4rem",
          }}
        >
          <div>
            <p
              className="about-desc"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.9",
                marginBottom: "2rem",
              }}
            >
              Fondé en 2009 par David Albernet, passionné de botanique et de
              décoration intérieure, <strong>AlbernyDavid</strong> est devenu
              une référence dans le monde de l'art floral et végétal en France.
            </p>
            <p className="about-desc" style={{ marginBottom: "2rem" }}>
              Notre atelier est un espace vivant où chaque plante, chaque fleur,
              chaque branche est traité comme une matière précieuse. Nous ne
              créons pas simplement des décorations — nous racontons des
              histoires à travers le végétal.
            </p>
            <p className="about-desc">
              Basés à Lyon, nous livrons dans toute la France et recevons des
              clients sur rendez-vous dans notre espace boutique, véritable
              cabinet de curiosités botaniques.
            </p>
          </div>
          <div>
            <div
              style={{
                background:
                  "linear-gradient(135deg,rgba(122,140,110,0.12),rgba(201,133,122,0.08))",
                border: "1px solid rgba(184,150,90,0.2)",
                padding: "3rem",
                marginBottom: "2rem",
              }}
            >
              <div
                className="footer-col-title"
                style={{ marginBottom: "1.5rem" }}
              >
                Nos valeurs
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "var(--gold)",
                      fontSize: "1.2rem",
                      marginTop: "2px",
                    }}
                  >
                    ✦
                  </span>
                  <div>
                    <strong
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: "var(--bark)",
                        display: "block",
                        marginBottom: "0.2rem",
                      }}
                    >
                      Authenticité
                    </strong>
                    <span
                      style={{ fontSize: "0.82rem", color: "var(--bark-l)" }}
                    >
                      Chaque pièce est unique, créée à la main dans notre
                      atelier.
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "var(--rose)",
                      fontSize: "1.2rem",
                      marginTop: "2px",
                    }}
                  >
                    ✦
                  </span>
                  <div>
                    <strong
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: "var(--bark)",
                        display: "block",
                        marginBottom: "0.2rem",
                      }}
                    >
                      Durabilité
                    </strong>
                    <span
                      style={{ fontSize: "0.82rem", color: "var(--bark-l)" }}
                    >
                      Nous privilégions les plantes locales et les pratiques
                      respectueuses.
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "var(--sage)",
                      fontSize: "1.2rem",
                      marginTop: "2px",
                    }}
                  >
                    ✦
                  </span>
                  <div>
                    <strong
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: "var(--bark)",
                        display: "block",
                        marginBottom: "0.2rem",
                      }}
                    >
                      Excellence
                    </strong>
                    <span
                      style={{ fontSize: "0.82rem", color: "var(--bark-l)" }}
                    >
                      Un soin extrême apporté à chaque détail, du choix des
                      essences à la présentation finale.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div>
                <span className="stat-num">15</span>
                <span className="stat-label">Ans d'expérience</span>
              </div>
              <div>
                <span className="stat-num">240+</span>
                <span className="stat-label">Espèces</span>
              </div>
              <div>
                <span className="stat-num">1.2k+</span>
                <span className="stat-label">Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
