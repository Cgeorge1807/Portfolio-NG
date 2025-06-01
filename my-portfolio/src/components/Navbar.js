import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo-container">
          <img 
            src="https://res.cloudinary.com/dciy2gw7z/image/upload/v1748757253/covftqbhft0vzzikm1gc.png" 
            alt="Logo NIC"
            className="logo"
          />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link> 
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
