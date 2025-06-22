import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WeatherCard from './WeatherCard.jsx';
import { getWeatherByCity } from '../../utils/api';
import './Weather.css';

const WeatherCarousel = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const cities = ['Tokyo', 'New York', 'London', 'Sydney', 'Buenos Aires', 'Paris', 'Cape Town'];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const promises = cities.map(city => getWeatherByCity(city));
        const responses = await Promise.all(promises);
        setWeatherData(responses);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="weather-carousel">
      <h2>Clima en Ciudades del Mundo</h2>
      {loading && <p>Cargando...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <Slider {...settings}>
          {weatherData.map((data, index) => (
            <WeatherCard key={index} weather={data} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default WeatherCarousel;