import React from 'react';
import './Contacto.css'; // Asegúrate de que esta ruta sea correcta

function Contacto({ profileImage, redesSociales }) { // Añadimos 'profileImage' a las props
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="container">
        <h1 className="sobre-mi-title">Sobre Mí</h1>

        <div className="main-content-boxes"> {/* Contenedor principal para los recuadros */}
          
          {/* Recuadro 1: Imagen y Descripción */}
          <div className="about-me-intro-box">
            {profileImage && ( // Solo renderiza si hay una imagen de perfil
              <div className="profile-image-container">
                <img src={profileImage} alt="Nicole George" className="profile-image" />
              </div>
            )}
            <div className="bio-text">
              <p>
                ¡Hola! Soy Nicole George, una apasionada Diseñadora Industrial y especialista en Impresión 3D. Mi trayectoria se ha centrado en fusionar la creatividad con la funcionalidad, creando soluciones innovadoras que no solo resuelven problemas, sino que también inspiran.
              </p>
              <p>
                Desde mis primeros bocetos hasta la materialización de ideas a través de la manufactura aditiva, disfruto cada etapa del proceso de diseño. Me especializo en llevar conceptos desde la fase inicial hasta productos tangibles, utilizando mis conocimientos en diseño, software CAD y las últimas tecnologías de impresión 3D.
              </p>
            </div>
          </div>

          {/* Recuadro 2: Habilidades */}
          <div className="skills-box">
            <h2>Habilidades Clave</h2>
            <div className="skills-grid">
              <span className="skill-tag">Diseño Industrial</span>
              <span className="skill-tag">Modelado CAD (SolidWorks, Rhino)</span>
              <span className="skill-tag">Impresión 3D (FDM, SLA)</span>
              <span className="skill-tag">Renderizado (KeyShot)</span>
              <span className="skill-tag">Prototipado Rápido</span>
              <span className="skill-tag">Conceptualización</span>
              {/* Añade más habilidades aquí */}
            </div>
          </div>

        </div> {/* Fin de .main-content-boxes */}

        {/* Barra de Redes Sociales (abajo de todo) */}
        {redesSociales && (
          <div className="social-media-bar">
            <h3>Conecta Conmigo</h3>
            <div className="social-links">
              {redesSociales.map((redSocial) => (
                <a
                  key={redSocial.nombre}
                  href={redSocial.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className={`fab fa-${redSocial.nombre.toLowerCase()}`}></i>
                  {redSocial.nombre}
                </a>
              ))}
            </div>
          </div>
        )}

      </div> {/* Fin de .container */}
    </section>
  );
}

export default Contacto;