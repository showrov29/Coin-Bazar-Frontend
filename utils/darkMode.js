// utils/darkMode.js
const applyDarkMode = () => {
	const isDarkMode = localStorage.getItem("darkMode") === "true";

	if (isDarkMode) {
		console.log(document.documentElement.classList);
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
};

const toggleDarkMode = () => {
	const isDarkMode = localStorage.getItem("darkMode") === "true";
	localStorage.setItem("darkMode", (!isDarkMode).toString());
	applyDarkMode();
};

export { applyDarkMode, toggleDarkMode };
