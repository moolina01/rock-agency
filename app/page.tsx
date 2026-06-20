import Features from "@/components/landing/ Features";
import Fium from "@/components/landing/Fium";
import Hero from "@/components/landing/Hero";
import Partners from "@/components/landing/Partners";
import Plans from "@/components/landing/Plans";
import Specialists from "@/components/landing/Specialists";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>

   <Hero/>
   <Features/>
   <Partners/>
   <Specialists/>
   <Fium/>
   <Plans/>
   <Footer/>
   </>
  );
}
