export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 69" className={className} role="img" aria-label="Deepak Engineering Co. logo">
      <defs>
        <linearGradient id="de-logo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--logo-red-light)" />
          <stop offset="1" stopColor="var(--logo-red)" />
        </linearGradient>
      </defs>
      <polygon points="50,2 98,34.5 50,67 2,34.5" fill="url(#de-logo)" stroke="var(--logo-red-light)" strokeWidth="2" />
      <text x="50" y="35" textAnchor="middle" dominantBaseline="central" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="24" fill="var(--primary-foreground)">DE</text>
    </svg>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`font-mono text-xs font-medium uppercase tracking-[0.2em] ${light ? "text-orange" : "text-orange"}`}>
      {children}
    </p>
  );
}

export function SectionHead({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="reveal mb-12 max-w-3xl">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-3 text-3xl font-bold leading-tight md:text-5xl ${light ? "text-primary-foreground" : "text-navy"}`}>
        {title}
      </h2>
    </div>
  );
}
