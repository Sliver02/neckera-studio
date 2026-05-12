"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  const container = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!bgRef.current) return;
      gsap.fromTo(
        bgRef.current,
        { y: 0 },
        {
          y: () => window.innerHeight * 0.3,
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
    },
    { scope: container },
  );

  return (
    <header
      ref={container}
      className="relative w-full overflow-hidden"
      style={{ height: "500px" }}
    >
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
        <Image
          src="/hero_background/background.png"
          alt=""
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-top select-none scale-110"
          draggable={false}
        />
      </div>
      {/* Blur + dark overlay for readability */}
      <div className="absolute inset-0 z-[1] backdrop-blur-sm bg-background/30" />

      {/* Content — pinned to bottom-left */}
      <div className="relative z-10 h-full flex flex-col justify-end max-w-6xl mx-auto w-full px-6 pb-10">
        {/* Back button */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 mb-8 text-sm font-semibold uppercase tracking-widest text-foreground/60 hover:text-accent transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>

        {/* One-liner description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Accent separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent z-10" />
    </header>
  );
}
