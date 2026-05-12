import type { Metadata } from "next";
import { Fraunces, Lora } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/templates/SmoothScrollProvider";
import Footer from "@/components/organisms/Footer";

// Display / hero: soft, vintage-organic, high contrast at large sizes
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

// Body + headings: warm, classic, highly legible serif
const lora = Lora({
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neckera Studio | Indie Game Developer",
  description: "Crafting immersive indie game experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${lora.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
