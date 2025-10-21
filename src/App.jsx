import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Iridescence from "./components/Iridescence";
import About from "./components/About";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Achievements from "./components/Achievements";

const App = () => {
  return (
    <section className="overflow-hidden">
      <Iridescence />
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects/>
      <Skills/>
      <Achievements/>
      <ContactMe/>
      <Footer/>
    </section>
  );
};

export default App;
