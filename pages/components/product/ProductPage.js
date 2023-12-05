import React from "react";
import Link from "next/link";

const ProductPage = () => {
  return (
    <div className="">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl">
              <a class="block relative  rounded overflow-hidden ">
                <img
                  alt="ecommerce"
                  class="  object-cover object-center w-full h-full block hover:scale-110 transition-all duration-300"
                  src="https://cdn.shopify.com/s/files/1/0295/5912/8124/files/2315-gop--casimir-pulaski--1-oz-ag-999--tphm-jan-2023-1673088482454.png?v=1699560930"
                />
              </a>
              <div class="mt-4 sm:text-right">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  COIN
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  British Coin
                </h2>
                <p class="mt-1">৳299</p>
                <button
                  type="button"
                  className="h-10  hover:scale-105  bg-yellow-900 hover:bg-gray-600 text-white rounded-full w-24"
                >
                  <Link href="add-to-cart">Add to cart</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
