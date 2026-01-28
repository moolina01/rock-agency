import Features from "@/components/landing/ Features";
import Hero from "@/components/landing/Hero";
import Partners from "@/components/landing/Partners";
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
   <Footer/>
   </>
  );
}
