import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { SiMysql, SiMongodb, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiJavascript, SiShopify, SiZapier } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import './ProfileIntegrante1.css';

//profile
import terricola from '../../assets/ProfileIntegrante1/terricola.webp'
//pelis
import the_thing from '../../assets/ProfileIntegrante1/the_thing.jpg'
import the_warriors from '../../assets/ProfileIntegrante1/Thewarriors.webp'
import marsAttack from '../../assets/ProfileIntegrante1/marsAttack.jpg';


const proyectos = [
  {
    titulo: "Club Cars One",
    descripcion: "Servicio de información y acceso a descuentos en el rubro automotor mediante suscripción.",
    tecnologias: "React, Node.js, MercadoPago API, SQL, OpenStreetMap, Sequelize"
  },
  {
    titulo: "Sistema de turnos para clínica",
    descripcion: "Gestión de turnos con calendario interactivo para clínica médica.",
    tecnologias: "React, Full Calendar, Node.js, SQL, Sequelize"
  },
  {
    titulo: "Ecommerce Vitahub",
    descripcion: "Tienda online de suplementos vitamínicos con integraciones automatizadas.",
    tecnologias: "Liquid, Shopify, n8n, Odoo, BigQuery"
  }
];
const skills = [
  { name: "SQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "JS Vanilla", icon: <SiJavascript /> },
  { name: "Liquid/Shopify", icon: <SiShopify /> },
  { name: "n8n", icon: <SiZapier /> },
];

const favoriteMovies = [
  {
    title: 'The Thing',
    image: the_thing,
  },
  {
    title: 'The Warriors',
    image: the_warriors,
  },
  {
    title: 'Mars Attack!',
    image: marsAttack,
  },
];


const ProfileIntegrante1 = () => {

  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <section className={`profile-card ${isDarkMode ? 'dark' : ''}`}>
      <div className="card-container">
        <div className="card-image">
          <img src={terricola} alt="Foto de perfil" />
        </div>
        <div className="card-text">
          <h2>Hola</h2>
          <p>De día soy desarrollador web y de noche una sailor scout que lucha por el amor y la justicia.</p>
        </div>
      </div>
    </section>
    
      {/* Cards proyectos */}
      <section className="projects-section">
      <h2>Algunos proyectitos</h2>
      <div>
        {proyectos.map(({ titulo, descripcion, tecnologias }, i) => (
        <div key={i} className="project-card">
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
          <p><strong>Tecnologías:</strong> {tecnologias}</p>
        </div>
      ))}
        </div>
      
    </section>

    <section className="skills-container">
    <h2>Herramientas con las que suelo trabajar</h2>
      {skills.map(({ name, icon }, i) => (
        <div key={i} className="skill-item">
          <div className="skill-icon">{icon}</div>
          <p>{name}</p>
        </div>
      ))}
    </section>

    <section className="movies-section">
  <h2>Películas para un domingo a la tarde en canal de aire</h2>
  <div className="movies-grid">
    {favoriteMovies.map((movie, i) => (
      <div key={i} className="movie-card">
        <img src={movie.image} alt={movie.title} className="movie-image" />
        <p className="movie-title">{movie.title}</p>
      </div>
    ))}
  </div>
</section>


    </>
  );
};

export default ProfileIntegrante1;
