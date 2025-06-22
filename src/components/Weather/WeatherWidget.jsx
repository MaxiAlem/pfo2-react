import React, { useState } from 'react';
import WeatherCard from './WeatherCard.jsx';
import { getWeatherByCity } from '../../utils/api';
import './Weather.css';

const WeatherSearch = ({ onSearchResult }) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
      setError('');
      if (onSearchResult) onSearchResult(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="weather-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ingresa una ciudad"
          className="search-input"
        />
        <button type="submit" className="search-button">Buscar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default WeatherSearch;