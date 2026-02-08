import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katrin van Sol | Deine persönliche Beratung",
  description: "Finde heraus, was deine Seele und dein Körper gerade brauchen. Hypnose & Transformation für ein erfülltes Leben.",
  keywords: "Hypnose, Hypnosetherapie, Transformation, Selbstliebe, Katrin van Sol, COPD, Schilddrüse, Magenband",
  openGraph: {
    title: "Katrin van Sol | Deine persönliche Beratung",
    description: "Finde heraus, was deine Seele und dein Körper gerade brauchen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
