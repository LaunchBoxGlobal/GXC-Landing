import React from "react";
import ContactForm from "./ContactForm";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="w-full padding-x padding-y bg-gray-100">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
        <div className="w-full flex flex-col items-start justify-center gap-5">
          <p className="uppercase text-gray-500 font-medium">
            We're here to help you
          </p>
          <h2 className="section-heading leading-[1.1]">
            Let’s Build Better Communities Together
          </h2>
          <p className="hero-description">
            GiveXChange isn’t just an app — it’s a movement toward fair, local,
            trust-based commerce. Want in? Join the waitlist and start powering
            your community marketplace.
          </p>

          <div className="flex items-start gap-4">
            <MdEmail className="text-3xl primary-text" />
            <div className="flex flex-col items-start gap-0">
              <p className="text-gray-500 font-normal text-sm">Email</p>
              <p>
                <Link
                  href={`mailto:hello@thegivexchange.com`}
                  className="text-lg font-medium"
                >
                  hello@thegivexchange.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <IoMdCall className="text-3xl primary-text" />
            <div className="flex flex-col items-start gap-0">
              <p className="text-gray-500 font-normal text-sm">Phone number</p>
              <p>
                <Link href={`tel:8022998329`} className="text-lg font-medium">
                  (802) 299-8329
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaLocationDot className="text-3xl primary-text" />
            <div className="flex flex-col items-start gap-0">
              <p className="text-gray-500 font-normal text-sm">Address</p>
              <p className="text-lg font-medium">
                5204 Mitchell StAlexandria, VA 22312, USA
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
