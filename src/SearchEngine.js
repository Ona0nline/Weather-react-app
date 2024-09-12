import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("null");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [Humidity, setHumidity] = useState(null);
  let [Wind, setWind] = useState(null);

  function CityChange(event) {
    // console.log(response.data);
    setCity(event.target.value);
  }

  function newCity(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  function Submitted(event) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7784a4cd4aa2e0c25ead7bd96d585b8a&units=metric`;
    axios.get(url).then(newCity);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={Submitted}>
        <input
          onChange={CityChange}
          type="search"
          placeholder="Enter a city.."
        />

        <input type="submit" value="Search" />
      </form>{" "}
      <ul>
        <li>Temperature: {temperature}</li>
        <li>Description: {description}</li>
        <li>Humidity: {Humidity}</li>
        <li>Wind: {Wind}</li>
      </ul>
    </div>
  );
}
