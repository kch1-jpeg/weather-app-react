import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="search-button" />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1 className="mb-4">Lisbon</h1>
            <ul>
              <li className="current-time">Wednesday 7:00</li>
              <li>Last Updated:</li>
              <li> Mostly Cloud</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Mostly cloudy"
                />
                6 °C
              </div>
            </div>
            <div className="col-6">
              <ul className="desc">
                <li>Precipitation: 15%</li>
                <li>Humidity: 72%</li>
                <li>Wind: 13 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
