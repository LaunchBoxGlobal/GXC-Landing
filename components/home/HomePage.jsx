"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import "./styles.css";
import AboutUs from "./AboutUs";
import WhoWeWorkWith from "./WhoWeWorkWith";
import WhatWeDo from "./WhatWeDo";
import Contact from "./Contact";
import EmailPopup from "./EmailPopup";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formType, setFormType] = useState("consultation");

  const toggleFormType = (type) => {
    setFormType(type);
  };

  const handleTogglePopup = () => {
    setShowPopup((prev) => !prev);
  };
  return (
    <>
      <Hero
        handleTogglePopup={handleTogglePopup}
        toggleFormType={toggleFormType}
      />
      <AboutUs />
      <WhoWeWorkWith />
      <WhatWeDo />
      <Contact toggleFormType={toggleFormType} formType={formType} />
      <EmailPopup showPopup={showPopup} handleTogglePopup={handleTogglePopup} />
    </>
  );
};

export default HomePage;
