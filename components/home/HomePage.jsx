"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import "./styles.css";
import AboutUs from "./AboutUs";
import WhoWeWorkWith from "./WhoWeWorkWith";
import WhatWeDo from "./WhatWeDo";
import WhyWeAreDifferent from "./WhyWeAreDifferent";
import Testinomials from "./Testinomials";
// import CTA from "./CTA";
import Footer from "./Footer";
import Faqs from "./Faqs";
import Contact from "./Contact";
import SimpleFooter from "./SimpleFooter";
import EmailPopup from "./EmailPopup";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setShowPopup((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      <Hero handleTogglePopup={handleTogglePopup} />
      <AboutUs />
      <WhoWeWorkWith />
      <WhatWeDo />
      <WhyWeAreDifferent />
      {/* <Testinomials /> */}
      {/* <Faqs /> */}
      {/* <CTA /> */}
      <Contact />
      {/* <Footer /> */}
      <SimpleFooter />
      <EmailPopup showPopup={showPopup} handleTogglePopup={handleTogglePopup} />
    </>
  );
};

export default HomePage;
