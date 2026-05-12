"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { SiInstagram, SiItchdotio, SiYoutube } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// background_1 = bottom-most (sky/far bg, moves most) → background_5 = foreground (stays still)
const PARALLAX_LAYERS = [
  { src: "/hero_background/background_1.webp", speed: 0.65, zIndex: 1 },
  { src: "/hero_background/background_2.webp", speed: 0.45, zIndex: 2 },
  { src: "/hero_background/background_3.webp", speed: 0.28, zIndex: 3 },
  { src: "/hero_background/background_4.webp", speed: 0.12, zIndex: 4 },
  { src: "/hero_background/background_5.webp", speed: 0, zIndex: 5 },
] as const;

const SOCIAL_LINKS = [
  // { icon: SiX, label: "X / Twitter", href: "#" },
  { icon: SiItchdotio, label: "Itch.io", href: "https://msilvestro.itch.io/" },
  { icon: SiInstagram, label: "Instagram", href: "#" },
  { icon: SiYoutube, label: "YouTube", href: "#" },
  // { icon: FaTiktok, label: "TikTok", href: "#" },
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
        className="relative flex flex-col items-center gap-8 text-center px-4 -mt-24"
        style={{ zIndex: 10 }}
      >
        {/* Logo */}
        <Image
          src="/neckera_logo.svg"
          alt="Neckera Studio"
          width={420}
          height={280}
          preload
          loading="eager"
          unoptimized
          className="w-72 md:w-96 lg:w-105 h-auto"
        />

        {/* Social link-tree */}
        <div className="flex gap-4 mt-2">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-14 h-14 rounded-full border border-white/30 bg-black/35 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-white/15 transition-all duration-300"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
