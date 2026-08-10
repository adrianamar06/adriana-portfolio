import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Leadership from "@/components/sections/Leadership";
import Experience from "@/components/sections/Experience";
import Values from "@/components/sections/Values";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Interests from "@/components/sections/Interests";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
  {/*}      <TechStack />  */}
        <Projects />
        <Experience />
  {/*      <Values /> */}
        <Interests />
        <Contact />
        <Footer />
      </main>
      
    </>
  );
}