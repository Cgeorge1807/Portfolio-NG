import React, { useState } from "react";
import "./Proyectos.css"; 
import ProyectoDetalle from "./ProyectoDetalle"; 
import DataProyectos from "../DataProyectos"; 

function Proyectos() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleVerMasClick = (projectId) => {
    setSelectedProjectId(projectId);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedProjectId(null);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProject = DataProyectos.find(project => project.id === selectedProjectId);

  return (
    <div className="proyectos-bg">
      <div className="container py-4 proyectos-content">
        {selectedProjectId ? (
          <>
            <button onClick={handleBackToList} className="btn btn-primary back-button mb-4">
              ← Volver a Proyectos
            </button>
            <ProyectoDetalle project={selectedProject} />
          </>
        ) : (
          <>
            <h1 className="proyectos-title mb-4">Proyectos</h1> 
            <div className="row">
              {DataProyectos.map((project) => (
                <div key={project.id} className="col-lg-3 col-md-6 col-sm-6 mb-4"> 
                  <div className="card h-100 project-card"> 
                    <div className="card-img-wrapper"> 
                        <img
                            src={project.finalDesign && project.finalDesign.length > 0 ? project.finalDesign[0] : 'https://via.placeholder.com/400x300?text=Imagen+No+Disponible'}
                            className="card-img-top project-card-img" 
                            alt={project.title}
                        />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title project-card-title">{project.title}</h5> 
                      <p className="card-text project-card-description"> 
                        {project.tagline || (project.description ? project.description.substring(0, 90) + '...' : '')}
                      </p>
                      <button
                        onClick={() => handleVerMasClick(project.id)}
                        className="btn btn-primary project-card-button" 
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