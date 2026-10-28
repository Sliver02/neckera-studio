"use client";

import { buttonVariants } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  title: string;
  description: string;
  imagePlaceholder?: string;
  imageUrl?: string;
  steamUrl?: string;
  itchUrl?: string;
  pressKitUrl?: string;
  href?: string;
}

export default function GameCard({
  title,
  description,
  imagePlaceholder,
  imageUrl,
  steamUrl,
  itchUrl,
  pressKitUrl,
  href,
}: GameCardProps) {
  return (
    <div className="group relative grid md:grid-cols-2 gap-8 items-center bg-card p-6 rounded-2xl border border-border hover:border-accent/30 transition-colors">
      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center text-muted-foreground font-medium">
        {imageUrl ? (
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        ) : (
          imagePlaceholder
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">
          {/* Stretched link: ::after covers the whole card, buttons sit above it */}
          {href ? (
            <Link href={href} className="after:absolute after:inset-0">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <div className="relative z-10 pt-2 flex flex-wrap gap-3">
          {steamUrl && (
            <a
              href={steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full px-6 font-bold bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2",
              )}
            >
              WISHLIST NOW <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {itchUrl && (
            <a
              href={itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full px-6 font-bold bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2",
              )}
            >
              PLAY ON ITCH.IO <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {pressKitUrl && (
            <Link
              href={pressKitUrl}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full px-6 font-bold",
              )}
            >
              PRESS KIT
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
