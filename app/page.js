import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <Hero />
    </div>
  );
}