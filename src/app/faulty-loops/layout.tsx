import Footer from "@/components/organisms/Footer";
import { Fredoka } from "next/font/google";

// Rounded, chunky sans closer to the game's UI than the site's serifs
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
});

// Game palette: logo slate + blue. Set here so the footer wears it too.
const GAME_COLORS = {
  "--background": "#272a35",
  "--foreground": "#ffffff",
  "--card": "#1f2129",
  "--muted-foreground": "#b8bdd6",
  "--accent": "#7593f8",
  "--border": "rgb(117 147 248 / 0.2)",
  "--ring": "#7593f8",
} as React.CSSProperties;

export default function FaultyLoopsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${fredoka.variable} font-display flex grow flex-col bg-background text-foreground`}
      style={GAME_COLORS}
    >
      {children}
      <Footer />
    </div>
  );
}
