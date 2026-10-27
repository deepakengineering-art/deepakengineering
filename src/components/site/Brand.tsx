import logo from "@/assets/logo-iso.jpg";

export function Logo({ className = "" }: { className?: string }) {
  return <img src={logo} alt="TUV Austria ISO 9001 certification mark" className={`rounded-md bg-background object-contain ${className}`} />;
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
