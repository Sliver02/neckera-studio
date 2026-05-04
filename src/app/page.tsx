import HeroSection from "@/components/organisms/HeroSection";
import GameCard from "@/components/molecules/GameCard";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />

      {/* About Section */}
      <section className="relative z-50 py-32 px-4 max-w-4xl mx-auto text-center">
        <h2
          className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-6"
          style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
        >
          About the Team
        </h2>
        <p className="text-2xl md:text-3xl font-light text-foreground leading-snug">
          We are a small independent collective of developers and artists,
          dedicated to crafting atmospheric and mechanically rich experiences
          that stick with you long after the credits roll.
        </p>
      </section>

      {/* Games Section */}
      <section className="relative z-50 py-32 px-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-8 mb-16">
          <h2
            className="text-3xl text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Current Projects
          </h2>
          <div className="h-px bg-border grow" />
        </div>

        <div className="grid gap-12">
          <GameCard
            title="Faulty loops"
            description="Help the charming Harmony Monks to restore the holy music loops in this unit placement puzzle game!"
            imageUrl="/faulty_loops_thumbnail.jpg"
            itchUrl="https://msilvestro.itch.io/faulty-loops"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-50 py-16 px-4 border-t border-border bg-card/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div
            className="text-muted-foreground font-bold tracking-tighter"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            NECKERA STUDIO &copy; 2026
          </div>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">
              PRESS KIT
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              CONTACT
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              TERMS
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
