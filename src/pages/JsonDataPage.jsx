import React, { useState, useEffect } from 'react';
import weatherHistory from '../data/weatherHistory.json';
import './JsonDataPage.css';

const JsonDataPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    over40: false,
    underMinus5: false,
    minOnly: false,
    maxOnly: false,
  });

  useEffect(() => {
    setData(weatherHistory);
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  const filterData = () => {
    let filtered = [...data];

    // Buscar ciudad (no case sensitive)
    if (search.trim() !== '') {
      filtered = filtered.filter(item =>
        item.city.toLowerCase().includes(search.trim().toLowerCase())
      );
    }

    // Filtros
    if (filters.over40) {
      filtered = filtered.filter(item => item.temperature > 40);
    }
    if (filters.underMinus5) {
      filtered = filtered.filter(item => item.temperature < -5);
    }
    if (filters.minOnly) {
      filtered = filtered.filter(item => item.description.toLowerCase().includes("mínima"));
    }
    if (filters.maxOnly) {
      filtered = filtered.filter(item => item.description.toLowerCase().includes("máxima"));
    }

    return filtered;
  };

  const filteredData = filterData();

  return (
    <div className="json-data-page">
      <h1>Temperaturas Extremas por Ciudad</h1>
      <div className="search-filters-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar ciudad..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="filters-bar">
          <label>
            <input
              type="checkbox"
              name="over40"
              checked={filters.over40}
              onChange={handleFilterChange}
            />
            &nbsp;Temp. &gt; 40°C
          </label>
          &nbsp;&nbsp;
          <label>
            <input
              type="checkbox"
              name="underMinus5"
              checked={filters.underMinus5}
              onChange={handleFilterChange}
            />
            &nbsp;Temp. &lt; -5°C
          </label>
          &nbsp;&nbsp;
          <label>
            <input
              type="checkbox"
              name="minOnly"
              checked={filters.minOnly}
              onChange={handleFilterChange}
            />
            &nbsp;Solo Mínimas
          </label>
          &nbsp;&nbsp;
          <label>
            <input
              type="checkbox"
              name="maxOnly"
              checked={filters.maxOnly}
              onChange={handleFilterChange}
            />
            &nbsp;Solo Máximas
          </label>
        </div>
      </div>
      {filteredData.length > 0 ? (
        <table className="weather-table">
          <thead>
            <tr>
              <th>Ciudad</th>
              <th>Temperatura (°C)</th>
              <th>Descripción</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.city}</td>
                <td>{item.temperature}</td>
                <td>{item.description}</td>
                <td>{new Date(item.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos que coincidan.</p>
      )}
    </div>
  );
};

export default JsonDataPage;