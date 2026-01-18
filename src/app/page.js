"use client";
import Header from "./components/headr";
import Hero from "./components/Hero";
import Herosection from "./components/HeroSection";
import PremiumFeatures from "./components/PremiumFeatures";
import Trackcard from "./components/Trackcard";

export default function Hoom() {
  return (
    <div>
      <Header />
      <Hero />
      <Herosection />
      <PremiumFeatures />
      <Trackcard />
    </div>
  );
}
