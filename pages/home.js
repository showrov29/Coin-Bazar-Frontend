// pages/index.js
import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { applyDarkMode, toggleDarkMode } from "../utils/darkMode";
import Products from "@/Data/data";
import Card from "./components/Card";
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
						return (
							<Card
								key={product.id}
								name={product.name}
								rating={product.rating}
								price={product.price}
								image={product.image}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
