import React, { useState, useCallback, useEffect } from 'react';
import './GaleriaPage.css';

const imagenes = Array.from({ length: 19 }, (_, i) =>
  new URL(`../assets/galeria/locations-${i + 1}.jpg`, import.meta.url).href
);

const GaleriaPage = () => {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [zoom, setZoom] = useState(false);

  const handleKeyDown = useCallback((e) => {
    if (lightboxIdx !== null) {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft") setLightboxIdx(idx => (idx > 0 ? idx - 1 : idx));
      if (e.key === "ArrowRight") setLightboxIdx(idx => (idx < imagenes.length - 1 ? idx + 1 : idx));
      if (e.key === "z") setZoom(z => !z);
    }
  }, [lightboxIdx]);

  useEffect(() => {
    if (lightboxIdx !== null) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [lightboxIdx, handleKeyDown]);

  return (
    <div className="galeria-page">
      <h1>Galería Interactiva</h1>
      <div className="galeria-grid">
        {imagenes.map((img, idx) => (
          <div key={img} className="galeria-thumb" onClick={() => { setLightboxIdx(idx); setZoom(false); }}>
            <img src={img} alt={`Imagen ${idx + 1}`} />
          </div>
        ))}
      </div>

      {lightboxIdx !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIdx(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setLightboxIdx(null)}>×</button>
            <button className="nav-btn prev" disabled={lightboxIdx === 0} onClick={() => setLightboxIdx(idx => idx - 1)}>‹</button>
            <img
              src={imagenes[lightboxIdx]}
              alt={`Imagen ampliada ${lightboxIdx + 1}`}
              className={zoom ? "zoomed" : ""}
              onClick={() => setZoom(z => !z)}
            />
            <button className="zoom-btn" onClick={() => setZoom(z => !z)}>{zoom ? "–" : "+"}</button>
            <button className="nav-btn next" disabled={lightboxIdx === imagenes.length - 1} onClick={() => setLightboxIdx(idx => idx + 1)}>›</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaPage;