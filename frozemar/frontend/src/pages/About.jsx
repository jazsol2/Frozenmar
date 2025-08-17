import React, { useState } from "react";
import "./about.css";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="aboutus site-main">
      <h1>¿Quiénes Somos?</h1>
      <p>
        En Frozenmar somos una microempresa ecuatoriana dedicada a la venta por
        mayor y menor de mariscos, comprometida con ofrecer productos del mar de
        la más alta calidad.
      </p>

      {showMore && (
        <div className="aboutus-more">
          <p>
            Aunque somos una empresa pequeña, nos destacamos por la excelencia,
            frescura y trazabilidad de cada uno de nuestros productos.
          </p>
          <p>
            Frozenmar existe para acercar los sabores del océano a las mesas de
            nuestros clientes, con confianza y transparencia.
          </p>
        </div>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Leer menos" : "Leer más"}
      </button>

      <div className="aboutus-grid">
        <div className="aboutus-card">
          <h3>Misión</h3>
          <p>
            Brindar mariscos frescos, seguros y de excelente calidad, tanto al
            por mayor como al por menor, con responsabilidad y compromiso.
          </p>
        </div>

        <div className="aboutus-card">
          <h3>Visión</h3>
          <p>
            Ser una microempresa referente en el sector de mariscos en Ecuador,
            reconocida por calidad, ética y compromiso con el medio ambiente.
          </p>
        </div>

        <div className="aboutus-card">
          <h3>Historia</h3>
          <p>
            Frozenmar nació gracias a la visión de su fundador y hoy es una
            microempresa rentable en constante crecimiento, con un equipo
            consolidado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
