import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
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