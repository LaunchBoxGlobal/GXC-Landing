import React from "react";
import Link from "next/link";

const SimpleFooter = () => {
  return (
    <footer className="w-full pt-10 lg:pt-20 pb-10 padding-x">
      <div className="w-full flex flex-col items-center gap-8">
        <Link href={"/"}>
          <img
            src="/GiveXchangenewlogo.png"
            alt="logo"
            className="w-[150px] md:w-[180px]"
          />
        </Link>

        <ul className="flex items-center justify-center flex-wrap gap-x-10 gap-y-2">
          <li>
            <Link href={`/`} className="font-medium text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link href={`#about`} className="font-medium text-gray-500">
              About
            </Link>
          </li>
          <li>
            <Link
              href={`/terms-and-conditions`}
              className="font-medium text-gray-500"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              href={`/privacy-policy`}
              className="font-medium text-gray-500"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>

        <div className="w-full border opacity-40" />
        <div className="w-full text-center">
          <p className="text-sm text-gray-400">
            Copyright © 2025 GiveXChange. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
