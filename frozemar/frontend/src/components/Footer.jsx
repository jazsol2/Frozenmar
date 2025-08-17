import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-columns">

          {/* Columna 1: Contacto */}
          <div className="footer-column">
            <h4>Contacto</h4>
            📞 <a href="tel:+593999999999">+593 999 999 999</a>
            <p>
              
            </p>
            ✉️ <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@miempresa.com&su=Consulta%20desde%20la%20web&body=Hola,%20quisiera%20más%20información."
            target="_blank">
              info@miempresa.com
              </a>
          </div>

          {/* Columna 2: Ubicación */}
          <div className="footer-column">
            <h4>Ubicación</h4>
            <a href="https://www.google.com/maps?q=Av.+Principal+123,+Ciudad,+País" /*escribir ubicacion de lugar*/
            target="_blank" rel="noopener noreferrer">
              📍 Ver ubicación en Google Maps {/* escribir Ubicación */}
              </a>  
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="footer-column">
            <h4>Síguenos</h4>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br />
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a><br />
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>

          {/* Columna 4: Información Legal */}
          <div className="footer-column">
            <h4>Acerca de</h4>
            <a href="/privacidad">Política de Privacidad</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 Frozemar. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

