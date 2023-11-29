// pages/register.js
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "tailwindcss/tailwind.css";
<style href="style.css"></style>;
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
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
      <div className="container mx-auto flex mt-10">
        <div className="w-full md:w-1/2 px-2">
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

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>

        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
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
              <Link href="./signin" className="text-blue-900 hover:underline">
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
