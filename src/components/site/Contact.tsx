import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo, SectionHead } from "./Brand";
import { COMPANY } from "./Sections";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 characters)").max(1000),
});
type Form = z.infer<typeof schema>;
const FIELDS: { k: keyof Form; label: string; type?: string; area?: boolean }[] = [
  { k: "name", label: "Name *" }, { k: "company", label: "Company" },
  { k: "phone", label: "Phone *", type: "tel" }, { k: "email", label: "Email *", type: "email" },
  { k: "message", label: "Message *", area: true },
];
const input = "mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-orange focus:ring-2 focus:ring-ring/30";

export function Contact() {
  const [vals, setVals] = useState<Record<string, string>>({});
  const [errs, setErrs] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(vals);
    if (!r.success) {
      const m: Record<string, string> = {};
      r.error.issues.forEach((i) => { m[String(i.path[0])] = i.message; });
      setErrs(m);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrs({});
    const d = r.data;
    const body = `Name: ${d.name}\nCompany: ${d.company || "-"}\nPhone: ${d.phone}\nEmail: ${d.email}\n\n${d.message}`;
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`Quote request from ${d.name}`)}&body=${encodeURIComponent(body)}`;
    toast.success("Thank you! Your email app is opening with your enquiry.");
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHead eyebrow="07 / Contact" title="Let's Discuss Your Requirement" />
      <p className="reveal -mt-6 mb-12 max-w-2xl text-lg text-muted-foreground">Please contact us for your requirement. We are available with good guidance and good service.</p>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="reveal space-y-6">
          <div className="space-y-4 rounded-xl border border-border bg-secondary p-6">
            <p className="flex items-center gap-3 text-navy"><User className="h-5 w-5 text-orange" /><span className="font-semibold">{COMPANY.contact}</span></p>
            <a href={`tel:+91${COMPANY.phone}`} className="hover-line flex w-fit items-center gap-3 font-mono text-navy"><Phone className="h-5 w-5 text-orange" />+91 {COMPANY.phone}</a>
            <a href={`mailto:${COMPANY.email}`} className="hover-line flex w-fit items-center gap-3 break-all font-mono text-sm text-navy"><Mail className="h-5 w-5 shrink-0 text-orange" />{COMPANY.email}</a>
            <p className="flex gap-3 text-sm text-muted-foreground"><MapPin className="h-5 w-5 shrink-0 text-orange" />{COMPANY.address}</p>
          </div>
          <iframe title="Map: Shindewadi, Bhor, Pune 412205" src="https://www.google.com/maps?q=Shindewadi,+Bhor,+Pune+412205&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full rounded-xl border border-border" />
        </div>
        <form onSubmit={submit} noValidate className="reveal grid gap-4 rounded-xl border border-border p-6 shadow-soft sm:grid-cols-2 md:p-8">
          {FIELDS.map(({ k, label, type, area }) => (
            <div key={k} className={area || k === "email" || k === "phone" ? "sm:col-span-1" + (area ? " sm:col-span-2" : "") : ""}>
              <label htmlFor={k} className="text-sm font-medium text-navy">{label}</label>
              {area ? (
                <textarea id={k} rows={5} className={input} value={vals[k] ?? ""} onChange={(e) => setVals({ ...vals, [k]: e.target.value })} aria-invalid={!!errs[k]} aria-describedby={`${k}-err`} />
              ) : (
                <input id={k} type={type ?? "text"} className={input} value={vals[k] ?? ""} onChange={(e) => setVals({ ...vals, [k]: e.target.value })} aria-invalid={!!errs[k]} aria-describedby={`${k}-err`} />
              )}
              {errs[k] && <p id={`${k}-err`} className="mt-1 text-xs text-destructive">{errs[k]}</p>}
            </div>
          ))}
          <Button type="submit" variant="cta" size="lg" className="sm:col-span-2">Send Enquiry</Button>
        </form>
      </div>
    </section>
  );
}

export function WhatsApp() {
  return (
    <a href="https://wa.me/919850419267" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-orange text-accent-foreground shadow-soft transition hover:scale-110">
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

const LINKS = [["About", "about"], ["Products", "products"], ["Facilities", "facilities"], ["Customers", "customers"], ["Contact", "contact"]];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-2.5"><Logo className="h-10 w-14" /><span className="font-display text-lg font-bold text-primary-foreground">{COMPANY.name}</span></div>
          <p className="mt-4 text-sm">Precision CNC machined compressor, pump, transmission and auto components from Bhor, Pune.</p>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-xs uppercase tracking-widest text-orange">Quick Links</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {LINKS.map(([l, id]) => <li key={id}><a href={`#${id}`} className="hover-line">{l}</a></li>)}
          </ul>
        </nav>
        <div className="space-y-2 font-mono text-xs">
          <p><span className="text-steel">GSTN:</span> {COMPANY.gstn}</p>
          <p className="text-orange">ISO 9001:2015 Certified</p>
        </div>
      </div>
      <p className="border-t border-primary-foreground/10 py-5 text-center text-xs">© 2026 Deepak Engineering Co. All rights reserved.</p>
    </footer>
  );
}
