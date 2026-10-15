import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const iaMono = localFont({
  src: [
    {
      path: "../../public/fonts/ia-writer-mono-latin-400-normal.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ia-writer-mono-latin-700-normal.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ia-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JEOLAD",
  description: "Jesse Oluwapelumi Adesina. Engineering Notes & Works.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${iaMono.variable} font-mono antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
