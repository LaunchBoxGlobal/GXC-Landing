"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formType, setFormType] = useState("");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateFields = (field, value) => {
    let message = "";

    if (field === "name") {
      if (!value.trim()) message = "Name is required";
      else if (value.length < 3) message = "Name must be at least 3 characters";
      else if (value.length > 20) message = "Name cannot exceed 20 characters";
    }

    if (field === "email") {
      const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) message = "Email is required";
      else if (!emailReg.test(value)) message = "Enter a valid email";
    }

    if (field === "phone") {
      if (!value.trim()) message = "Phone number is required";
      else if (!/^\d{10}$/.test(value))
        message = "Phone number must be 10 digits";
    }

    if (field === "message") {
      if (!value.trim()) message = "Message is required";
      else if (value.length < 10)
        message = "Message must be at least 10 characters";
      else if (value.length > 1000)
        message = "Message cannot exceed 1000 characters";
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
    return message === "";
  };

  const validateAllFields = () => {
    return (
      validateFields("name", data.name) &&
      validateFields("email", data.email) &&
      validateFields("phone", data.phone) &&
      validateFields("message", data.message)
    );
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    validateFields(name, value);
  };

  const handleSubmit = async (e, type) => {
    setFormType(type);

    if (!validateAllFields()) return;

    try {
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          formType: type,
        }),
      });

      if (res.ok) {
        alert("Message sent successfully!");
      }

      setData({ name: "", email: "", phone: "", message: "" });
      setErrors({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="custom-shadow w-full bg-white p-7 md:p-10 radius flex flex-col items-start gap-5"
    >
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleOnChange}
          placeholder="Jane Smith"
          className="w-full py-3 px-5 bg-gray-100 rounded-xl outline-none"
        />
        {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleOnChange}
          placeholder="jamesmith@gmail.com"
          className="w-full py-3 px-5 bg-gray-100 rounded-xl outline-none"
        />
        {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="phone" className="font-medium">
          Phone
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={data.phone}
          onChange={handleOnChange}
          placeholder="(703) 646-0719"
          className="w-full py-3 px-5 bg-gray-100 rounded-xl outline-none"
        />
        {errors.phone && <small style={{ color: "red" }}>{errors.phone}</small>}
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="message" className="font-medium">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={data.message}
          onChange={handleOnChange}
          placeholder="Write your message here..."
          rows="5"
          className="w-full py-3 px-5 bg-gray-100 rounded-xl outline-none resize-none"
        ></textarea>
        {errors.message && (
          <small style={{ color: "red" }}>{errors.message}</small>
        )}
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={(e) => handleSubmit(e, "Community Request")}
          disabled={loading}
          className="rounded-xl py-3 text-center w-full primary-bg text-white font-semibold disabled:cursor-not-allowed disabled:opacity-60"
        >
          Community Request
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, "Schedule a Consult")}
          disabled={loading}
          className="rounded-xl py-3 text-center w-full primary-bg text-white font-semibold disabled:cursor-not-allowed disabled:opacity-60"
        >
          Schedule a Consult
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
