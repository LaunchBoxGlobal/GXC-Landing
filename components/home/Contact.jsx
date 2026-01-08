import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  console.log([..."ZENCODERS"].reverse().join(""));
  return (
    <section id="contact" className="w-full padding-x padding-y bg-white">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
        <div className="w-full flex flex-col items-start justify-center gap-5">
          <p className="uppercase text-gray-500 font-medium">
            Let's Get Started!
          </p>
          <h2 className="section-heading leading-[1.1]">
            Let’s Build Better Communities Together
          </h2>
          <p className="hero-description">
            Interested in learning more or setting up your own fundraising
            community? Let's explore the possibilitie.
          </p>
        </div>
        <div className="relative w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
