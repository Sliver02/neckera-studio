import { buttonVariants } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { SiSteam } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  steamUrl?: string;
  itchUrl?: string;
  pressKitUrl?: string;
  href?: string;
}

const pill = "rounded-full px-6 h-10 font-semibold inline-flex items-center gap-2 active:scale-[0.97]";

export default function GameCard({
  title,
  description,
  imageUrl,
  steamUrl,
  itchUrl,
  pressKitUrl,
  href,
}: GameCardProps) {
  return (
    <div className="group relative grid md:grid-cols-2 gap-8 items-center bg-card p-6 rounded-2xl border border-border hover:border-accent/30 transition-colors">
      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
        {/* Gameplay, not the title screen: the card has to sell the game */}
        <Image
          src={imageUrl}
          alt={`${title} gameplay`}
          fill
          sizes="(min-width: 1152px) 528px, (min-width: 768px) 45vw, 100vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.23,1,0.32,1)] motion-safe:group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">
          {/* Stretched link: ::after covers the whole card, buttons sit above it */}
          {href ? (
            <Link
              href={href}
              className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-ring"
            >
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
                pill,
                "bg-foreground text-background hover:bg-foreground/90",
              )}
            >
              <SiSteam /> Wishlist on Steam
            </a>
          )}
          {itchUrl && (
            <a
              href={itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), pill)}
            >
              Play the demo <ExternalLink />
            </a>
          )}
          {pressKitUrl && (
            <Link
              href={pressKitUrl}
              className={cn(buttonVariants({ variant: "outline" }), pill)}
            >
              Press kit
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
