import React from "react";
import "./Planta.css";

export default function PlantaProcesadora() {
  return (
    <section className="planta-procesadora">
      <div className="planta-grid">
        
        {/* Columna del video */}
        <div className="planta-video">
          <video autoPlay loop muted playsInline className="video-fondo">
            <source src="/videos/planta.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5
          </video>
          <div className="overlay"></div>
        </div>

        {/* Columna del texto */}
        <div className="planta-texto">
          <h1>Planta Procesadora</h1>
          <h2>Producción con tecnología avanzada</h2>
          <p>
            Nuestra planta procesadora está equipada con maquinaria de última 
            generación que garantiza calidad y eficiencia en cada etapa de la producción.
          </p>
        </div>

      </div>
    </section>
  );
}
