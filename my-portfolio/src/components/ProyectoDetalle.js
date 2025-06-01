import React from 'react';
import './ProyectoDetalle.css'; // Importa el archivo CSS

const ProyectoDetalle = ({ project }) => {
  if (!project) {
    return <div className="loading-message">Cargando detalles del proyecto...</div>; // Añadida clase
  }

  return (
    <div className="project-detail-container">
      <header className="project-header">
        <h1 className="project-title">{project.title}</h1> {/* Añadida clase */}
        {project.tagline && <p className="project-tagline">{project.tagline}</p>} {/* Añadida clase */}
      </header>

      {/* Hero Image / Primary Image (Opcional, podrías añadir una imagen principal grande aquí) */}
      {project.finalDesign && project.finalDesign.length > 0 && (
          <div className="project-hero-image-wrapper">
              <img src={project.finalDesign[0]} alt={`${project.title} - Portada`} className="project-hero-image" />
          </div>
      )}

      <section className="project-section overview">
        <h2 className="section-title">Visión General</h2>
        <p className="section-text">{project.description}</p>
        <div className="project-buttons">
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-button primary">
              Ver Demo en Vivo
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-button secondary">
              Ver Código
            </a>
          )}
        </div>
      </section>

      {project.problem && (
        <section className="project-section problem-solution">
          <h2 className="section-title">El Desafío</h2>
          <p className="section-text">{project.problem}</p>
        </section>
      )}

      {project.solution && (
        <section className="project-section problem-solution">
          <h2 className="section-title">La Solución de Diseño</h2>
          <p className="section-text">{project.solution}</p>
        </section>
      )}

      {project.moodboard && (
        <section className="project-section visual-process">
          <h2 className="section-title">Exploración Visual</h2>
          <h3 className="subsection-title">Mood Board</h3>
          <img src={project.moodboard} alt="Mood Board del Proyecto" className="project-image moodboard-image" />
        </section>
      )}

      {project.wireframes && project.wireframes.length > 0 && (
        <section className="project-section visual-process">
          <h3 className="subsection-title">Wireframes</h3>
          <div className="image-grid">
            {project.wireframes.map((wireframe, index) => (
              <img key={index} src={wireframe} alt={`Wireframe ${index + 1}`} className="project-image" />
            ))}
          </div>
        </section>
      )}

      {project.finalDesign && project.finalDesign.length > 0 && (
        <section className="project-section final-design">
          <h2 className="section-title">Diseño Final</h2>
          <div className="image-grid">
            {project.finalDesign.slice(1).map((image, index) => ( // .slice(1) para omitir la primera imagen si ya la usaste como hero
              <img key={index} src={image} alt={`Diseño Final ${index + 1}`} className="project-image" />
            ))}
          </div>
        </section>
      )}

      <section className="project-section project-details-summary">
        <h2 className="section-title">Detalles del Diseño</h2>

        <div className="details-grid">
            {project.colors && Object.keys(project.colors).length > 0 && (
                <div className="detail-item color-palette">
                    <h3 className="subsection-title">Paleta de Colores</h3>
                    <div className="colors-display">
                    {Object.entries(project.colors).map(([name, hex]) => (
                        <div key={name} className="color-swatch-wrapper">
                            <div className="color-swatch" style={{ backgroundColor: hex }}></div>
                            <span className="color-name">{name}</span>
                            <span className="color-hex">{hex}</span>
                        </div>
                    ))}
                    </div>
                </div>
            )}

            {project.typography && Object.keys(project.typography).length > 0 && (
                <div className="detail-item typography"> {/* Añadida clase 'typography' */}
                    <h3 className="subsection-title">Tipografía</h3>
                    <div className="typography-styles">
                    {Object.entries(project.typography).map(([styleName, font]) => (
                        <p key={styleName} className="font-detail">
                            <span className="font-style-name">{styleName}:</span> <span className="font-family">{font}</span>
                        </p>
                    ))}
                    </div>
                </div>
            )}
        </div>

        {project.technologies && project.technologies.length > 0 && (
          <div className="detail-item technologies">
            <h3 className="subsection-title">Tecnologías Utilizadas</h3>
            <ul className="tech-list">
              {project.technologies.map((tech, index) => (
                <li key={index} className="tech-item">{tech}</li>
              ))}
            </ul>
          </div>
        )}

        {project.myRole && (
          <div className="detail-item my-role">
            <h3 className="subsection-title">Mi Rol</h3>
            <p className="section-text">{project.myRole}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProyectoDetalle;