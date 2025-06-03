import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          </li>
          <li>
            <Link to="/proyectos" onClick={() => setIsOpen(false)}>Proyectos</Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;