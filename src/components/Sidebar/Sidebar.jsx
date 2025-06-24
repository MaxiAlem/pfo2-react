import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaUser, FaDatabase, FaBook, FaBars, FaImages } from "react-icons/fa";
import "./Sidebar.css";
import climaLogo from '../../assets/clima.png'; // Ajusta la ruta según la ubicación

const Sidebar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      console.log("Mouse entered sidebar");
      setExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      console.log("Mouse left sidebar");
      setExpanded(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className={`sidebar ${isExpanded || isMobileMenuOpen ? "expanded" : "collapsed"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ pointerEvents: "auto", zIndex: 1000 }}
      >
        <div className="sidebar-header">
          <img
            src={climaLogo}
            alt="Clima Logo"
            className="sidebar-logo"
          />
          <h2 className="sidebar-title">Weather App</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} end>
                <FaHome className="nav-icon" />
                <span className="nav-text">Inicio</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" className={({ isActive }) => (isActive ? "active" : "")}>
                <FaSearch className="nav-icon" />
                <span className="nav-text">Buscar</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile/integrante1"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <FaUser className="nav-icon" />
                <span className="nav-text">Integrante 1</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile/integrante2"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <FaUser className="nav-icon" />
                <span className="nav-text">Integrante 2</span>
              </NavLink>
            </li>
           
            <li>
              <NavLink to="/json-data" className={({ isActive }) => (isActive ? "active" : "")}>
                <FaDatabase className="nav-icon" />
                <span className="nav-text">Datos JSON</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/galeria" className={({ isActive }) => (isActive ? "active" : "")}>
                <FaImages className="nav-icon" />
                <span className="nav-text">Galeria</span>
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/bitacora" className={({ isActive }) => (isActive ? "active" : "")}>
                <FaBook className="nav-icon" />
                <span className="nav-text">Bitácora</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <button
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <FaBars />
      </button>
    </>
  );
};

export default Sidebar;