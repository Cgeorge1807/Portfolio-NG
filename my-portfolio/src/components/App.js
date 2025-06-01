import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";   
import Navbar from "./Navbar";
import Proyectos from "./Proyectos";


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
          <button className="cta-button">Contacta conmigo!</button>
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos/>}/>
      </Routes>
    </>
  );
}

export default App;
