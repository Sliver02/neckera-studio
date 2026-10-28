"use client";

// Smooth-scrolls in-page #hash links with native scrollIntoView (respects scroll-margin)
export default function SmoothAnchorNav({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <nav
      className={className}
      onClick={(e) => {
        const hash = (e.target as HTMLElement)
          .closest("a[href^='#']")
          ?.getAttribute("href");
        const target = hash && document.querySelector(hash);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, "", hash);
      }}
    >
      {children}
    </nav>
  );
}
