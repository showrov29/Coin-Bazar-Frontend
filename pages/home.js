// pages/index.js
import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { applyDarkMode, toggleDarkMode } from "./utils/darkMode";

const Home = () => {
  useEffect(() => {
    applyDarkMode();
  }, []);

  return (
    <div>
      <div className="dark:bg-gray-800 transition-colors duration-500">
        <Header />

        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={toggleDarkMode}
        >
          click me
        </button>

        <main>
          <div class="container">
            <div class="hero">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div class="card-container">
              <h2 class="tees">Tshirt tees</h2>
              <div class="card">
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1554568218-0f1715e72254?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1502389614483-e475fc34407e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://media.istockphoto.com/photos/front-of-an-unfolded-blank-gray-tshirt-on-white-background-picture-id471184775?b=1&k=20&m=471184775&s=170667a&w=0&h=Tqer7Cd4PDguf0CIitFlslq00bmyjtsTNTljGlRvF9Q="
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1527280916202-fa1f7c499a7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1613540883508-c8439d775511?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
              </div>
              <h2 class="tees">Tshirt tees</h2>
              <div class="card">
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1554568218-0f1715e72254?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1502389614483-e475fc34407e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://media.istockphoto.com/photos/front-of-an-unfolded-blank-gray-tshirt-on-white-background-picture-id471184775?b=1&k=20&m=471184775&s=170667a&w=0&h=Tqer7Cd4PDguf0CIitFlslq00bmyjtsTNTljGlRvF9Q="
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1527280916202-fa1f7c499a7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1613540883508-c8439d775511?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
              </div>
              <h2 class="tees">Tshirt tees</h2>
              <div class="card">
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1554568218-0f1715e72254?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1502389614483-e475fc34407e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://media.istockphoto.com/photos/front-of-an-unfolded-blank-gray-tshirt-on-white-background-picture-id471184775?b=1&k=20&m=471184775&s=170667a&w=0&h=Tqer7Cd4PDguf0CIitFlslq00bmyjtsTNTljGlRvF9Q="
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1527280916202-fa1f7c499a7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
                <div class="card-item">
                  <img
                    src="https://images.unsplash.com/photo-1613540883508-c8439d775511?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHQlMjBzaGlydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <p>Stylish tees</p>
                  <p>Min 50% off</p>
                  <p>Grab it</p>{" "}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
