"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Muted looping clip that holds its first frame under prefers-reduced-motion.
// `pausable` adds a play/pause toggle (WCAG 2.2.2: motion over 5s needs a stop).
export default function LoopVideo({
  pausable,
  label = "clip",
  ...props
}: React.ComponentProps<"video"> & { pausable?: boolean; label?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ref.current?.play().catch(() => {});
  }, []);

  const video = (
    <video
      ref={ref}
      muted
      loop
      playsInline
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      {...props}
    />
  );
  if (!pausable) return video;

  const Icon = playing ? Pause : Play;
  return (
    <div className="relative">
      {video}
      <button
        type="button"
        onClick={() => (playing ? ref.current?.pause() : ref.current?.play())}
        aria-label={`${playing ? "Pause" : "Play"} ${label}`}
        className="absolute right-2 bottom-2 grid size-11 place-items-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 active:scale-[0.97]"
      >
        <Icon className="size-5" />
      </button>
    </div>
  );
}
