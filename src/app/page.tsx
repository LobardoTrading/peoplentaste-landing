import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Packs from "@/components/Packs";
import Personalization from "@/components/Personalization";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <WhyUs />
      <Packs />
      <Personalization />
      <Contact />
      <Footer />
    </main>
  );
}
