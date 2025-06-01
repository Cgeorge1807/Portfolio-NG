import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Asegúrate de que Link esté importado

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";

// Datos de ejemplo para el componente Contacto
const clienteInfo = {
  nombre: 'Nombre del Cliente',
  descripcion:
    'Una breve descripción sobre mi cliente y su trabajo.',
};

const redesSocialesInfo = [
  { nombre: 'LinkedIn', enlace: 'https://www.linkedin.com/in/tucliente' },
  { nombre: 'Twitter', enlace: 'https://twitter.com/tucliente' },
  { nombre: 'Sitio Web', enlace: 'https://www.sitiowebdelcliente.com' },
  // Añade más redes sociales aquí
];


function Home() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Nicole George</h1>
        <p>Diseñadora Industrial | Especialista en impresión 3D</p>
        <div className="cta-container">
          <Link to="/proyectos">
            <button className="cta-button">Explorar proyectos</button>
          </Link>
          {/* ¡Aquí está el cambio! Usamos Link para navegar a /contacto */}
          <Link to="/contacto">
            <button className="cta-button">Contacta conmigo!</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        {/* ¡Aquí está la nueva ruta para el componente Contacto! */}
        <Route path="/contacto" element={<Contacto cliente={clienteInfo} redesSociales={redesSocialesInfo} />} />
      </Routes>
    </>
  );
}

export default App;