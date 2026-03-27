import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Values from "../components/Values";
import Regions from "../components/Regions";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Operations from "../components/Operations";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Regions />
      <Services />
      <Gallery />
      <Operations />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;