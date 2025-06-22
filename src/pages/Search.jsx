import React, { useState } from 'react';
import WeatherSearch from '../components/Weather/WeatherSearch.jsx';
import WeatherCard from '../components/Weather/WeatherCard.jsx';
import './Search.css';

const Search = () => {
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearchResult = (weatherData) => {
    if (weatherData && !recentSearches.find((item) => item.id === weatherData.id)) {
      setRecentSearches([weatherData, ...recentSearches.slice(0, 4)]);
    }
  };

  return (
    <div className="search-page">
      <h1>Buscar Clima</h1>
      <WeatherSearch onSearchResult={handleSearchResult} />
      {recentSearches.length > 0 && (
        <section className="recent-searches">
          <h2>Búsquedas Recientes</h2>
          <div className="recent-searches-grid">
            {recentSearches.map((weather) => (
              <WeatherCard key={weather.id} weather={weather} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Search;