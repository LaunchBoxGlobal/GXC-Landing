"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const EmailPopup = ({ showPopup, handleTogglePopup }) => {
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEmail) {
      alert("Please enter your email!");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Email sent successfully!");
      setUserEmail("");
      setLoading(false);
      handleTogglePopup();
    } else {
      alert("Failed to send email");
      setLoading(false);
    }
  };
  return (
    showPopup && (
      <div className="w-full h-screen z-50 fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center px-4">
        <div className="bg-white p-8 lg:py-16 lg:w-[40%] flex flex-col items-center relative">
          <button
            type="button"
            onClick={() => handleTogglePopup()}
            className="w-6 h-6 rounded-full bg-gray-200 p-1 absolute top-5 right-5"
          >
            <IoClose className="w-full h-full" />
          </button>
          <h1 className="font-bold text-2xl text-center">
            Join the Waitlist for giveXchange!
          </h1>
          <p className="text-base mt-2 text-center text-gray-500 max-w-[340px]">
            Join the waitlist and be the first to explore what giveXchange has
            to offer!
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-[340px] mt-8">
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter your email address"
              className="border bg-gray-50 text-sm w-full p-3 rounded-md outline-none"
            />

            <div className="w-full flex justify-center mt-4">
              <button
                type="submit"
                className="primary-bg text-white md:text-base py-3 text-sm rounded-full font-semibold btn-shadow min-w-[110px] h-[45px] flex items-center justify-center"
              >
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-400"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EmailPopup;
