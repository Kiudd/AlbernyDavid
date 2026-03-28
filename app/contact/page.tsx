"use client";

import { useState } from "react";
import CustomCursor from "../../components/CustomCursor";
import Navigation from "../../components/Navigation";
import Notification from "../../components/Notification";

export default function Contact() {
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
    show: boolean;
  }>({
    message: "",
    type: "success",
    show: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotification({
      message: "✦ Message envoyé ! Nous vous répondrons sous 24h.",
      type: "success",
      show: true,
    });
    (e.target as HTMLFormElement).reset();
  };

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, show: false }));
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
      <section
        className="contact-section"
        style={{ minHeight: "100vh", paddingTop: "10rem" }}
      >
        <div className="contact-inner">
          <div className="contact-left">
            <div className="section-label">Écrivez-nous</div>
            <h1 className="section-title">
              Parlons de votre
              <br />
              <em>projet végétal</em>
            </h1>
            <p className="contact-tagline">
              Que ce soit pour une commande sur mesure, un conseil d'aménagement
              ou simplement pour en savoir plus sur nos créations — nous sommes
              là.
            </p>
            <div className="contact-info-item">
              <div className="contact-icon">✉</div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-val">
                  contact@AlbernyDavid.fr
                </div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">☎</div>
              <div>
                <div className="contact-detail-label">Téléphone</div>
                <div className="contact-detail-val">+33 4 78 00 00 00</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">◎</div>
              <div>
                <div className="contact-detail-label">Adresse</div>
                <div className="contact-detail-val">
                  12 Rue des Fleurs, 69001 Lyon
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Votre nom</label>
              <input type="text" placeholder="Jean Dupont" required />
            </div>
            <div className="form-field">
              <label>Adresse email</label>
              <input type="email" placeholder="jean@exemple.fr" required />
            </div>
            <div className="form-field">
              <label>Objet</label>
              <input type="text" placeholder="Commande personnalisée…" />
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea
                placeholder="Décrivez votre projet ou votre demande…"
                required
              ></textarea>
            </div>
            <button className="btn-send" type="submit">
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
