import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHead } from "./Brand";
import p1 from "@/assets/part-01.jpg";
import p2 from "@/assets/part-02.jpg";
import p3 from "@/assets/part-03.jpg";
import p4 from "@/assets/part-04.jpg";
import p5 from "@/assets/part-05.jpg";
import p6 from "@/assets/part-06.jpg";
import p7 from "@/assets/part-07.jpg";
import p8 from "@/assets/part-08.jpg";

const PARTS = [
  { src: p1, alt: "Machined cast iron compressor cylinder" },
  { src: p2, alt: "Machined forged gear blanks and hubs" },
  { src: p3, alt: "Machined cast iron pump bearing housing" },
  { src: p4, alt: "Flange couplings and sleeves in multiple sizes" },
  { src: p5, alt: "Precision machined compressor pistons" },
  { src: p6, alt: "Precision machined hypoid gear" },
  { src: p7, alt: "Machined compressor bearing cover" },
  { src: p8, alt: "Stainless steel pharmaceutical machinery components" },
];

export function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const n = PARTS.length;
  const step = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [idx, step]);

  return (
    <section id="gallery" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHead eyebrow="04 / Machined Parts" title="Parts We Have Machined" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PARTS.map((p, i) => (
            <button key={i} onClick={() => setIdx(i)} className="reveal group overflow-hidden rounded-xl border border-border bg-background focus-visible:outline-2 focus-visible:outline-orange" aria-label={`Open image: ${p.alt}`}>
              <img src={p.src} alt={p.alt} loading="lazy" width={944} height={704} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </div>
      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 p-4" onClick={() => setIdx(null)}>
          <button autoFocus className="absolute right-4 top-4 rounded-full p-2 text-primary-foreground hover:text-orange" onClick={() => setIdx(null)} aria-label="Close"><X className="h-7 w-7" /></button>
          <button className="absolute left-2 rounded-full p-3 text-primary-foreground hover:text-orange md:left-6" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image"><ChevronLeft className="h-8 w-8" /></button>
          <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={PARTS[idx].src} alt={PARTS[idx].alt} className="max-h-[80vh] w-auto rounded-lg" />
            <figcaption className="mt-3 text-center font-mono text-xs text-primary-foreground/70">{String(idx + 1).padStart(2, "0")} / {String(n).padStart(2, "0")} — {PARTS[idx].alt}</figcaption>
          </figure>
          <button className="absolute right-2 rounded-full p-3 text-primary-foreground hover:text-orange md:right-6" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image"><ChevronRight className="h-8 w-8" /></button>
        </div>
      )}
    </section>
  );
}
