import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// My Weather API Key = e76e0eeca0d81341cc49b6e6db4b4600
// My Weather API URL = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// main.temp , weather[0].main , wind.speed , main.humidity
//<i class="bi bi-clouds-fill"></i>
//<i class="bi bi-wind"></i>
//<i class="bi bi-cloud-rain-fill"></i>
//<i class="bi bi-cloud-sun-fill"></i>
//<i class="bi bi-thermometer-sun"></i>
function App() {
  const [cityName, setCityName] = useState("Hm Mm ?!");
  const [weather, setWeather] = useState({
    main: "------",
    temp: "--",
    humidity: "--",
    wind: "--",
  });
  const API_KEY = "e76e0eeca0d81341cc49b6e6db4b4600";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;
  const handleSubmit = async () => {
    try {
      const data = await fetch(API_URL).then((response) => response.json());
      setWeather({
        main: data.weather[0].main,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <div
          className="holder"
          style={{ backgroundImage: `url(${weather.img})` }}
        >
          <h1>Weather App</h1>
          <div className="main">
            <header
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <input
                type="text"
                onChange={(e) => setCityName(e.target.value)}
                placeholder="Enter City Name"
                className="form-control"
                style={{
                  width: "30vmin",
                  height: "5vmin",
                  fontSize: "2vmin",
                }}
              />
              <button
                style={{
                  width: "10vmin",
                  height: "5vmin",
                  fontSize: "2vmin",
                  textAlign: "center",
                }}
                onClick={handleSubmit}
                className="btn btn-primary"
              >
                Search
              </button>
            </header>
          </div>
          <div className="weather">
            <h2>{cityName}</h2>
            <div
              className="weatherCndtn"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
              <i
                class={
                  weather.main === "Clouds"
                    ? "bi bi-clouds-fill"
                    : weather.main === "Rain"
                    ? "bi bi-cloud-rain-fill"
                    : weather.main === "Clear"
                    ? "bi bi-cloud-sun-fill"
                    : "bi bi-cloud-sun-fill"
                }
                style={{
                  // marginTop: "1vmin",
                  marginLeft: "6vmin",
                }}
              ></i>
              <h3 style={{ marginLeft: "5vmin" }}>{weather.main}</h3>
              <i
                class="bi bi-thermometer-sun"
                style={{
                  position: "absolute",
                  bottom: "10vmin",
                  marginLeft: "7vmin",
                }}
              ></i>
              <label
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "8vmin",
                  fontSize: "2vmin",
                  left: "3.5vmin",
                  fontWeight: "bold",
                }}
                htmlFor=""
              >
                Temparature
              </label>
              <h2
                style={{
                  marginLeft: "4vmin",
                  position: "absolute",
                  bottom: "3.5vmin",
                  fontSize: "3vmin",
                  left: "1.2vmin",
                }}
              >
                {weather.temp && `${weather.temp}°F`}
                {/* <sup style={{color: "black"}}>o</sup> */}
              </h2>
              <i
                class="bi bi-wind"
                style={{ position: "absolute", top: "0", right: "10vmin" }}
              ></i>
              <label
                htmlFor=""
                style={{
                  color: "white",
                  position: "absolute",
                  top: "9vmin",
                  right: "11.5vmin",
                  fontSize: "2vmin",
                  fontWeight: "bold",
                }}
              >
                Wind
              </label>
              <h3
                style={{
                  marginLeft: "0.5vmin",
                  position: "absolute",
                  fontSize: "3vmin",
                  top: "12vmin",
                  right: "8vmin",
                }}
              >
                {weather.wind && `${weather.wind}MPH`}
              </h3>
              <i
                class="bi bi-droplet"
                style={{
                  position: "absolute",
                  bottom: "10vmin",
                  right: "10vmin",
                }}
              ></i>
              <label
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "8vmin",
                  fontSize: "2vmin",
                  right: "9vmin",
                  fontWeight: "bold",
                }}
                htmlFor=""
              >
                Humidity
              </label>
              <h2
                style={{
                  marginTop: "1vmin",
                  marginLeft: "2.5vmin",
                  position: "absolute",
                  bottom: "3.5vmin",
                  fontSize: "3vmin",
                  right: "10vmin",
                }}
              >
                {weather.humidity && `${weather.humidity}%`}
                {/* <sup>o</sup> */}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
