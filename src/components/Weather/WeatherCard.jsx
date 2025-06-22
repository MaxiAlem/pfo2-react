import React, { useEffect, useState } from 'react';
import './Weather.css';

const WeatherCard = ({ weather }) => {
  const city = weather.name;
  const pixabayApiKey = import.meta.env.VITE_PIXABAY_API_KEY;
  const [cityImage, setCityImage] = useState('');

  useEffect(() => {
    // Generar un timestamp para evitar caché
    const timestamp = new Date().getTime();
    const imageUrl = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(
      city
    )}&image_type=photo&per_page=10&timestamp=${timestamp}`;

    fetch(imageUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.hits && data.hits.length > 0) {
          // Seleccionar una imagen aleatoria
          const randomIndex = Math.floor(Math.random() * data.hits.length);
          setCityImage(data.hits[randomIndex].webformatURL);
        } else {
          setCityImage('https://via.placeholder.com/300x200?text=No+Image');
        }
      })
      .catch((error) => {
        console.error('Error fetching Pixabay image:', error);
        setCityImage('https://via.placeholder.com/300x200?text=Error');
      });
  }, [city, pixabayApiKey]);

  return (
    <div className="weather-card" style={{ backgroundImage: `url(${cityImage})` }}>
      <div className="weather-card-content">
        <h3>{city}</h3>
        <p>{weather.main.temp} °C</p>
        <p>{weather.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="weather icon"
          className="weather-icon"
        />
      </div>
    </div>
  );
};

export default WeatherCard;