import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { SiHtml5, SiCss3, SiJavascript, SiGit } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaReact } from 'react-icons/fa';
import profileImg from '../../assets/ProfileIntegrante2/profile.jpg';
import project1Img from '../../assets/ProfileIntegrante2/project1.jpg';
import project2Img from '../../assets/ProfileIntegrante2/project2.jpg';
import project3Img from '../../assets/ProfileIntegrante2/project3.JPG';
import interstellarImg from '../../assets/ProfileIntegrante2/interstellar.jpg';
import elPadrinoImg from '../../assets/ProfileIntegrante2/El_padrino.jpg';
import matrixImg from '../../assets/ProfileIntegrante2/the_matrix.jpg';

import './ProfileIntegrante2.css';

const ProfileIntegrante2 = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [formErrors, setFormErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const nombre = e.target.nombre.value.trim();
    const apellido = e.target.apellido.value.trim();
    const email = e.target.email.value.trim();
    const telefono = e.target.telefono.value.trim();
    const errors = {};

    if (!nombre) errors.nombre = 'El nombre es obligatorio';
    if (!apellido) errors.apellido = 'El apellido es obligatorio';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Ingrese un email válido';
    if (!telefono || !/^\d{10}$/.test(telefono)) errors.telefono = 'Ingrese un teléfono válido (10 dígitos)';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setShowPopup(true);
      e.target.reset();
    }
    setIsSubmitting(false);
  };

  const proyectos = [
    {
      imagen: project1Img,
      alt: 'Proyecto 1: Aplicación de Tareas',
      titulo: 'Aplicación de Tareas',
      descripcion: 'Una app para gestionar tareas diarias con interfaz minimalista.',
    },
    {
      imagen: project2Img,
      alt: 'Proyecto 2: Tienda Online',
      titulo: 'Tienda Online',
      descripcion: 'Plataforma de comercio electrónico con carrito dinámico.',
    },
    {
      imagen: project3Img,
      alt: 'Proyecto 3: Weather App',
      titulo: 'Weather App',
      descripcion: 'Aplicación de clima con datos de OpenWeather y fotos de Pixabay.',
    },
  ];

  const peliculas = [
    {
      imagen: interstellarImg,
      alt: 'Póster de Interestelar',
      titulo: 'Interestelar',
      descripcion: 'Una obra maestra de la ciencia ficción que explora el tiempo y el espacio.',
    },
    {
      imagen: elPadrinoImg,
      alt: 'Póster de El Padrino',
      titulo: 'El Padrino',
      descripcion: 'Un clásico sobre poder y familia, con actuaciones inolvidables.',
    },
    {
      imagen: matrixImg,
      alt: 'Póster de Matrix',
      titulo: 'Matrix',
      descripcion: 'Revolucionó el género con su mezcla de acción y filosofía.',
    },
  ];

  useEffect(() => {
    const images = document.querySelectorAll('.fade-in');
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

    images.forEach((img) => observer.observe(img));

    return () => images.forEach((img) => observer.unobserve(img));
  }, []);

  return (
    <div className="profile-container">
      <main className={`profile ${isDarkMode ? 'dark-mode' : ''}`}>
        <section id="sobre-mi">
          <h2>Alex Code</h2>
          <p>
            Soy Alex, un apasionado desarrollador web con interés en crear soluciones digitales innovadoras. Mi misión es construir interfaces intuitivas y accesibles, combinando creatividad y tecnología.
          </p>
          <img
            src={profileImg}
            alt="Avatar de Alex Code"
            className="profile-img fade-in"
            onError={() => console.error('Failed to load profile image')}
          />
        </section>

        <section id="tarjetas">
          <h2>Mis Proyectos</h2>
          <div className="tarjetas-container">
            {proyectos.map((proyecto, index) => (
              <div key={index} className="tarjeta">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.alt}
                  className="fade-in"
                  onError={() => console.error(`Failed to load ${proyecto.alt}`)}
                />
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="habilidades">
          <h2>Habilidades</h2>
          <div className="tecnologias">
            <div className="tecnologia">
              <SiHtml5 size={50} color="var(--accent-color)" />
              <span>HTML5</span>
            </div>
            <div className="tecnologia">
              <SiCss3 size={50} color="var(--accent-color)" />
              <span>CSS3</span>
            </div>
            <div className="tecnologia">
              <SiJavascript size={50} color="var(--accent-color)" />
              <span>JavaScript</span>
            </div>
            <div className="tecnologia">
              <FaReact size={50} color="var(--accent-color)" />
              <span>React</span>
            </div>
            <div className="tecnologia">
              <SiGit size={50} color="var(--accent-color)" />
              <span>Git</span>
            </div>
          </div>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
            {formErrors.nombre && <p className="error">{formErrors.nombre}</p>}
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required />
            {formErrors.apellido && <p className="error">{formErrors.apellido}</p>}
            <label htmlFor="email">Correo:</label>
            <input type="email" id="email" name="email" required />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
            <label htmlFor="telefono">Teléfono:</label>
            <input type="text" id="telefono" name="telefono" required />
            {formErrors.telefono && <p className="error">{formErrors.telefono}</p>}
            <button type="submit" disabled={isSubmitting}>Enviar</button>
          </form>
        </section>

        <section id="peliculas">
          <h2>Mis Películas Favoritas</h2>
          <div className="peliculas-container">
            {peliculas.map((pelicula, index) => (
              <div key={pelicula.titulo} className="pelicula">
                <h3>{pelicula.titulo}</h3>
                <img
                  src={pelicula.imagen}
                  alt={pelicula.alt}
                  className="fade-in pelicula-img"
                  onError={() => console.error(`Failed to load ${pelicula.alt}`)}
                />
                <p>{pelicula.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {showPopup && (
          <div className="popup active">
            <div className="popup-content">
              <h3>¡Formulario Enviado!</h3>
              <p>Gracias por contactarme, te responderé pronto.</p>
              <button onClick={() => setShowPopup(false)}>Cerrar</button>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
  <div className="social-links">
    <a href="https://www.linkedin.com/in/pablomiglesias" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-link">
      <FaGithub />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-link">
      <FaLinkedin />
    </a>
    <a href="https://x.com/pm_iglesias" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="icon-link">
      <FaTwitter />
    </a>
  </div>
</footer>
    </div>
  );
};

export default ProfileIntegrante2;