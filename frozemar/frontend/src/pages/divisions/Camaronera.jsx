import React from "react";
import Slider from "react-slick";
import "../divisions/Camaronera.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa tus imágenes
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import derecha from "../../assets/mayor-que-el-simbolo.png";
import izquierda from "../../assets/simbolo-menor-que.png";

// Flecha anterior
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <img src={izquierda} alt="Anterior" />
    </div>
  );
}

// Flecha siguiente
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <img src= {derecha}alt="Siguiente" />
    </div>
  );
}

function Camaronera() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="site-main camaronera">
      <h1>CAMARONERA</h1>
      <h2>ÁREA DE PRODUCCIÓN</h2>
      <h3>+2700 HECTÁREAS DE PRODUCCIÓN</h3>

      {/* Contenedor de texto y testimonio en columnas */}
      <div className="camaronera-body">
        {/* Texto principal */}
        <div className="camaronera-text">
          <p>
            Nuestro grupo cuenta con más de 2700 hectáreas de camaroneras en producción; éstas poseen una infraestructura adecuada para minimizar la presencia de contaminantes. Todas nuestras piscinas han sido certificadas por entes reguladores gubernamentales, trabajamos con larvas certificadas ablacionadas y no ablacionadas de nuestros socios con las mejores prácticas que promueven el bienestar animal.
          </p>
        </div>

        {/* Caja de a lado */}
        <div className="caja-testimonio">
          <p>“Nuestro compromiso es la sostenibilidad y la calidad en cada hectárea cultivada.”</p>
          <span>Producción</span>
        </div>
      </div>

      <h1>Galería</h1>
      
      <Slider {...settings} className="gallery-slider">
        <div><img src={image1} alt="Galería 1" /></div>
        <div><img src={image2} alt="Galería 2" /></div>
        <div><img src={image3} alt="Galería 3" /></div>
        <div><img src={image4} alt="Galería 4" /></div>
        <div><img src={image5} alt="Galería 5" /></div>
      </Slider>
    </section>
  );
}

export default Camaronera;
