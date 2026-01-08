import React from "react";
import ContactButton from "./ContactButton";

const AboutUs = () => {
  return (
    <section id="about" className="w-full padding-x padding-y bg-gray-100">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10">
        <div className="flex items-center justify-center">
          <img
            src="/vecteezy_isometric-illustration-concept-online-shopping-e-commerce_5638065-removebg-preview.png"
            alt="about-image"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-6 w-full mx-auto">
          <p className="text-base font-semibold bg-[#4e9d4b]/20 text-green-600 px-4 py-3 rounded-full leading-none m-0 p-0">
            What it is
          </p>
          <h2 className="section-heading leading-[1]">
            Where Selling Supports Your Cause
          </h2>
          <p className="hero-description text-gray-500 leading-[1.2]">
            GiveXChange is a digital marketplace that helps people raise money
            by creating their own online fundraising communities. Hosts invite
            others to join, buy, and sell items, and each sale automatically
            splits proceeds—sending a portion to the fundraiser while the rest
            goes back to the seller.
          </p>
          {/* <p className="hero-description text-gray-500">
            When you shop on GiveXChange, your money doesn’t disappear into a
            faceless system. It circulates back into your community — rewarding
            sellers, supporting community leaders, and keeping value right where
            it belongs.
          </p> */}
          <ContactButton title={`Contact Us`} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
