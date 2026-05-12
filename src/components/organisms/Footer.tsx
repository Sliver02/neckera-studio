import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-50 py-16 px-4 border-t border-border bg-card/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div
          className="text-muted-foreground font-bold tracking-tighter"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          NECKERA STUDIO &copy; 2026
        </div>
        <div className="flex gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/contact" className="hover:text-accent transition-colors">
            CONTACT
          </Link>
          <Link href="/terms" className="hover:text-accent transition-colors">
            TERMS
          </Link>
        </div>
      </div>
    </footer>
  );
}
