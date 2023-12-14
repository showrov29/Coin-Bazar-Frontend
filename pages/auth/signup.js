// pages/register.js
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "tailwindcss/tailwind.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a request to your backend API for registration
      const response = await axios.post(
        "https://aea1-103-239-252-36.ngrok-free.app/user/register",
        formData
      );

      // Handle the response accordingly, e.g., show a success message
      console.log("Registration successful:", response.data);
    } catch (error) {
      // Handle registration failure, e.g., show an error message
      console.error("Registration failed:", error.message);
    }
  };

  const swiperOptions = {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto flex flex-col lg:flex-row mt-10 my-10">
        <div className="w-full lg:w-1/2 lg:pr-4 hidden lg:block">
          <Swiper className="swiper-container" {...swiperOptions}>
            <SwiperSlide>
              <img
                src="/images/slider/slider1.jpeg"
                alt="Slider Image 1"
                className="rounded-md w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/slider/slider2.jpeg"
                alt="Slider Image 2"
                className="rounded-md w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/slider/slider3.jpeg"
                alt="Slider Image 3"
                className="rounded-md w-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Registration Form (Centered) */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Registration Form</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <label className="block mb-2">
              Username:
              <input
                type="text"
                name="name"
                value={formData.name}
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
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
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
              className="bg-blue-400 text-white py-2 px-4 md:px-20 rounded w-full hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
            <p className="mt-4">
              Already have an account?{" "}
              <Link
                href="./signin"
                className="text-blue-900 hover:underline hover:"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
