import React from "react";
import { Link } from "react-router-dom"; // Para el botón de navegación interna

const Home = () => {
  return (
    <main>
      {/* ==================== Banner / Hero ==================== */}
      <section className="hero">
        <div className="hero-content">
          <h1>Frozenmar</h1>
          <p className="hero-frase">Calidad del mar en cada momento</p>
        </div>
      </section>

      {/* ==================== Quiénes Somos (resumen) ==================== */}
      <section className="home-quienes-somos">
        <h2>Quiénes Somos</h2>
        <p>
          En Frozenmar somos una microempresa ecuatoriana dedicada a la venta por mayor y menor de mariscos,
          comprometida con ofrecer productos del mar de la más alta calidad. Nos destacamos por la frescura, la
          calidad y la trazabilidad de nuestros productos, buscando ser un aliado confiable para restaurantes,
          negocios y familias.
        </p>
        <Link to="/about" className="btn">
          Conoce más
        </Link>
      </section>

      {/* ==================== Misión y Visión resumidas ==================== */}
      <section className="mision-vision">
        <div className="card">
          <h3>Misión</h3>
          <p>
            Brindar mariscos frescos, seguros y de excelente calidad, apoyando prácticas sostenibles y el desarrollo
            de comunidades pesqueras locales.
          </p>
        </div>
        <div className="card">
          <h3>Visión</h3>
          <p>
            Ser un referente en el sector de mariscos en Ecuador, combinando calidad, ética y compromiso ambiental,
            expandiendo nuestra presencia sin perder nuestra cercanía y confiabilidad.
          </p>
        </div>
      </section>

      {/* ==================== Instalaciones y Equipación ==================== */}
      <section className="instalaciones-equipacion">
        <h2>Nuestras Instalaciones y Equipación</h2>
        <div className="grid">
          <div className="card">
            <h4>Instalaciones</h4>
            <p>
              Contamos con contenedores como bodegas acondicionadas y oficinas donde se gestiona toda la administración,
              permitiendo eficiencia, organización y un servicio confiable.
            </p>
          </div>
          <div className="card">
            <h4>Equipación</h4>
            <p>
              Pesas digitales, cortadora industrial, selladora al vacío profesional y equipos de bioseguridad para
              garantizar frescura, calidad y seguridad en todos nuestros procesos.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== Productos Destacados ==================== */}
      <section className="productos-destacados">
        <h2>Productos Destacados</h2>
        <div className="grid">
          <div className="card">Camarón 36/40 Shellón – $2.40 la libra</div>
          <div className="card">Calamar baby – $4.00 la libra</div>
          <div className="card">Pulpo para ceviche – $4.00 la libra</div>
          <div className="card">Filete de salmón – $7.00 la libra</div>
          <div className="card">Camarón 16/20 Shellón – $3.50 la libra</div>
          <div className="card">Dorado en filete – $2.00 la libra</div>
        </div>
        <Link to="/productos" className="btn">
          Ver todos los productos
        </Link>
      </section>

      {/* ==================== Ubicación ==================== */}
      <section className="ubicacion">
        <h2>Ubicación</h2>
        <p>
          Nos encontramos en el Km 9.5 de la Vía Daule, junto a la planta de Pepsi y a cuatro cuadras de los almacenes
          Pycca, Guayaquil, Ecuador.
        </p>
        {/* Aquí puedes agregar un mapa o iframe de Google Maps */}
      </section>

      {/* ==================== Contacto ==================== */}
      <section className="contacto">
        <h2>Contacto</h2>
        <p>Teléfonos: 0979608091 | 0939410706 | 0962724577</p>
        <p>Correo: Frozenmar2014@gmail.com</p>
      </section>
    </main>
  );
};

export default Home;
