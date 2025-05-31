import React from "react";
import "./Navbar.css";  // Importa los estilos del navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h2 className="logo">NG-Logo-nic</h2>
        <ul className="nav-links">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
