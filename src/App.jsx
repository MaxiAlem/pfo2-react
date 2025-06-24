import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeContext, ThemeProvider } from './context/ThemeContext.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import WeatherWidget from './components/Weather/WeatherWidget.jsx';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import ProfileIntegrante1 from './components/Profile/ProfileIntegrante1.jsx';
import ProfileIntegrante2 from './components/Profile/ProfileIntegrante2.jsx';
import JsonDataPage from './pages/JsonDataPage.jsx';
import BitacoraPage from './pages/BitacoraPage.jsx';
import GaleriaPage from './pages/GaleriaPage.jsx';
import './App.css';


const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
         {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

// Wrapper para aplicar la transicion de paginas. en que nos metimos dios mio
function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("active");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("");
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === "") {
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("active");
      }, 400); // timeout iguial que en el CSS
      return () => clearTimeout(timeout);
    }
  }, [transitionStage, location]);

  return (
    <div className={`page-slide ${transitionStage}`}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile/integrante1" element={<ProfileIntegrante1 />} />
        <Route path="/profile/integrante2" element={<ProfileIntegrante2 />} />
        <Route path="/json-data" element={<JsonDataPage />} />
        <Route path="/bitacora" element={<BitacoraPage />} />
        <Route path='/galeria' element={<GaleriaPage/>}/>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app">
          <Sidebar />
          <div className="content">
            <ThemeToggle />
            <AnimatedRoutes />
          </div>
          {/* <WeatherWidget /> */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;