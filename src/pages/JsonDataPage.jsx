import React, { useState, useEffect } from 'react';
import weatherHistory from '../data/weatherHistory.json';
import './JsonDataPage.css';

const JsonDataPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(weatherHistory);
  }, []);

  return (
    <div className="json-data-page">
      <h1>Historial de Clima</h1>
      {data.length > 0 ? (
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
            {data.map((item) => (
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
        <p>No hay datos disponibles.</p>
      )}
    </div>
  );
};

export default JsonDataPage;