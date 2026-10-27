import { useState } from "react";
import { Menu, X, Cog, Wind, Car, Droplets, FileSearch, Code2, Wrench, ShieldCheck, Truck, Building2, Ruler, BadgeCheck, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo, SectionHead } from "./Brand";
import nh26 from "@/assets/machine-cnc-turning-nh26.jpg";
import kitamura from "@/assets/machine-vmc-kitamura.jpg";
import jober from "@/assets/machine-cnc-turning-jober-lm500.jpg";
import vmc1060 from "@/assets/machine-vmc-1060.jpg";

export const COMPANY = {
  name: "Deepak Engineering Co.",
  address: "Gat No 265, Shindewadi, Tal. Bhor, Dist. Pune, Maharashtra, 412205",
  gstn: "27AAAFD8515D2ZQ",
  udyog: "MH26B0055886",
  contact: "Mr. Deepak D. Kumbhar",
  email: "deepakkumbhar.engg@gmail.com",
  phone: "9850419267",
};

/* ---------- NAVBAR ---------- */
const NAV = [
  ["Home", "home"], ["About", "about"], ["How We Work", "process"], ["Products", "products"],
  ["Gallery", "gallery"], ["Facilities", "facilities"], ["Customers", "customers"], ["Contact", "contact"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6" aria-label="Main">
        <a href="#home" className="flex items-center gap-2.5">
          <Logo className="h-9 w-9" />
          <span className="font-display text-lg font-bold text-navy">Deepak Engineering Co.</span>
        </a>
        <ul className="hidden items-center gap-5 xl:flex">
          {NAV.map(([l, id]) => (
            <li key={id}><a href={`#${id}`} className="hover-line pb-1 text-sm font-medium text-foreground">{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button asChild variant="cta" className="hidden sm:inline-flex"><a href="#contact">Get a Quote</a></Button>
          <button className="rounded-md p-2 text-navy xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-border bg-background px-4 py-3 xl:hidden">
          {NAV.map(([l, id]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2.5 font-medium text-foreground">{l}</a></li>
          ))}
          <li className="pt-2"><Button asChild variant="cta" className="w-full"><a href="#contact" onClick={() => setOpen(false)}>Get a Quote</a></Button></li>
        </ul>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
const STATS = ["ISO 9001:2015", "4 CNC Machines", "CAD-CAM Capable", "Pune, Maharashtra"];

export function Hero() {
  return (
    <section id="home" className="tech-grid relative overflow-hidden bg-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 md:px-6 md:pb-20 md:pt-32">
        <p className="font-mono text-xs tracking-[0.25em] text-orange">ISO 9001:2015 CERTIFIED</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] md:text-7xl">
          Precision Components, From Drawing to Delivery
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
          CNC machining of compressor, pump, transmission and auto components, built exactly to your requirement.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg"><a href="#contact">Get a Quote</a></Button>
          <Button asChild variant="outlineLight" size="lg"><a href="#facilities">Our Capabilities</a></Button>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 bg-navy-deep/60">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {STATS.map((s) => (
            <li key={s} className="border-primary-foreground/15 px-4 py-5 text-center font-mono text-xs uppercase tracking-wider text-primary-foreground/85 md:border-l md:first:border-l-0">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
const DETAILS = [
  ["Type of Organization", "Partnership Firm"],
  ["Registered Under", "Partnership Act 1932"],
  ["GSTN", COMPANY.gstn],
  ["Udyog Aadhar No", COMPANY.udyog],
  ["QMS", "ISO 9001:2015 (TUV Austria)"],
];
const ABOUT_STATS = [
  { icon: Building2, v: "12,000 sq. ft.", l: "Plot area" },
  { icon: Ruler, v: "6,000 sq. ft.", l: "Built-up area" },
  { icon: BadgeCheck, v: "ISO 9001:2015", l: "Certified by TUV Austria" },
  { icon: Monitor, v: "WorkNC / AutoCAD / Inventor", l: "CAD-CAM software" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHead eyebrow="01 / About" title="A Leading Manufacturer of Precision Machined Components" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="reveal space-y-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            We are a leading manufacturing unit of precision machined components as per the customer's requirement. Our team of qualified and experienced engineers has strong knowledge of CNC programming, manufacturing processes, quality management systems, quality equipment and machine maintenance. We use CAD-CAM software including WorkNC, AutoCAD and Inventor.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_STATS.map(({ icon: I, v, l }) => (
              <div key={l} className="rounded-xl border border-border p-5">
                <I className="h-5 w-5 text-orange" />
                <p className="mt-3 font-display text-lg font-semibold leading-snug text-navy">{v}</p>
                <p className="mt-1 text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal rounded-xl border border-border bg-secondary p-6 shadow-soft md:p-8">
          <h3 className="text-xl font-semibold text-navy">Company Details</h3>
          <dl className="mt-5 divide-y divide-border">
            {DETAILS.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between">
                <dt className="text-sm text-muted-foreground">{k}</dt>
                <dd className="font-mono text-sm font-medium text-navy">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
const STEPS = [
  { icon: FileSearch, t: "Drawing & Requirement Review" },
  { icon: Code2, t: "CAD-CAM Programming", d: "WorkNC, AutoCAD, Inventor" },
  { icon: Wrench, t: "CNC Turning & Machining" },
  { icon: ShieldCheck, t: "Quality Inspection", d: "Under ISO 9001:2015 QMS" },
  { icon: Truck, t: "Packing & On-time Delivery" },
];

export function Process() {
  return (
    <section id="process" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHead eyebrow="02 / Process" title="From Concept to Production" />
        <ol className="relative grid gap-8 md:grid-cols-5 md:gap-6">
          <div className="absolute left-6 top-0 h-full w-px bg-border md:left-0 md:top-6 md:h-px md:w-full" aria-hidden />
          {STEPS.map(({ icon: I, t, d }, i) => (
            <li key={t} className="reveal relative flex gap-5 md:flex-col" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orange bg-background font-mono text-sm font-semibold text-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <I className="mb-2 h-5 w-5 text-steel" />
                <h3 className="font-semibold text-navy">{t}</h3>
                {d && <p className="mt-1 text-sm text-muted-foreground">{d}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- PRODUCTS ---------- */
const PRODUCTS = [
  { icon: Wind, t: "Compressor Parts", d: "Cylinder liners, bearing covers, housings and other casting components" },
  { icon: Cog, t: "Transmission Components", d: "Gear blanks, hubs and coupling sleeves, and other forged components" },
  { icon: Car, t: "Auto Components", d: "Precision machined automotive parts" },
  { icon: Droplets, t: "Pump Components", d: "Bearing housings and other pump parts" },
];

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHead eyebrow="03 / Products" title="Components We Manufacture" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map(({ icon: I, t, d }) => (
          <article key={t} className="reveal group rounded-xl border border-border p-6 transition hover:-translate-y-1 hover:border-orange hover:shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-orange"><I className="h-6 w-6" /></span>
            <h3 className="mt-5 text-lg font-semibold text-navy">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- FACILITIES ---------- */
const MACHINES = [
  { img: nh26, name: "CNC Turning Lathe NH 26", isNew: false, alt: "CNC turning lathe NH 26 with Fanuc control", specs: ["Control: Fanuc OT-D", "8-station bi-directional tool turret", "Power chuck: Ø315 mm", "Max turning dia: 300 mm", "Max turning length: 500 mm"] },
  { img: kitamura, name: "Vertical Machining Center, Kitamura MyCenter-3B", isNew: false, alt: "Kitamura MyCenter-3B vertical machining center with rotary table", specs: ["Control: Fanuc 11M", "Table: 1100 x 520 mm", "Travel: X 812 / Y 460 / Z 460 mm, B 360°", "Tool storage: 40 tools", "4th-axis rotary table (D-150 mm)"] },
  { img: jober, name: "CNC Turning Lathe Jober LM 500", isNew: true, alt: "New Jober LM 500 CNC turning lathe", specs: ["Control: Fanuc Oi-TF Plus", "8-station bi-directional tool turret", "Power chuck: Ø200 mm"] },
  { img: vmc1060, name: "CNC Vertical Machining Center 1060V", isNew: true, alt: "New 1060V CNC vertical machining center with Fanuc control", specs: ["Control: Fanuc", "Table: 1200 x 630 mm", "Travel: X 1050 / Y 625 / Z 600 mm, B 360°", "Tool storage: 24 tools"] },
];

function MachineCard({ m }: { m: (typeof MACHINES)[number] }) {
  return (
    <article className="reveal overflow-hidden rounded-xl border border-primary-foreground/15 bg-navy-deep">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={m.img} alt={m.alt} loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
        {m.isNew && <span className="absolute left-4 top-4 rounded-md bg-orange px-2.5 py-1 font-mono text-xs font-bold text-accent-foreground">NEW</span>}
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold text-primary-foreground">{m.name}</h4>
        <ul className="mt-4 space-y-2 font-mono text-[13px] text-primary-foreground/75">
          {m.specs.map((s) => <li key={s} className="flex gap-2"><span className="text-orange">▸</span>{s}</li>)}
        </ul>
      </div>
    </article>
  );
}

export function Facilities() {
  return (
    <section id="facilities" className="tech-grid bg-navy py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHead light eyebrow="05 / Facilities" title="Our Manufacturing Facilities" />
        {[["Existing Facilities", false], ["New Facilities", true]].map(([label, n]) => (
          <div key={String(label)} className="mb-12 last:mb-0">
            <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-steel">{label}</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {MACHINES.filter((m) => m.isNew === n).map((m) => <MachineCard key={m.name} m={m} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- CUSTOMERS ---------- */
const CUSTOMERS = [
  ["Kirloskar Pneumatics Co. Ltd.", "Cylinder liners, crosshead guide, bearing covers, cylinder block, pistons"],
  ["Kirloskar Brothers", "Pump bearing housings"],
  ["KSB Pumps Ltd. India", "Bearing housings"],
  ["WOM (Worldwide Oilfield Machine) & Magnum Forge", 'Hubs (3.5", 4", 4.5"), flange couplings, sleeves (3.5", 4", 4.5", 5")'],
  ["Mahindra and Mahindra", "Hypoid gear blanks"],
  ["My Lab Discovery Solution", "Pharmaceutical machinery components"],
];

export function Customers() {
  return (
    <section id="customers" className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHead eyebrow="06 / Customers" title="Trusted by Leading Industrial Names" />
      <div className="reveal hidden overflow-hidden rounded-xl border border-border md:block">
        <table className="w-full text-left">
          <thead className="bg-navy font-mono text-xs uppercase tracking-wider text-primary-foreground">
            <tr><th className="px-6 py-4">Customer</th><th className="px-6 py-4">Type of Production</th></tr>
          </thead>
          <tbody className="divide-y divide-border">
            {CUSTOMERS.map(([c, p]) => (
              <tr key={c} className="transition hover:bg-secondary">
                <td className="px-6 py-5 font-display font-semibold text-navy">{c}</td>
                <td className="px-6 py-5 text-muted-foreground">{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-4 md:hidden">
        {CUSTOMERS.map(([c, p]) => (
          <div key={c} className="rounded-xl border border-border p-5">
            <p className="font-display font-semibold text-navy">{c}</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-orange">Type of Production</p>
            <p className="mt-1 text-sm text-muted-foreground">{p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
