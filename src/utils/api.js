import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${encodeURIComponent(API_KEY)}`
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Clave de API inválida. Verifica tu configuración.');
    }
    throw new Error('Ciudad no encontrada o error en la API');
  }
};

export const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${encodeURIComponent(API_KEY)}`
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Clave de API inválida. Verifica tu configuración.');
    }
    throw new Error('Error al obtener el clima');
  }
};

export const getLocationByIP = async () => {
  try {
    const response = await axios.get('http://ip-api.com/json');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener la ubicación');
  }
};