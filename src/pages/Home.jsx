import React, { useEffect } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'; // Importar NavLink
import { ThemeContext } from '../context/ThemeContext'; // Ajusta la ruta según tu estructura
import WeatherCarousel from '../components/Weather/WeatherCarousel.jsx';
import alexImg from '../assets/ProfileIntegrante2/profile.jpg'; // Imagen de Alex
import alemImg from '../assets/ProfileIntegrante1/profile.jpg'; // Imagen de Alem
import './Home.css';

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const teamMembers = [
    {
      name: 'Alex Code',
      image: alexImg,
      alt: 'Foto de Alex Code',
      profileLink: '/profile/integrante2', // Ruta para Alex
    },
    {
      name: 'Alem Maxi',
      image: alemImg,
      alt: 'Foto de Alem Maxi',
      profileLink: '/profile/integrante1', // Ruta para Alem
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.team-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <div className={`home-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="hero">
        <h1>Weather App</h1>
        <p>Explora el clima global, busca ciudades, y mantente informado con nuestro widget en tiempo real.</p>
      </header>
      <section className="carousel-section">
        <WeatherCarousel />
      </section>
      <section className="presentation">
        <h2>Nuestro Equipo</h2>
        <p>Conoce a los desarrolladores detrás de Weather App, apasionados por crear soluciones innovadoras.</p>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <NavLink key={index} to={member.profileLink} className="team-card-link">
              <div className="team-card fade-in">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="team-img"
                  onError={() => console.error(`Failed to load ${member.alt}`)}
                />
                <h3>{member.name}</h3>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;