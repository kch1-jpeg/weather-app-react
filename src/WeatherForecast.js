import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2 weather-forecast-day">
            <div className="weather-forecast-date">Thurs</div>
            <WeatherIcon code="broken-clouds-day" size={32} />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">19°</span>
              <span className="weather-forecast-temperature-min">5°</span>
            </div>
          </div>
        </div>
      </div>
    );
}