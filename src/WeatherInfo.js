import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <h1 className="mb-3">{props.data.city}</h1>
        <ul>
          <li className="current-time">Wednesday 7:00</li>
          <li>
            Last Updated: <FormattedDate date={props.data.date} />{" "}
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="weather-temperature">
            <img src={props.data.icon} alt={props.data.description} />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul className="desc">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
