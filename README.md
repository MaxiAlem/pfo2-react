# Weather App - TPG1

Aplicación web para explorar el clima global, buscar ciudades, mostrar un widget en tiempo real, y documentar el desarrollo.

## Instalación
1. Clona el repositorio: `git clone <URL>`
2. Instala dependencias: `npm install`
3. Crea `.env` con: `VITE_OPENWEATHER_API_KEY=tu_clave`
4. Ejecuta: `npm run dev`
5. Construye: `npm run build`
6. Previsualiza: `npm run preview`

## Estructura
- `src/components/Weather/`: Carrusel, buscador, widget.
- `src/components/Sidebar/`: Barra de navegación.
- `src/pages/`: Home, Search, Profiles, JsonData, Bitacora.
- `src/utils/api.js`: Llamadas a la API de OpenWeather.
- `src/data/`: Archivos JSON (weatherHistory.json).

## Funcionalidades
- **Inicio**: Carrusel con clima de ciudades globales.
- **Buscar**: Buscador de ciudades con historial de búsquedas.
- **Perfiles**: Información de los integrantes.
- **Datos JSON**: Tabla con historial de clima.
- **Bitácora**: Documentación del desarrollo.
- **Widget**: Clima basado en geolocalización por IP.

## Contribuciones
- **Integrante 1 (Juan Pérez)**: Diseñó Home.jsx y Sidebar.jsx.
- **Integrante 2 ([Tu Nombre])**: Desarrolló WeatherCarousel, WeatherSearch, WeatherWidget, perfiles, JsonDataPage, BitacoraPage, y resolvió errores.
- **Integrante 3 (María Gómez)**: Gestionó datos JSON y bitácora.

## Tecnologías
- React, Vite, React Router, Axios, react-slick, OpenWeather API.

## Capturas
- [Añade capturas de pantalla de cada página]

## Notas
- Asegúrate de tener una clave válida de OpenWeather API.
- El proyecto es responsivo y optimizado para producción.