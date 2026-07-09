import Hero from "@/components/landing/Hero";
import Partners from "@/components/landing/Partners";
import Diagnostico from "@/components/landing/Diagnostico";
import Servicios from "@/components/landing/Servicios";
import Catalogo from "@/components/landing/Catalogo";
import Fium from "@/components/landing/Fium";
import Integraciones from "@/components/landing/Integraciones";
import Numeros from "@/components/landing/Numeros";
import Plans from "@/components/landing/Plans";
import Work from "@/components/landing/Work";
import CtaStrip from "@/components/landing/CtaStrip";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Diagnostico />
      <Servicios />
      <Catalogo />
      <Fium />
      <Integraciones />
      <Numeros />
      <Plans />
      <Work />
      <CtaStrip />
      <Footer />
    </>
  );
}
