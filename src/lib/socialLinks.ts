import { SiInstagram, SiItchdotio, SiYoutube } from "react-icons/si";

export const SOCIAL_LINKS = [
  // { icon: SiX, label: "X / Twitter", href: "#" },
  { icon: SiItchdotio, label: "Itch.io", href: "https://msilvestro.itch.io/" },
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/neckerastudio/",
  },
  {
    icon: SiYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCOxNlvuczco7qpeSlP-vTDA",
  },
  // { icon: FaTiktok, label: "TikTok", href: "#" },
] as const;
