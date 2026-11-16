import Link from "next/link";

// Tokens only, so the game layout can re-theme it
const link = "py-3 hover:text-accent transition-colors";

export default function Footer() {
  return (
    <footer className="relative z-50 py-10 px-4 border-t border-border bg-card/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 text-muted-foreground">
        <Link href="/" className={`${link} font-display font-bold tracking-tighter`}>
          NECKERA STUDIO &copy; 2026
        </Link>
        <nav className="flex gap-8 text-sm font-medium">
          <Link href="/faulty-loops" className={link}>
            FAULTY LOOPS
          </Link>
          <Link href="/contact" className={link}>
            CONTACT
          </Link>
          <Link href="/terms" className={link}>
            TERMS
          </Link>
        </nav>
      </div>
    </footer>
  );
}
