export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="9" fill="var(--orange)" />
      <circle cx="20" cy="20" r="10" fill="none" stroke="var(--navy)" strokeWidth="3" />
      <circle cx="20" cy="20" r="3.5" fill="var(--navy)" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <rect key={a} x="18.5" y="4" width="3" height="5" fill="var(--navy)" transform={`rotate(${a} 20 20)`} />
      ))}
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
