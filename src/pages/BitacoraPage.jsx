import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Ajusta la ruta
import './BitacoraPage.css';

const BitacoraPage = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const entries = [
    {
      date: '2025-05-15',
      task: 'Configuración inicial del proyecto',
      member: 'Alex Code',
      details: 'Inicializó el proyecto con Vite, instaló React, React Router, y react-icons. Configuró ESLint y Prettier.',
    },
    {
      date: '2025-05-16',
      task: 'Creación de la estructura de rutas',
      member: 'Alem Maxi',
      details: 'Configuró React Router con rutas: /, /search, /profile/integrante1, /profile/integrante2, /json-data, /bitacora.',
    },
    {
      date: '2025-05-18',
      task: 'Implementación del Sidebar con logo clima.png',
      member: 'Alex Code',
      details: 'Creó Sidebar.jsx con navegación, logo, y toggle para móvil. Añadió estilos iniciales en Sidebar.css.',
    },
    {
      date: '2025-05-20',
      task: 'Diseño de ThemeContext para modo dark/light',
      member: 'Alem Maxi',
      details: 'Implementó ThemeContext.jsx con localStorage y paleta de colores (#3b5897, #ffcc00, etc.).',
    },
    {
      date: '2025-05-22',
      task: 'Creación de ProfileIntegrante2 con datos iniciales',
      member: 'Alex Code',
      details: 'Añadió nombre ("Alex Code"), 5 tecnologías, 3 proyectos, y formulario básico en ProfileIntegrante2.jsx.',
    },
    {
      date: '2025-05-25',
      task: 'Integración de OpenWeather API en Weather Widget',
      member: 'Alem Maxi',
      details: 'Creó WeatherWidget.jsx con datos climáticos y fotos de Pixabay. Añadió estilos iniciales.',
    },
    {
      date: '2025-05-27',
      task: 'Corrección de importación de FaReact en ProfileIntegrante2',
      member: 'Alex Code',
      details: 'Solucionó error de importación (react-icons/fa) que causaba página en blanco.',
    },
    {
      date: '2025-05-29',
      task: 'Mejoras en ProfileIntegrante2: imagen centrada, footer, hover',
      member: 'Alem Maxi',
      details: 'Centró imagen de perfil, movió enlaces sociales a footer fijo, añadió hover en películas.',
    },
    {
      date: '2025-06-01',
      task: 'Corrección del hover inestable en Sidebar',
      member: 'Alex Code',
      details: 'Añadió debounce (300ms) en onMouseLeave para estabilizar el hover del sidebar.',
    },
    {
      date: '2025-06-02',
      task: 'Creación de BitacoraPage',
      member: 'Alem Maxi',
      details: 'Implementó BitacoraPage.jsx con registros de avances y estilos responsive.',
    },
    {
      date: '2025-06-02',
      task: 'Implementación de hora en Weather Widget',
      member: 'Alem Maxi',
      details: 'Planificado añadir toLocaleTimeString() en WeatherWidget.jsx.',
    },
    {
      date: '2025-06-02',
      task: 'Creación de JsonDataPage',
      member: 'Alex Code',
      details: 'Planificado mostrar datos de data.json en /json-data.',
    },
    {
      date: '2025-06-02',
      task: 'Despliegue en Vercel',
      member: 'Alem Maxi',
      details: 'Planificado subir el repositorio a GitHub y desplegar en Vercel.',
    },
    {
      date: '2025-06-02',
      task: 'Documentación en README',
      member: 'Alex Code',
      details: 'Planificado escribir README.md con descripción, instalación, y enlaces.',
    },
    {
      date: '2025-06-15',
      task: 'Decidimos cambios a aplicar',
      member: 'Alex Code',
      details: 'de las diferentes opciones de merjoras a escoger, resolvimos elegir algunas que nos resultaban mas interesantes y que respondian a las posibilidades de nuestra web (ej: la paginacion de la api no era una opcion valida para nuestro caso)',
    },
    {
      date: '2025-06-15',
      task: 'Clonamos Repo',
      member: 'Alex Code',
      details: 'clonamos el repo original para poder generar los cambios para la nueva entrega',
    },
    {
      date: '2025-06-17',
      task: 'primer cambio: json con filtro y buscador',
      member: 'Maxi Alem',
      details: 'Expandimos el json local, aplicamos el buscador y algunos filtros',
    },
    {
      date: '2025-06-18',
      task: 'Salieron un umk3',
      member: 'Maxi Alem',
      details: 'X Z X Z Z X Z X Z C A',
    },
    {
      date: '2025-06-20',
      task: 'segundo cambio: Mejoras en los links social media',
      member: 'Alex Code',
      details: 'arreglos de urls falsas, uso de icons y animacion con el hoover',
    },
    {
      date: '2025-06-21',
      task: 'Arreglo de colores en general',
      member: 'Alex Code',
      details: 'mejora en el uso de la paleta para evitar contrastes muy bajos',
    },
    {
      date: '2025-06-21',
      task: 'tercer cambio: grid de imagenes',
      member: 'Maxi Alem',
      details: 'pagina nueva con un grid de imagenes con lightbox, salida del modal con boton ce cierre y con "Esc", paseo entre imagenes con boton de navegacion',
    },
    {
      date: '2025-06-22',
      task: 'Mejora en visuales. transicion de paginas tipo diapositivas',
      member: 'Alex Code',
      details: 'para complicarla un poco cerca del dia de entrega nos pusimos a jugar con el css para sacar una transicion entre paginas animada',
    },
    {
      date: '2025-06-23',
      task: 'subimos a git los ultimos cambios, deployeamos en vercel configuramos los .env y cruzamos los dedos',
      member: 'Maxi Alem',
      details: 'para complicarla un poco cerca del dia de entrega nos pusimos a jugar con el css para sacar una transicion entre paginas animada',
    },
    {
      date: '2025-06-23',
      task: 'un dust_2 en el 1.6 mientras esperamos el deploy',
      member: 'Alex Code',
      details: '',
    },
  ];

  return (
    <div className={`bitacora ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Bitácora del Proyecto</h2>
      <div className="bitacora-table">
        <div className="bitacora-header">
          <span>Fecha</span>
          <span>Tarea</span>
          <span>Integrante</span>
          <span>Detalles</span>
        </div>
        {entries.map((entry, index) => (
          <div key={index} className={`bitacora-row ${entry.pending ? 'pending' : ''}`}>
            <span>{entry.date}</span>
            <span>{entry.task}</span>
            <span>{entry.member}</span>
            <span>{entry.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BitacoraPage;