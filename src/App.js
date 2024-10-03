import { useState, useRef } from "react";

import Weather from "./Weather";
import "./index.css"


export default function App() {

  const inputRef = useRef();

  const [weather, setWeather] = useState(false)
  const apiKey = "1c44096a4224c99b176b4ff010f4dd17"





  const fetchWeather = async (search) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`);
    console.log(response)
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setWeather({
        name: data.name,
        temp: data.main.temp,
        sky: data.weather[0].main,
        lat: data.coord.lat,
        lon: data.coord.lon
      });
    } else {
      setWeather({ name: "", temp: "", sky: "", lat: "", lon: "" });
    }

  }








  return (
    <div className="h-screen flex flex-col  justify-center bg-slate-400">


      <div className="bg-slate-500 w-1/4 mx-auto p-4 rounded-2xl">
        <div className="flex justify-center m-5">
          <input className="rounded-lg py-2 px-3" type="text" ref={inputRef} />
          {inputRef ? <button className="bg-slate-200 py-2 px-3 mx-1 rounded-lg" onClick={() => fetchWeather(inputRef.current.value)}>Search</button> : ""}
        </div>

        <Weather weather={weather} />
      </div>


    </div>
  );
}