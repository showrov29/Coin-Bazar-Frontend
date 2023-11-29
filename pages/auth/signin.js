import { useState, useEffect } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const sliderImages = [
    "/images/slider/slider2.jpeg",
    "/images/slider/slide1.jpeg",
    "/images/slider/slide3.jpeg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Auto slide change");
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10 flex">
        <div className="w-full md:w-1/2 px-2">
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
              className="bg-blue-400 text-white py-2 px-10 rounded hover:bg-blue-800"
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
