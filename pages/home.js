// pages/index.js
import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { applyDarkMode, toggleDarkMode } from "./utils/darkMode";
import Products from "@/Data/data";
import Card from "./components/Card";
import Product from "./components/product/ProductPage";
import Link from "next/link";
const Home = () => {
  useEffect(() => {
    applyDarkMode();
  }, []);

  return (
    <div className="">
      <div className="dark:bg-gray-800 transition-colors duration-500">
        <Header />

        <label className="toggle">
          <input
            type="checkbox"
            className="toggle-checkbox"
            onClick={toggleDarkMode}
          />
        </label>

        <div className="mx-8 grid grid-flow-row gap-5 grid-cols-5 xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
          {Products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
      <button>
        <Link href="./components/product/ProductPage">Product</Link>
      </button>
      <Footer />
    </div>
  );
};

export default Home;
