"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/atoms/Button";
import { SiX, SiInstagram, SiYoutube, SiGithub } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Each layer: background → foreground, increasing scroll speed & darkness
// These are placeholder CSS layers styled to mimic the Firewatch multi-depth parallax.
// Replace the `background` style with actual PNGs when assets are ready.
const PARALLAX_LAYERS = [
  // Layer 0 — sky / far background (slowest)
  {
    speed: 0.12,
    zIndex: 1,
    style: {
      background: "linear-gradient(to bottom, #0a1f0f 0%, #0d3020 40%, #163825 100%)",
    },
  },
  // Layer 1 — distant hills / treeline (slow)
  {
    speed: 0.28,
    zIndex: 2,
    style: {
      background:
        "radial-gradient(ellipse 130% 60% at 50% 100%, #0a2e18 0%, transparent 70%), linear-gradient(to bottom, transparent 50%, #0d2a16 100%)",
    },
  },
  // Layer 2 — mid forest (medium)
  {
    speed: 0.50,
    zIndex: 3,
    style: {
      background:
        "radial-gradient(ellipse 110% 50% at 50% 100%, #071a0d 0%, transparent 65%), linear-gradient(to bottom, transparent 55%, #071508 100%)",
    },
  },
  // Layer 3 — foreground trees silhouette (fastest)
  {
    speed: 0.78,
    zIndex: 4,
    style: {
      background:
        "radial-gradient(ellipse 140% 45% at 50% 108%, #040d07 0%, transparent 55%)",
    },
  },
] as const;

const SOCIAL_LINKS = [
  { icon: SiX,         label: "X / Twitter", href: "#" },
  { icon: SiInstagram, label: "Instagram",   href: "#" },
  { icon: SiYoutube,   label: "YouTube",     href: "#" },
  { icon: SiGithub,    label: "GitHub",      href: "#" },
] as const;

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const layersRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // Scroll parallax — each layer moves at its own speed along Y
      layersRef.current.forEach((layer, i) => {
        if (!layer) return;
        gsap.to(layer, {
          y: () => -(window.innerHeight * PARALLAX_LAYERS[i].speed),
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2, // 1.2s lag = smooth but still responsive
            invalidateOnRefresh: true,
          },
        });
      });

      // Mouse parallax — horizontal drift only (avoids Y conflict with scroll)
      const handleMouseMove = (e: MouseEvent) => {
        const xNorm = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        layersRef.current.forEach((layer, i) => {
          if (!layer) return;
          const strength = (i + 1) * 6;
          gsap.to(layer, {
            x: xNorm * strength,
            duration: 1.4,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Layers */}
      {PARALLAX_LAYERS.map((layer, i) => (
        <div
          key={i}
          ref={(el) => { layersRef.current[i] = el; }}
          className="absolute inset-0 will-change-transform pointer-events-none"
          style={{ zIndex: layer.zIndex }}
        >
          <div className="w-full h-full" style={layer.style} />
        </div>
      ))}

      {/* Luminous centre glow — forest floor light source */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 5,
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(201,165,90,0.05) 0%, rgba(142,196,160,0.03) 40%, transparent 70%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative flex flex-col items-center gap-8 text-center px-4" style={{ zIndex: 10 }}>
        {/* Logo placeholder */}
        <div className="w-32 h-32 rounded-full border border-[#8ec4a0]/20 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <span
            className="text-[#8ec4a0] text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            LOGO
          </span>
        </div>

        {/* Studio name */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl text-[#e3ded6] tracking-tight leading-none"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          Neckera
          <br />
          <span className="text-[#8ec4a0]">Studio</span>
        </h1>

        {/* Social link-tree */}
        <div className="flex gap-3 mt-2">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-11 h-11 rounded-full border border-[#8ec4a0]/15 bg-black/20 backdrop-blur-sm flex items-center justify-center text-[#e3ded6]/60 hover:text-[#8ec4a0] hover:border-[#8ec4a0]/40 hover:bg-[#8ec4a0]/8 transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom fade into page */}
      <div
        className="absolute bottom-0 left-0 w-full h-48 pointer-events-none"
        style={{
          zIndex: 15,
          background: "linear-gradient(to top, #06100c 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
