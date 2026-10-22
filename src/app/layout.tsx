import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "../styles/globals.css";

const sen = Sen({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sen"
});

export const metadata: Metadata = {
  title: "Jesse Adesina",
  description: "Jesse Oluwapelumi Adesina. Engineering Notes & Works.",
  icons: {
    icon: "/images/cpu.png",
    apple: "/images/cpu.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${sen.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
