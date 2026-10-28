import { SOCIAL_LINKS } from "@/lib/socialLinks";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Mail, Newspaper } from "lucide-react";
import { SiItchdotio, SiSteam } from "react-icons/si";

export const metadata: Metadata = {
  title: "Faulty Loops | Neckera Studio",
  description:
    "A set-and-play logic puzzle game driven by music. Wishlist now on Steam.",
};

// Rounded, chunky sans closer to the game's UI than the site's serifs
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
});

// Game palette: logo slate + blue, enemy red
const GAME_COLORS = {
  "--background": "#272a35",
  "--foreground": "#ffffff",
  "--muted-foreground": "#b8bdd6",
  "--accent": "#7593f8",
} as React.CSSProperties;
const ENEMY_RED = "#fe5977";

const STEAM_URL = "https://store.steampowered.com/app/5359830/Faulty_Loops/";
const ITCH_URL = "https://msilvestro.itch.io/faulty-loops";
const TRAILER_ID = "UktBDyxDyEY";
const PRESS_EMAIL = "press@neckerastudio.com";

const SCREENSHOTS = Array.from(
  { length: 8 },
  (_, i) => `/faulty_loops/screenshot_${i + 1}.jpg`,
);

const pill =
  "inline-flex items-center gap-3 h-14 px-7 rounded-full text-2xl font-semibold text-white transition-transform hover:-translate-y-0.5";

export default function FaultyLoopsPage() {
  return (
    <main
      className={`${fredoka.variable} font-display bg-background text-foreground text-2xl text-center min-h-screen`}
      style={GAME_COLORS}
    >
      {/* Hero: blurred gameplay loop behind the logo, fading into the page */}
      <header className="relative overflow-hidden px-6 pt-16 pb-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-25 blur-sm scale-110"
        >
          {/* Steam's MP4s are HEVC, so WebM (VP9) goes first for Chrome/Firefox */}
          <source src="/faulty_loops/clip_intro.webm" type="video/webm" />
          <source src="/faulty_loops/clip_intro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-background" />

        <div className="relative flex flex-col items-center gap-6">
          <h1>
            <Image
              src="/faulty_loops/logo.webp"
              alt="Faulty Loops"
              width={1641}
              height={1450}
              loading="eager"
              sizes="(min-width: 768px) 576px, 320px"
              className="w-80 md:w-xl h-auto"
            />
          </h1>
          <p className="text-3xl leading-snug">
            A set-and-play logic puzzle game
            <br />
            driven by music.
            <br />
            <strong>Coming soon</strong>: wishlist and follow the project!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={STEAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pill} bg-accent`}
            >
              <SiSteam /> Steam
            </a>
            <a
              href={ITCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={pill}
              style={{ backgroundColor: ENEMY_RED }}
            >
              <SiItchdotio /> itch.io
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 pb-20 flex flex-col items-center gap-12">
        <div className="relative w-full aspect-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${TRAILER_ID}`}
            title="Faulty Loops trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <div className="max-w-3xl space-y-6 leading-relaxed text-muted-foreground">
          <p className="text-3xl font-semibold text-foreground">
            The sacred tapes have been corrupted! Help the Harmony Monks
            banish the HeretiChords and restore the Sacred Harmony.
          </p>
          <p>
            Every puzzle is a grid filled with enemies and special tiles.
            Position your Harmony Monks, press play, and watch them spring
            into action as the playhead sweeps across the board, pushing and
            destroying every HeretiChord in a single loop.
          </p>
          <p>
            Each solved loop brings new instruments into the song, one step
            closer to restoring the tape. Eight tapes, each with its own
            musical genre.
          </p>
          <p>
            A small set of mechanics leads to surprisingly deep puzzles. No
            timing, no dexterity, no luck: just you, the grid and a plan.
            Stuck? An extra yellow unit can help you through, and the harder
            version is always waiting when you want it.
          </p>
        </div>

        <p className="leading-snug [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-accent">
          A new videogame by <Link href="/">Neckera Studio</Link>.
          <br />
          Please enjoy our <a href="#screenshots">screenshots</a>, or play it
          on{" "}
          <a href={ITCH_URL} target="_blank" rel="noopener noreferrer">
            itch.io
          </a>
          .
        </p>

        <div className="flex flex-col items-center gap-4">
          <Link
            href="/faulty-loops/presskit"
            className={cn(pill, "bg-foreground text-background")}
          >
            <Newspaper /> Press Kit
          </Link>
          <a
            href={`mailto:${PRESS_EMAIL}`}
            className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-accent"
          >
            <Mail className="size-5" /> {PRESS_EMAIL}
          </a>
        </div>

        {/* Follow, in place of Big Walk's mailing list */}
        <div className="flex gap-4">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="size-14 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Icon className="size-6" />
            </a>
          ))}
        </div>

        <div id="screenshots" className="grid sm:grid-cols-2 gap-4 w-full">
          {SCREENSHOTS.map((src, i) => (
            <a
              key={src}
              href={src}
              target="_blank"
              className="relative aspect-video overflow-hidden ring-accent hover:ring-4 transition-shadow"
            >
              <Image
                src={src}
                alt={`Faulty Loops screenshot ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </a>
          ))}
        </div>

        <Link href="/" aria-label="Neckera Studio">
          <Image
            src="/neckera_logo.svg"
            alt="Neckera Studio"
            width={204}
            height={260}
            unoptimized
            className="w-20 h-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </Link>
      </div>
    </main>
  );
}
