import Hero from "@/components/hero";
// import Image from "next/image";
import AfterHero from "@/components/afterhero";
import {About}   from "@/components/about";
import { Servises } from "@/components/servises";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main>
      <Hero/>
      <AfterHero/>
      <Servises/>
      <About/>
      <Footer/>
    </main>
  );
}
