import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import clear from "../assets/clear.png";
import cloudy from "../assets/cloudy.png";
import drizzle from "../assets/drizzle.png";
import haze from "../assets/haze.png";
import rainy from "../assets/rainy.png";
import snow from "../assets/snow.png";
import thunderstorms from "../assets/thunderstorms.png";
import sunny from "../assets/sunny.png";

function Weather() {
  const timer = () => {
    let cDay = document.getElementById("date");
    const getDay = () => {
      let today = new Date();
      let hour = today.getHours();
      let min = today.getMinutes();
      let period = "AM";
      if (hour > 11) {
        period = "PM";
        if (hour > 12) hour -= 12;
      }
      if (min < 10) {
        min = "0" + min;
      }
      cDay.innerHTML = `${hour}:${min} ${period}`;
    };
    getDay();
  };
  React.useEffect(() => {
    let intervalId = setInterval(timer, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getCity = async () => {
    let img = document.getElementById("img");
    let temp = document.getElementById("temp");
    let desc = document.getElementById("description");
    let feel = document.getElementById("feels");
    let city = document.getElementById("city");
    let hum = document.getElementById("hum");
    let pres = document.getElementById("pres");
    let min = document.getElementById("min");
    let max = document.getElementById("max");
    let ask = document.getElementById("ask");
    const apikey = import.meta.env.VITE_SOME_KEY;

    if (ask.value === "") {
      alert("Please enter city name!");
    } else {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ask.value}&appid=${apikey}`;
        console.log = function () {};
        let data = fetch(url);
        data
          .then((val) => {
            return val.json();
          })
          .then((val) => {
            let details = val;
            if (!details.name) {
              alert("Enter correct city name");
            } else {
              temp.innerHTML =
                Math.round(details.main.temp - 273.15) + "<p>°C</p>";
              desc.innerText = details.weather[0].description.toUpperCase();
              feel.innerText =
                "Feels Like " +
                Math.round(details.main.feels_like - 273.15) +
                "°C";
              city.innerText = details.name + "," + details.sys.country;
              hum.innerText = details.main.humidity + "%";
              pres.innerText = details.main.pressure + " mb";
              min.innerText = Math.round(details.main.temp_min - 273.15) + "°C";
              max.innerText = Math.round(details.main.temp_max - 273.15) + "°C";

              if (details.weather[0].description.toUpperCase() === "SMOKE") {
                img.src = haze;
              } else if (
                details.weather[0].description.toUpperCase() ===
                "OVERCAST CLOUDS"
              ) {
                img.src = cloudy;
              } else if (
                details.weather[0].description.toUpperCase() === "SUNNY"
              ) {
                img.src = sunny;
              } else if (
                details.weather[0].description.toUpperCase() === "CLEAR SKY"
              ) {
                img.src = clear;
              } else if (
                details.weather[0].description.toUpperCase() === "CLEAR"
              ) {
                img.src = clear;
              } else if (
                details.weather[0].description.toUpperCase() === "RAINY"
              ) {
                img.src = rainy;
              } else if (
                details.weather[0].description.toUpperCase() === "CLOUDY"
              ) {
                img.src = cloudy;
              } else if (
                details.weather[0].description.toUpperCase() === "DRIZZLE"
              ) {
                img.src = drizzle;
              } else if (
                details.weather[0].description.toUpperCase() === "SNOW"
              ) {
                img.src = snow;
              } else if (
                details.weather[0].description.toUpperCase() === "THUNDERSTROMS"
              ) {
                img.src = thunderstorms;
              } else {
                img.src = haze;
              }

              setTimeout(() => {
                img.src = { haze };
                temp.innerText = "";
                desc.innerText = "";
                feel.innerText = "";
                city.innerText = "";
                hum.innerText = "";
                pres.innerText = "";
                min.innerText = "";
                max.innerText = "";
              }, 100000);
            }
          });
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <>
      <Header />
      <main id="weather" className="padding-inline">
        <div className="searchbar">
          <input id="ask" type="text" placeholder="Enter City Name" />
          <button className="transition" onClick={getCity} id="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="showbar flex-wrapper-gap bottom-spacer">
          <div className="container">
            <div className="time">
              <h3>Current Weather</h3>
              <p id="date"></p>
            </div>
            <div className="temp flex-colum">
              <div className="flex-a">
                <img id="img" src="" alt="_" />
                <p id="temp" className="flex"></p>
              </div>
              <div className="feel">
                <p id="description"></p>
                <p id="feels"></p>
              </div>
            </div>
          </div>
          <div className="otherDetails flex-colum-1">
            <div className="small">
              <div className="top-spacer bottom-spacer">
                <p>Min-Temp</p>
                <span id="min"></span>
              </div>
              <div className="bottom-spacer">
                <p>Max-Temp</p>
                <span id="max"></span>
              </div>
            </div>
            <div className="bottom-spacer">
              <p>City</p>
              <span id="city"></span>
            </div>
            <div>
              <div className="bottom-spacer">
                <p>Pressur</p>
                <span id="pres"></span>
              </div>
              <div className="bottom-spacer-3">
                <p>Humidity</p>
                <span id="hum"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Weather;
