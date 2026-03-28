import type { Metadata } from "next";
import "../styles/globals.css";
import PageTransition from "../components/PageTransition";
import "../utils/performance";

export const metadata: Metadata = {
  title: "AlbernyDavid — Art Botanique & Décoration",
  description: "Des créations végétales d'exception, sculptées avec passion et délicatesse.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600&family=Jost:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
