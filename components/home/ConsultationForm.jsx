"use client";
import React, { useState } from "react";
import axios from "axios";

const ConsultationForm = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    organization: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContact: "",
    location: "",
    preferredTime: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    let message = "";

    if (!value?.trim()) {
      message = "This field is required";
    }

    if (field === "email") {
      const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailReg.test(value)) message = "Enter a valid email address";
    }

    if (field === "phone") {
      if (!/^\d{10}$/.test(value)) message = "Phone number must be 10 digits";
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
    return message === "";
  };

  const validateAll = () => {
    return Object.keys(data).every((key) => validateField(key, data[key]));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAll()) return;

    try {
      setLoading(true);
      await axios.post("/api/schedule-consult", data);
      alert("Consult request submitted successfully!");

      setData({
        organization: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredContact: "",
        location: "",
        preferredTime: "",
        comments: "",
      });
      setErrors({});
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      id="consulation"
      onSubmit={handleSubmit}
      className="custom-shadow w-full bg-white p-7 md:p-10 radius flex flex-col gap-5"
    >
      {/* Organization */}
      <Input
        label="Organization"
        name="organization"
        value={data.organization}
        onChange={handleChange}
        error={errors.organization}
      />

      {/* Name */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="First Name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <Input
          label="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
      </div>

      {/* Email */}
      <Input
        label="Email Address"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />

      {/* Phone */}
      <Input
        label="Phone Number"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      {/* Preferred Contact */}
      <Select
        label="Preferred Method of Contact"
        name="preferredContact"
        value={data.preferredContact}
        onChange={handleChange}
        options={["Email", "Call", "Text"]}
        error={errors.preferredContact}
      />

      {/* Location */}
      <Input
        label="Location (City, State)"
        name="location"
        value={data.location}
        onChange={handleChange}
        error={errors.location}
      />

      {/* Preferred Time */}
      <Select
        label="Preferred Time to Contact"
        name="preferredTime"
        value={data.preferredTime}
        onChange={handleChange}
        options={["Morning", "Afternoon", "Evening"]}
        error={errors.preferredTime}
      />

      {/* Comments */}
      <Textarea
        label="Additional Questions or Comments"
        name="comments"
        value={data.comments}
        onChange={handleChange}
        error={errors.comments}
      />

      <button
        disabled={loading}
        className="rounded-xl py-3 w-full primary-bg text-white font-semibold disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Schedule a Consult"}
      </button>
    </form>
  );
};

/* Reusable Components */

const Input = ({ label, error, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="font-medium">{label}</label>
    <input
      {...props}
      className="w-full py-3 px-5 bg-gray-100 rounded-xl outline-none"
    />
    {error && <small className="text-red-500">{error}</small>}
  </div>
);

const Select = ({ label, options, error, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="font-medium">{label}</label>
    <select
      {...props}
      className="w-full py-3 px-5 bg-gray-100 rounded-xl outline-none"
    >
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <small className="text-red-500">{error}</small>}
  </div>
);

const Textarea = ({ label, error, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="font-medium">{label}</label>
    <textarea
      {...props}
      rows="5"
      className="w-full py-3 px-5 bg-gray-100 rounded-xl outline-none resize-none"
    />
    {error && <small className="text-red-500">{error}</small>}
  </div>
);

export default ConsultationForm;
