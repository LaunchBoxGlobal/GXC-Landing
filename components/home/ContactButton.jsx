import React from "react";
import Link from "next/link";

const ContactButton = ({ title }) => {
  return (
    <Link
      href={`/`}
      className="primary-bg text-white px-4 md:px-6 md:text-base py-4 text-sm rounded-full font-semibold btn-shadow"
    >
      {title}
    </Link>
  );
};

export default ContactButton;
