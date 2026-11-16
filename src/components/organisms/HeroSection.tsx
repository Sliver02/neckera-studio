"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { SiSteam } from "react-icons/si";
import { SOCIAL_LINKS, STEAM_URL } from "@/lib/socialLinks";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// background_1 = bottom-most (sky/far bg, moves most) → background_5 = foreground (stays still)
const PARALLAX_LAYERS = [
  { src: "/hero_background/background_1.webp", speed: 0.65, zIndex: 1 },
  { src: "/hero_background/background_2.webp", speed: 0.45, zIndex: 2 },
  { src: "/hero_background/background_3.webp", speed: 0.28, zIndex: 3 },
  { src: "/hero_background/background_4.webp", speed: 0.12, zIndex: 4 },
  { src: "/hero_background/background_5.webp", speed: 0, zIndex: 5 },
] as const;

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const layersRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // No pinning — section scrolls normally.
      // fromTo ensures y:0 at scroll start (section top == viewport top).
      // Layers drift downward (positive Y) as user scrolls down — background moves most.
      // Layer 5 speed=0 stays put relative to the section.
      // Reduced motion: no parallax, the layers rest as one still painting.
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        layersRef.current.forEach((layer, i) => {
          if (!layer) return;
          if (PARALLAX_LAYERS[i].speed === 0) return;
          gsap.fromTo(
            layer,
            { y: 0 },
            {
              y: () => window.innerHeight * PARALLAX_LAYERS[i].speed,
              ease: "none",
              scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative h-screen max-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Layers */}
      {PARALLAX_LAYERS.map((layer, i) => (
        <div
          key={i}
          ref={(el) => {
            layersRef.current[i] = el;
          }}
          className="absolute inset-0 will-change-transform pointer-events-none"
          style={{ zIndex: layer.zIndex }}
        >
          <Image
            src={layer.src}
            alt=""
            fill
            preload
            loading="eager"
            sizes="100vw"
            quality={85}
            className="object-cover object-bottom select-none"
            draggable={false}
          />
        </div>
      ))}

      {/* Hero Content */}
      <div
        className="relative flex flex-col items-center gap-6 text-center px-4 -mt-16"
        style={{ zIndex: 10 }}
      >
        {/* Logo is the page's h1 (its alt text is the heading) */}
        <h1>
          <Image
            src="/neckera_logo.svg"
            alt="Neckera Studio"
            width={420}
            height={280}
            preload
            loading="eager"
            unoptimized
            className="w-60 md:w-80 lg:w-96 h-auto"
          />
        </h1>

        <p className="max-w-md text-lg md:text-xl leading-snug text-white [text-shadow:0_1px_12px_rgb(0_0_0/0.8)]">
          Three-person indie studio from Italy, now making Faulty Loops, a
          puzzle game driven by music.
        </p>

        <a
          href={STEAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-accent-foreground shadow-[0_4px_20px_rgb(0_0_0/0.4)] transition-[filter,scale] duration-200 hover:brightness-110 active:scale-[0.97]"
        >
          <SiSteam className="size-5" /> Wishlist Faulty Loops
        </a>

        {/* Social link-tree */}
        <div className="flex gap-4">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full border border-white/30 bg-black/35 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-white/15 transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
