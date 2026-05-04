import HeroSection from "@/components/organisms/HeroSection";
import GameCard from "@/components/molecules/GameCard";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />

      {/* About Section */}
      <section className="relative z-50 py-32 px-4 max-w-4xl mx-auto text-center">
        <h2
          className="text-accent text-md font-semibold uppercase tracking-[0.3em] mb-6"
          style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
        >
          About the Team
        </h2>
        <p className="text-2xl md:text-2xl font-light text-foreground leading-snug">
          Neckera Studio is a small indie team of three developers who met
          through game jams and kept working together!
          <br />
          <br />
          We develop experimental 2D games in Unity, often mixing genres and
          mechanics to explore unusual ideas while keeping scope tight. Over
          time, this approach has grown from quick prototypes into more
          structured projects.
        </p>
      </section>

      <section className="relative  px-4 max-w-4xl mx-auto text-center">
        <h2
          className="text-accent text-md font-semibold uppercase tracking-[0.3em] mb-6"
          style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
        >
          Why Neckera?
        </h2>
        <p className="text-2xl md:text-2xl font-light text-foreground leading-snug">
          The name comes from Neckera crispa, a type of moss. It reflects how we
          approach our work: growing steadily, staying grounded, and building
          things over time rather than rushing them.
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
