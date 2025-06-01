import React, { useState } from "react";
import "./Proyectos.css"; // Asegúrate de que esta ruta sea correcta
import ProyectoDetalle from "./ProyectoDetalle"; // Asegúrate de que esta ruta sea correcta
import DataProyectos from "../DataProyectos"; // ¡Importación correcta de tu archivo de datos!

function Proyectos() {
  const [selectedProjectId, setSelectedProjectId] = useState(null); // Estado para guardar el ID del proyecto seleccionado

  const handleVerMasClick = (projectId) => {
    setSelectedProjectId(projectId);
    // Opcional: Desplázate al principio de la página al ver el detalle
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedProjectId(null);
    // Opcional: Desplázate al principio de la página al volver a la lista
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProject = DataProyectos.find(project => project.id === selectedProjectId);

  return (
    <div className="proyectos-bg">
      <div className="container py-4 proyectos-content"> {/* Añadido clase para el z-index y otros estilos */}
        {selectedProjectId ? (
          <>
            <button onClick={handleBackToList} className="btn btn-primary back-button mb-4">
              ← Volver a Proyectos
            </button>
            <ProyectoDetalle project={selectedProject} />
          </>
        ) : (
          <>
            <h1 className="proyectos-title mb-4">Proyectos</h1> {/* Añadido clase para el título */}
            <div className="row">
              {DataProyectos.map((project) => (
                <div key={project.id} className="col-lg-3 col-md-6 col-sm-6 mb-4"> {/* col-sm-6 para tabletas */}
                  <div className="card h-100 project-card"> {/* Añadido clase project-card */}
                    <div className="card-img-wrapper"> {/* Nuevo div para controlar la imagen */}
                        <img
                            src={project.finalDesign && project.finalDesign.length > 0 ? project.finalDesign[0] : 'https://via.placeholder.com/400x300?text=Imagen+No+Disponible'}
                            className="card-img-top project-card-img" // Añadido clase project-card-img
                            alt={project.title}
                        />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title project-card-title">{project.title}</h5> {/* Añadido clase project-card-title */}
                      <p className="card-text project-card-description"> {/* Añadido clase project-card-description */}
                        {project.tagline || (project.description ? project.description.substring(0, 90) + '...' : '')}
                      </p>
                      <button
                        onClick={() => handleVerMasClick(project.id)}
                        className="btn btn-primary project-card-button" // Añadido clase project-card-button
                      >
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Proyectos;