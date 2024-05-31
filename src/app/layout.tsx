import type { Metadata } from "next";
import "./globals.css";
import { Flowbite } from "flowbite-react";

import localFont from "next/font/local";

const GothamBook = localFont({
  src: [
    {
      path: "./fonts/gothamBook.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const GothamMedium = localFont({
  src: [
    {
      path: "./fonts/gothamMedium.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const Gothambold = localFont({
  src: [
    {
      path: "./fonts/gothambold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const GothamBlack = localFont({
  src: [
    {
      path: "./fonts/gotham-Black.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const GothamHtfUltra = localFont({
  src: [
    {
      path: "./fonts/gotham-HTF-Ultra.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const SpantaranDemo = localFont({
  src: [
    {
      path: "./fonts/spantaran(DEMO).ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Residuum",
  description: "Plataforma de Gestão de Resíduos - Residuum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={GothamBook.className}>
        <Flowbite>{children}</Flowbite>
      </body>
    </html>
  );
}
