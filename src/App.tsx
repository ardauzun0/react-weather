import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";
import "./style/App.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const apiKey = ""; // OpenWeatherMap API anahtarınızı buraya ekleyin.

  const fetchWeather = async (city: string) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert("Şehir bulunamadı");
      }
    } catch (error) {
      console.error("Hava durumu alınırken bir hata oluştu:", error);
    }
  };

  return (
    <div>
      <h1 className="title">Hava Durumu Uygulaması</h1>
      <WeatherForm onSearch={fetchWeather} />
      <WeatherInfo weather={weather} />
    </div>
  );
};

export default App;
