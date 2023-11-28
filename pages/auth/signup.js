// pages/Register.js
import { useState } from "react";
import Link from "next/link";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "", // Added a field for confirming password
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Registration Form</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label className="block mb-2">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </label>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
        <p className="mt-4">
          Already have an account?{" "}
          <Link href="./signin" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
