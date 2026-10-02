import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import CaseStudy from "@/components/CaseStudy";
import Bulletins from "@/components/Bulletins";
import Method from "@/components/Method";
import Team from "@/components/Team";
import ContactSection from "@/components/ContactSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.claim,
    description: site.descripcion,
    areaServed: "PE",
    address: { "@type": "PostalAddress", addressLocality: "Lima", addressCountry: "PE" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Plans />
        <CaseStudy />
        <Bulletins />
        <Method />
        <Team />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
