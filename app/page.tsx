import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Band from "@/components/Band";
import Resources from "@/components/Resources";
import About from "../components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ServicesGrid />
      <Band />
      {/* <Resources />
      <About />
      <Contact /> */}
      <Footer />
    </>
  );
}
