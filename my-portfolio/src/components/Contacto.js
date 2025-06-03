import React from 'react';
import './Contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contacto({ profileImage, redesSociales }) {
  const emailContacto = "nicole.george@example.com";
  const telefonoContacto = "+58 412 123 4567";

  const skills = [
    { name: 'Diseño Industrial', icon: 'fa-lightbulb' },
    { name: 'Modelado CAD', icon: 'fa-cube' },
    { name: 'Impresión 3D', icon: 'fa-print' },
    { name: 'Renderizado', icon: 'fa-camera' },
    { name: 'Prototipado Rápido', icon: 'fa-flask' },
    { name: 'Conceptualización', icon: 'fa-pencil-ruler' },
    { name: 'Investigación de Mercados', icon: 'fa-chart-line' },
    { name: 'UX/UI Básico', icon: 'fa-user-cog' }
  ];

  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="container">
        <h1 className="sobre-mi-title">Sobre Mí</h1>

        <div className="main-content-boxes">
          <div className="about-me-intro-box">
            <div className="profile-image-container">
              <img src="https://media.discordapp.net/attachments/702498925159907408/1364616758853500958/image.jpg?ex=683e6524&is=683d13a4&hm=1c0a624f6e6f414aed1bbe2db5ea7e42dfde9ea9362d97af551564e1bd46147a&=&format=webp&width=726&height=968" alt="Nicole George" className="profile-image" />
            </div>
            <div className="bio-text">
              <p>
                ¡Hola! Soy Nicole George, una apasionada **Diseñadora Industrial** y especialista en **Impresión 3D**. Mi trayectoria se ha centrado en fusionar la creatividad con la funcionalidad, creando soluciones innovadoras que no solo resuelven problemas, sino que también inspiran.
              </p>
              <p>
                Desde mis primeros bocetos hasta la materialización de ideas a través de la manufactura aditiva, disfruto cada etapa del proceso de diseño. Me especializo en llevar conceptos desde la fase inicial hasta productos tangibles, utilizando mis conocimientos en diseño, software CAD y las últimas tecnologías de impresión 3D.
              </p>
            </div>
          </div>

          <div className="skills-box">
            <h2>Habilidades Clave</h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-text">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-info-bar">
          <h3>Conecta Conmigo</h3>
          <div className="contact-links">
            <a href={`mailto:${emailContacto}`} className="contact-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              Email
            </a>
            <a href={`tel:${telefonoContacto.replace(/\s/g, '')}`} className="contact-link">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              Teléfono
            </a>
            <a href="https://www.linkedin.com/in/nicolegeorge/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              LinkedIn
            </a>
            <a href="https://www.instagram.com/tu_usuario/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;