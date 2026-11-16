import LoopVideo from "@/components/molecules/LoopVideo";
import SmoothAnchorNav from "@/components/molecules/SmoothAnchorNav";
import { ITCH_URL, PRESS_EMAIL, STEAM_URL } from "@/lib/socialLinks";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, Globe, Mail } from "lucide-react";
import { SiInstagram, SiItchdotio, SiSteam } from "react-icons/si";

export const metadata: Metadata = {
  title: "Faulty Loops Press Kit | Neckera Studio",
  description:
    "Press kit for Faulty Loops: fact sheet, trailer, GIFs, screenshots and logos.",
};

// Font and palette come from ../layout.tsx
const TRAILERS = [
  { id: "U_lDqOTNLLk", title: "Gameplay trailer" },
  { id: "gMQUcin6yfc", title: "Cinematic trailer" },
];

// Same pills as /faulty-loops: Steam in logo blue, itch in enemy red
const pill =
  "inline-flex items-center gap-3 h-14 px-7 rounded-full text-2xl font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.97]";
const links = [
  { icon: SiSteam, label: "Steam", href: STEAM_URL, color: "var(--accent)" },
  { icon: SiItchdotio, label: "itch.io", href: ITCH_URL, color: "#fe5977" },
  { icon: SiInstagram, label: "Instagram", href: "https://www.instagram.com/neckerastudio/", color: "#ffffff1a" },
  { icon: Globe, label: "Official website", href: "/faulty-loops", color: "#ffffff1a" },
];

const features = [
  ["32 Handcrafted Levels", "Around 1–4 hours of gameplay, depending on your puzzle-solving skills."],
  ["8 Tapes to Restore", "Each featuring a different musical genre."],
  ["Intricate Unit Interactions", "Combine different unit abilities to discover clever solutions."],
  ["No Timing or Dexterity Required", ""],
  ["No Elements of Chance", ""],
  ["Plan, Then Play", "Position your monks, press play, and watch your strategy unfold."],
  ["Flexible Controls", "Play with keyboard, gamepad, or mouse."],
];

// WebM loops stand in for GIFs: same motion at a fraction of the size
const gifs = ["place", "play", "polaroid", "tapes"].map((name) => ({
  src: `/faulty_loops/presskit/clip_${name}.webm`,
  label: `Faulty Loops ${name} clip`,
}));
// Steam store order, at original upload resolution
const screenshots = Array.from({ length: 12 }, (_, i) => ({
  src: `/faulty_loops/presskit/screenshot_${i + 1}.jpg`,
  label: `Faulty Loops screenshot ${i + 1}`,
}));
const logos = [
  { href: "/faulty_loops/logo.webp", label: "Faulty Loops logo (WebP)" },
  { href: "/faulty_loops/logo.png", label: "Faulty Loops logo (PNG)" },
  { href: "/neckera_logo.svg", label: "Neckera Studio logo (SVG)" },
  { href: "/neckera_logo.png", label: "Neckera Studio logo (PNG)" },
];

