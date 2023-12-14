// pages/signin.js
import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      // Make a request to your backend API for user login
      const response = await axios.post(
        "https://aea1-103-239-252-36.ngrok-free.app/user/login",
        formData
      );

      // Handle the response accordingly, e.g., show a success message or redirect
      console.log("Login successful:", response.data);

      // You may want to redirect the user after successful login
      // For example, using Next.js router
      // Replace "/dashboard" with the actual URL you want to redirect to
      // import { useRouter } from "next/router";
      // const router = useRouter();
      // router.push("/dashboard");
    } catch (error) {
      // Handle login failure, e.g., show an error message
      console.error("Login failed:", error.message);
    }
  };

  const sliderImages = [
    "/images/slider/slider2.jpeg",
    "/images/slider/slide1.jpeg",
    "/images/slider/slide3.jpeg",
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:pr-4 hidden lg:block">
          <Swiper
            className="swiper-container"
            loop={true}
            autoplay={{ delay: 2000 }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-md w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Login Form</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
            <button
              className="bg-blue-400 text-white py-2 px-4 md:px-20 rounded w-full mt-4 hover:bg-blue-600"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
