import React from "react";
import WeatherSvg from "./WeatherSvg";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <main
        id="home"
        className="block-spacer padding-inline space-between-container top-spacer"
      >
        <div className="welcome last primery-heading">
          <h1>
            Welcome To <span> Besharam </span> <br /> Weather App
            <p>
              Get The Letest <span>Weather</span> Information Of Your{" "}
              <span> City</span>
            </p>
          </h1>
          <NavLink className="transition" to="/weather">
            Check Now
          </NavLink>
        </div>
        <div className="svg first">
          <WeatherSvg />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