export default function FaultyLoopsPressKitPage() {
  return (
    <main className="min-h-screen text-xl">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link href="/faulty-loops" className="py-2 text-lg text-foreground/60 hover:text-accent">
          ← Faulty Loops
        </Link>

        <h1 className="mt-6 text-6xl font-bold text-accent">
          Faulty Loops
        </h1>
        <p className="mt-1 text-3xl font-semibold">Press Kit</p>

        <SmoothAnchorNav className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-2xl text-accent">
          <a href="#fact-sheet" className="hover:underline">Fact Sheet</a>
          <a href="#videos" className="hover:underline">Videos</a>
          <a href="#gifs" className="hover:underline">GIFs</a>
          <a href="#screenshots" className="hover:underline">Screenshots</a>
          <a href="#logos" className="hover:underline">Logos</a>
        </SmoothAnchorNav>

        <Section id="fact-sheet" title="Fact Sheet">
          <dl className="space-y-6">
            <Fact label="Title">Faulty Loops</Fact>
            <Fact label="Developer">Neckera Studio</Fact>
            <Fact label="Genre">Puzzle</Fact>
            <Fact label="Platforms">
              <ul>
                <li>
                  <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Steam
                  </a>{" "}
                  (Windows, Mac, Linux)
                </li>
                <li>Nintendo Switch 2</li>
              </ul>
            </Fact>
            <Fact label="Release Window">
              <ul>
                <li>December 2026 (demo)</li>
                <li>March 2027 (release)</li>
              </ul>
            </Fact>
            <Fact label="Tagline">
              Faulty Loops is a music-themed setup-and-play puzzle game.
              Arrange your Harmony Monks on the grid, press play, and watch
              them spring into action as the playhead triggers them. Destroy
              every HeretiChord in a single sweep to restore the corrupted
              tape!
            </Fact>
            <Fact label="Description">
              <div className="space-y-4">
                <p>
                  The sacred tapes have been corrupted! Help the Harmony Monks
                  banish the HeretiChords and restore the Sacred Harmony.
                </p>
                <p>
                  Every puzzle takes place on a grid filled with enemies and
                  special tiles. Your task is to position your Harmony Monks so
                  that, when activated by the playhead, they interact with the
                  board to push and destroy the HeretiChords. Combine unit
                  abilities, make use of the environment, and figure out how
                  everything fits together.
                </p>
                <p>
                  Find the perfect arrangement to clear each loop, press Play,
                  and watch your strategy unfold! Every time you solve a loop,
                  new instruments join the current song, bringing the
                  corrupted tape one step closer to completion. Each tape
                  features a different musical genre.
                </p>
                <p>
                  Faulty Loops features a simple set of mechanics that can lead
                  to surprisingly challenging and satisfying puzzles.
                  Experiment with intricate unit interactions, discover clever
                  combinations, and find the perfect arrangement to clear each
                  loop.
                </p>
                <p>
                  Stuck on a puzzle? You can use an extra yellow unit to help
                  you overcome the challenge. And if you&apos;d rather take on
                  the original challenge, you can always return to the
                  level&apos;s more difficult version later.
                </p>
              </div>
            </Fact>
            <Fact label="Features">
              <ul className="list-disc pl-5 space-y-2">
                {features.map(([name, text]) => (
                  <li key={name}>
                    <span className="font-semibold">{name}</span>
                    {text && ` — ${text}`}
                  </li>
                ))}
              </ul>
            </Fact>
            <Fact label="About Neckera Studio">
              Neckera Studio is a small indie team of three developers from
              Italy. Our goal is to create games that deliver fresh, original
              experiences that you won&apos;t find anywhere else.
            </Fact>
            <Fact label="Press Contact">
              <a
                href={`mailto:${PRESS_EMAIL}`}
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                <Mail className="size-5" /> {PRESS_EMAIL}
              </a>
            </Fact>
            <Fact label="Links">
              <div className="mt-2 flex flex-wrap gap-3">
                {links.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pill}
                    style={{ backgroundColor: color }}
                  >
                    <Icon /> {label}
                  </a>
                ))}
              </div>
            </Fact>
          </dl>
        </Section>

        <Section id="videos" title="Videos">
          <div className="space-y-12">
            {TRAILERS.map(({ id, title }) => (
              <div key={id}>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title={`Faulty Loops ${title.toLowerCase()}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="mt-3 w-full aspect-video rounded-lg"
                />
                <a
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-accent hover:underline"
                >
                  Watch on YouTube
                </a>
              </div>
            ))}
          </div>
        </Section>

        <Section id="gifs" title="Animated GIFs">
          <MediaList items={gifs} />
        </Section>

        <Section id="screenshots" title="Screenshots">
          <MediaList items={screenshots} />
        </Section>

        <Section id="logos" title="Logos">
          <ul className="space-y-2">
            {logos.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  download
                  className="inline-flex items-center gap-2 py-1 text-accent hover:underline"
                >
                  <Download className="size-5" /> {label}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-8">
      <h2 className="mb-8 pb-2 text-4xl font-bold border-b-2 border-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-base font-semibold uppercase tracking-wider text-accent">
        {label}
      </dt>
      <dd className="mt-1 text-foreground/85 leading-relaxed">{children}</dd>
    </div>
  );
}

function MediaList({ items }: { items: { src: string; label: string }[] }) {
  if (!items.length) return <p className="text-foreground/60">Coming soon.</p>;
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.src}>
          {item.src.endsWith(".webm") ? (
            <>
              {/* A toggle can't nest inside a link, so clips get a download link instead */}
              <LoopVideo
                pausable
                label={item.label}
                src={item.src}
                aria-label={item.label}
                className="w-full rounded-lg"
              />
              <a
                href={item.src}
                download
                className="mt-1 inline-flex items-center gap-2 py-1 text-base text-accent hover:underline"
              >
                <Download className="size-4" /> WebM
              </a>
            </>
          ) : (
            // Link serves the full-size file as-is; some screenshots are 8000px, so the preview is resized
            <a href={item.src} target="_blank" rel="noopener noreferrer">
              <Image
                src={item.src}
                alt={item.label}
                width={1920}
                height={1080}
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                className="w-full h-auto rounded-lg"
              />
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
