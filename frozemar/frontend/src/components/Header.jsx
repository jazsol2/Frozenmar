import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Cuando se hace clic en un enlace, cierra el menú (en móvil)
  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
    setDivisionsOpen(false); // también cierra el dropdown
  };

  // Para el hover del dropdown en desktop, controla open
  const handleMouseEnter = () => setDivisionsOpen(true);
  const handleMouseLeave = () => setDivisionsOpen(false);

  // En móvil el click también alterna el dropdown
  const handleDropdownClick = (e) => {
    e.preventDefault(); // evitar navegación si es un link falso
    setDivisionsOpen(!divisionsOpen);
  };

  return (
    <header className="site-header">
      {/* Frase arriba del menú */}
      <div className="header-tagline">"Calidad del mar en cada momento"</div>

      {/* Botón hamburguesa para móviles */}
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        &#9776;
      </button>

      {/* Menú con logo en el centro, añade clase "open" si el menú está abierto */}
      <ul className={`topnav ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/about" onClick={handleLinkClick}>
            Quienes Somos
          </Link>
        </li>

        <li
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* El span actúa como botón para móvil */}
          <a
            href="#!"
            className="dropdown-toggle"
            onClick={handleDropdownClick}
            aria-expanded={divisionsOpen}
          >
            Divisiones ▾
          </a>
          {divisionsOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/divisions/planta" onClick={handleLinkClick}>
                  Planta Procesadora
                </Link>
              </li>
              <li>
                <Link to="/divisions/camaronera" onClick={handleLinkClick}>
                  Camaronera
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="logo-item">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Frozemar Logo" className="logo" />
          </Link>
        </li>

        <li>
          <Link to="/products" onClick={handleLinkClick}>
            Productos
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick}>
            Contactenos
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
