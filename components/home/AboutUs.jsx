import React from "react";
import ContactButton from "./ContactButton";

const AboutUs = () => {
  return (
    <section id="about" className="w-full padding-x padding-y bg-gray-100">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10">
        <div className="flex items-center justify-center order-2 lg:order-1">
          <img
            src="/vecteezy_isometric-illustration-concept-online-shopping-e-commerce_5638065-removebg-preview.png"
            alt="about-image"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-6 w-full mx-auto order-1 lg:order-2">
          <p className="text-base font-semibold bg-[#4e9d4b]/20 text-green-600 px-4 py-3 rounded-full leading-none m-0 p-0">
            What it is
          </p>
          <h2 className="section-heading leading-[1]">
            Where Selling Supports Your Cause
          </h2>
          <p className="hero-description text-gray-500 leading-[1.2]">
            giveXchange turns everyday buying and selling into effortless
            fundraising. Organizations create private online communities where
            members buy and sell items. Each sale automatically sends part of
            the proceeds to the fundraiser while sellers keep the rest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
