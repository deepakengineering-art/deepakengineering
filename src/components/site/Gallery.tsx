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
import p9 from "@/assets/part-09.jpg";
import p10 from "@/assets/part-10.jpg";
import p11 from "@/assets/part-11.jpg";
import p12 from "@/assets/part-12.jpg";
import p13 from "@/assets/part-13.jpg";

const PARTS = [
  { src: p1, alt: "Threaded machined steel ring with bolt holes" },
  { src: p2, alt: "Machined cast cylinder liner" },
  { src: p3, alt: "Machined aluminium bracket housing" },
  { src: p4, alt: "Precision drilled and slotted aluminium plate" },
  { src: p5, alt: "Machined manifold block with fittings" },
  { src: p6, alt: "Precision turned steel ring" },
  { src: p7, alt: "Machined aluminium valve block" },
  { src: p8, alt: "Multi-bore machined aluminium block" },
  { src: p9, alt: "Turned flanged steel ring" },
  { src: p10, alt: "Internally threaded machined steel flange" },
  { src: p11, alt: "Machined bearing housing with cage" },
  { src: p12, alt: "Machined cast iron pump bearing housing" },
  { src: p13, alt: "Laser-profiled and drilled steel plates" },
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
              <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </div>
      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 p-4" onClick={() => setIdx(null)}>
          <button autoFocus className="absolute right-4 top-4 rounded-full p-2 text-primary-foreground hover:text-orange" onClick={() => setIdx(null)} aria-label="Close"><X className="h-7 w-7" /></button>
          <button className="absolute left-2 rounded-full p-3 text-primary-foreground hover:text-orange md:left-6" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image"><ChevronLeft className="h-8 w-8" /></button>
          <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={PARTS[idx]!.src} alt={PARTS[idx]!.alt} className="max-h-[80vh] w-auto rounded-lg" />
            <figcaption className="mt-3 text-center font-mono text-xs text-primary-foreground/70">{String(idx + 1).padStart(2, "0")} / {String(n).padStart(2, "0")} — {PARTS[idx]!.alt}</figcaption>
          </figure>
          <button className="absolute right-2 rounded-full p-3 text-primary-foreground hover:text-orange md:right-6" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image"><ChevronRight className="h-8 w-8" /></button>
        </div>
      )}
    </section>
  );
}
