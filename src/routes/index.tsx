import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar, Hero, About, Process, Products, Facilities, Customers, COMPANY } from "@/components/site/Sections";
import { Gallery } from "@/components/site/Gallery";
import { Contact, Footer, WhatsApp } from "@/components/site/Contact";

const TITLE = "Deepak Engineering Co. | Precision CNC Machining Components, Bhor, Pune";
const DESC = "Deepak Engineering Co. manufactures precision machined compressor, pump, transmission and auto components in Bhor, Pune. ISO 9001:2015 certified.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness",
        name: COMPANY.name, telephone: "+91" + COMPANY.phone, email: COMPANY.email,
        address: { "@type": "PostalAddress", streetAddress: "Gat No 265, Shindewadi, Tal. Bhor", addressLocality: "Pune", addressRegion: "Maharashtra", postalCode: "412205", addressCountry: "IN" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Process /><Products /><Gallery /><Facilities /><Customers /><Contact />
      </main>
      <Footer />
      <WhatsApp />
      <Toaster position="top-center" />
    </>
  );
}
