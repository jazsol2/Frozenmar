import React, { useState } from "react";
import "./Contact.css";

const Contactenos = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("¡Formulario enviado!");
    setFormData({ nombre: "", correo: "", asunto: "", mensaje: "" });
  };

  return (
    <div className="contactenos-container">
      <h2>Contáctenos</h2>
      <div className="contactenos-grid">
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="contactenos-form">
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Correo:
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Asunto:
            <input
              type="text"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mensaje:
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Enviar</button>
        </form>

        {/* Mapa */}
        <div className="contactenos-mapa">
          <iframe
            title="ubicacion"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.1287615762917!2d-79.93779228896064!3d-2.103904337058514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d0dbeef57cb0f%3A0x10e96b2f1c007282!2sAv.%20Camilo%20Ponce%20Enr%C3%ADquez%2C%20Guayaquil!5e0!3m2!1ses!2sec!4v1755406752029!5m2!1ses!2sec"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
              </iframe>"
        </div>
      </div>
    </div>
  );
};

export default Contactenos;
