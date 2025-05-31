import React from "react";
import "./Proyectos.css";  // Asegúrate de que esta ruta sea correcta

function Proyectos() {
  return (
    <div className="proyectos-bg">
      {/* Contenedor para elevar el contenido sobre el overlay */}
      <div className="container py-4" style={{ position: "relative", zIndex: 2 }}>
        <h1 className="mb-4">Proyectos</h1>
        <div className="row">
          {/* Tarjeta 1 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src="https://creatorium3d.com/wp-content/uploads/2021/03/impresora-3d-imprimiendo-filamentio-PLA.png"
                className="card-img-top"
                alt="Proyecto 1"
              />
              <div className="card-body">
                <h5 className="card-title">Impresion 3d</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nunc.

                </p>
                <a href="#" className="btn btn-primary">
                  Ver más
                </a>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
         <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src="https://creatorium3d.com/wp-content/uploads/2021/03/impresora-3d-imprimiendo-filamentio-PLA.png"
                className="card-img-top"
                alt="Proyecto 1"
              />
              <div className="card-body">
                <h5 className="card-title">Impresion 3d</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nunc.

                </p>
                <a href="#" className="btn btn-primary">
                  Ver más
                </a>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src="https://creatorium3d.com/wp-content/uploads/2021/03/impresora-3d-imprimiendo-filamentio-PLA.png"
                className="card-img-top"
                alt="Proyecto 1"
              />
              <div className="card-body">
                <h5 className="card-title">Impresion 3d</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nunc.

                </p>
                <a href="#" className="btn btn-primary">
                  Ver más
                </a>
              </div>
            </div>
          </div>

          {/* Tarjeta 4 */}
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src="https://creatorium3d.com/wp-content/uploads/2021/03/impresora-3d-imprimiendo-filamentio-PLA.png"
                className="card-img-top"
                alt="Proyecto 1"
              />
              <div className="card-body">
                <h5 className="card-title">Impresion 3d</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nunc.

                </p>
                <a href="#" className="btn btn-primary">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
