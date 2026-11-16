import type { Metadata } from "next";
import { Fraunces, Lora } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/templates/SmoothScrollProvider";

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
  // Absolute base for share images (opengraph-image) on every host
  metadataBase: new URL("https://neckerastudio.com"),
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
        {/* Footer lives in each route group's layout so it can take that section's theme */}
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
