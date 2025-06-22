import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext, ThemeProvider } from './context/ThemeContext.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import WeatherWidget from './components/Weather/WeatherWidget.jsx';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import ProfileIntegrante1 from './components/Profile/ProfileIntegrante1.jsx';
import ProfileIntegrante2 from './components/Profile/ProfileIntegrante2.jsx';

import JsonDataPage from './pages/JsonDataPage.jsx';
import BitacoraPage from './pages/BitacoraPage.jsx';
import './App.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  console.log('Modo oscuro:', isDarkMode); // para confirmar
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
         {isDarkMode ? '☀️' : '🌙'}
      
    </button>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app">
          <Sidebar />
          <div className="content">
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile/integrante1" element={<ProfileIntegrante1 />} />
              <Route path="/profile/integrante2" element={<ProfileIntegrante2 />} />
              <Route path="/json-data" element={<JsonDataPage />} />
              <Route path="/bitacora" element={<BitacoraPage />} />
            </Routes>
          </div>
          {/* <WeatherWidget /> */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;