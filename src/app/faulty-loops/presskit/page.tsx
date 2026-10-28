import SmoothAnchorNav from "@/components/molecules/SmoothAnchorNav";
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import Link from "next/link";
import { Globe, Mail } from "lucide-react";
import { SiInstagram, SiItchdotio, SiSteam } from "react-icons/si";

export const metadata: Metadata = {
  title: "Faulty Loops Press Kit | Neckera Studio",
  description:
    "Press kit for Faulty Loops: fact sheet, trailer, GIFs and screenshots.",
};

// Rounded display face, close to the in-game UI font
const fredoka = Fredoka({ subsets: ["latin"] });

const STEAM_URL = "https://store.steampowered.com/app/5359830/Faulty_Loops/";
const ITCH_URL = "https://msilvestro.itch.io/faulty-loops";
const TRAILER_ID = "UktBDyxDyEY";
const PRESS_EMAIL = "press@neckerastudio.com";

// Same pills as /faulty-loops: Steam in logo blue, itch in enemy red
const pill =
  "inline-flex items-center gap-3 h-14 px-7 rounded-full text-2xl font-semibold text-white transition-transform hover:-translate-y-0.5";
const links = [
  { icon: SiSteam, label: "Steam", href: STEAM_URL, color: "#7593f8" },
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

// Add entries as { src: "/faulty_loops/…", label: "…" } once assets are final
const gifs: { src: string; label: string }[] = [];
const screenshots: { src: string; label: string }[] = [];

export default function FaultyLoopsPressKitPage() {
  return (
    <main
      className={`${fredoka.className} min-h-screen bg-[#272a35] text-white text-xl [&_:is(h1,h2,h3)]:[font-family:inherit]`}
    >
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link href="/faulty-loops" className="text-lg text-white/60 hover:text-[#7593f8]">
          ← Faulty Loops
        </Link>

        <h1 className="mt-6 text-6xl font-bold text-[#7593f8]">
          Faulty Loops
        </h1>
        <p className="mt-1 text-3xl font-semibold">Press Kit</p>

        <SmoothAnchorNav className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-2xl text-[#7593f8]">
          <a href="#fact-sheet" className="hover:underline">Fact Sheet</a>
          <a href="#videos" className="hover:underline">Videos</a>
          <a href="#gifs" className="hover:underline">GIFs</a>
          <a href="#screenshots" className="hover:underline">Screenshots</a>
        </SmoothAnchorNav>

        <Section id="fact-sheet" title="Fact Sheet">
          <dl className="space-y-6">
            <Fact label="Title">Faulty Loops</Fact>
            <Fact label="Developer">Neckera Studio</Fact>
            <Fact label="Genre">Puzzle</Fact>
            <Fact label="Platforms">
              <ul>
                <li>
                  <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#7593f8] hover:underline">
                    Steam
                  </a>{" "}
                  (Windows, Mac, Linux)
                </li>
                <li>Nintendo Switch 2</li>
              </ul>
            </Fact>
            <Fact label="Release Window">
              <ul>
                <li>December (demo)</li>
                <li>March (release)</li>
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
                className="inline-flex items-center gap-2 text-[#7593f8] hover:underline"
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
          <h3 className="text-2xl font-semibold">Trailer</h3>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${TRAILER_ID}`}
            title="Faulty Loops trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="mt-3 w-full aspect-video rounded-lg"
          />
          <a
            href={`https://www.youtube.com/watch?v=${TRAILER_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[#7593f8] hover:underline"
          >
            Watch on YouTube
          </a>
        </Section>

        <Section id="gifs" title="Animated GIFs">
          <MediaList items={gifs} />
        </Section>

        <Section id="screenshots" title="Screenshots">
          <MediaList items={screenshots} />
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
      <h2 className="mb-8 pb-2 text-4xl font-bold border-b-2 border-[#7593f8]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-base font-semibold uppercase tracking-wider text-[#7593f8]">
        {label}
      </dt>
      <dd className="mt-1 text-white/85 leading-relaxed">{children}</dd>
    </div>
  );
}

function MediaList({ items }: { items: { src: string; label: string }[] }) {
  if (!items.length) return <p className="text-white/50">Coming soon.</p>;
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.src}>
          <a href={item.src} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element -- full-size press assets, served as-is */}
            <img src={item.src} alt={item.label} loading="lazy" className="w-full rounded-lg" />
          </a>
        </li>
      ))}
    </ul>
  );
}
