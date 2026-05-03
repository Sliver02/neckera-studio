"use client";

import { buttonVariants } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  imagePlaceholder: string;
  steamUrl: string;
}

export default function GameCard({ title, description, imagePlaceholder, steamUrl }: GameCardProps) {
  return (
    <div className="group relative grid md:grid-cols-2 gap-8 items-center bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
      <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-800 flex items-center justify-center text-zinc-500 font-medium">
        {imagePlaceholder}
      </div>
      
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{title}</h3>
        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>
        <div className="pt-2">
          <a
            href={steamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full px-6 font-bold bg-zinc-100 text-zinc-950 hover:bg-white inline-flex items-center gap-2"
            )}
          >
            WISHLIST ON STEAM <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
