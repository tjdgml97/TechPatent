import React from "react";
import PriceCarousel from "./components/PriceCarousel";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Quote from "./components/Quote";
import Checklist from "./components/Checklist";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Hero />
      <Stats />
      <Features />
      <Quote />
      <Checklist />
      <FAQ />
      <PriceCarousel />
      <Footer />
    </div>
  );
};

export default App;
