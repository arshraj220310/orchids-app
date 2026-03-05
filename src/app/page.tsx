import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Stats />
        <About />
        <Results />
        <Testimonials />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
