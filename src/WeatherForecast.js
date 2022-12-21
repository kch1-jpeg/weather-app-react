import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let apiKey = "b89oa74t3f2022fff569a253b5f033b0";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
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
