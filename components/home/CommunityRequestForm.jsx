"use client";
import React, { useState } from "react";
import axios from "axios";

const CommunityRequestForm = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    organizationName: "",
    organizationType: "",
    contactNameTitle: "",
    email: "",
    phone: "",
    website: "",
    preferredContact: "",
    fundraisingGoals: "",
    fundraisingDate: "",
    communitySize: "",
    inPersonKickoff: "",
    virtualKickoff: "",
    exchangeMethod: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let message = "";

    if (
      [
        "organizationName",
        "organizationType",
        "contactNameTitle",
        "email",
        "phone",
        "preferredContact",
        "fundraisingDate",
        "inPersonKickoff",
        "virtualKickoff",
        "exchangeMethod",
      ].includes(name)
    ) {
      if (!value.trim()) message = "This field is required";
    }

    if (name === "email") {
      const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!reg.test(value)) message = "Enter a valid email";
    }

    if (name === "phone") {
      if (!/^\d{10}$/.test(value)) message = "Phone number must be 10 digits";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
    return message === "";
  };

  const validateAll = () =>
    Object.keys(data).every((key) => validateField(key, data[key] || ""));

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
      await axios.post("/api/community-request", data);
      alert("Community request submitted successfully.");

      setData({
        organizationName: "",
        organizationType: "",
        contactNameTitle: "",
        email: "",
        phone: "",
        website: "",
        preferredContact: "",
        fundraisingGoals: "",
        fundraisingDate: "",
        communitySize: "",
        inPersonKickoff: "",
        virtualKickoff: "",
        exchangeMethod: "",
        comments: "",
      });
      setErrors({});
    } catch (err) {
      alert("Failed to submit request.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="custom-shadow w-full bg-white p-7 md:p-10 radius flex flex-col gap-5"
    >
      <Input
        label="Name of Organization"
        name="organizationName"
        value={data.organizationName}
        onChange={handleChange}
        error={errors.organizationName}
      />
      <Input
        label="Type of Organization"
        name="organizationType"
        value={data.organizationType}
        onChange={handleChange}
        error={errors.organizationType}
      />
      <Input
        label="Name of Contact and Title"
        name="contactNameTitle"
        value={data.contactNameTitle}
        onChange={handleChange}
        error={errors.contactNameTitle}
      />
      <Input
        label="Email Address"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        label="Phone Number"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <Input
        label="Website (optional)"
        name="website"
        value={data.website}
        onChange={handleChange}
      />

      <Select
        label="Preferred Method of Contact"
        name="preferredContact"
        value={data.preferredContact}
        onChange={handleChange}
        options={["Email", "Call", "Text"]}
        error={errors.preferredContact}
      />

      <Input
        label="Fundraising Goals (optional)"
        name="fundraisingGoals"
        value={data.fundraisingGoals}
        onChange={handleChange}
      />
      <Input
        type="date"
        label="Estimated Fundraising Date"
        name="fundraisingDate"
        value={data.fundraisingDate}
        onChange={handleChange}
        error={errors.fundraisingDate}
      />
      <Input
        label="Estimated Size of Community (optional)"
        name="communitySize"
        value={data.communitySize}
        onChange={handleChange}
      />

      <Select
        label="In-person Kick-off Requested?"
        name="inPersonKickoff"
        value={data.inPersonKickoff}
        onChange={handleChange}
        options={["Yes", "No"]}
        error={errors.inPersonKickoff}
      />
      <Select
        label="Virtual Kick-off Requested?"
        name="virtualKickoff"
        value={data.virtualKickoff}
        onChange={handleChange}
        options={["Yes", "No"]}
        error={errors.virtualKickoff}
      />

      <Textarea
        label="Exchange Method"
        name="exchangeMethod"
        value={data.exchangeMethod}
        onChange={handleChange}
        error={errors.exchangeMethod}
      />
      <Textarea
        label="Additional Questions or Comments"
        name="comments"
        value={data.comments}
        onChange={handleChange}
      />

      <button
        disabled={loading}
        className="rounded-xl py-3 w-full primary-bg text-white font-semibold disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Community Request"}
      </button>
    </form>
  );
};

/* Reusable UI Components */

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
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
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
      rows="4"
      className="w-full py-3 px-5 bg-gray-100 rounded-xl outline-none resize-none"
    />
    {error && <small className="text-red-500">{error}</small>}
  </div>
);

export default CommunityRequestForm;
