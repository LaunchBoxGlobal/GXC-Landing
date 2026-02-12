import React from "react";
import ContactForm from "./ContactForm";
import ConsultationForm from "./ConsultationForm";
import CommunityRequestForm from "./CommunityRequestForm";

const Contact = ({ formType, toggleFormType }) => {
  return (
    <section id="contact" className="w-full padding-x padding-y bg-white">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
        <div className="w-full flex flex-col items-start justify-start gap-5">
          <h2 className="section-heading leading-[1.1]">Let’s Get Started!</h2>
          <p className="hero-description">
            Interested in learning more or setting up your own fundraising
            community? Let's explore the possibilitie.
          </p>

          <div className="mt-2 space-x-3 space-y-3">
            <button
              type="button"
              onClick={() => toggleFormType("consultation")}
              className="primary-bg text-white font-semibold text-xs md:text-sm px-3 md:px-4 py-3 rounded-lg"
            >
              Schedule a Consult
            </button>
            <button
              type="button"
              onClick={() => toggleFormType("community-request")}
              className="primary-bg text-white font-semibold text-xs md:text-sm px-3 md:px-4 py-3 rounded-lg"
            >
              Community Request Form
            </button>
          </div>
        </div>
        <div className="relative w-full">
          {/* <ContactForm /> */}
          {formType === "consultation" ? (
            <ConsultationForm />
          ) : (
            <CommunityRequestForm />
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
