import React from "react";

const BarraCambioIdioma = ({ idiomaJeringozo, cambioIdioma }) => {
  return (
    <div className="row py-5">
      <div className="col-5 fs-3 d-flex justify-content-center align-items-center">
        <span>{idiomaJeringozo ? "Español" : "Jeringoso"}</span>
      </div>
      <div className="col-2 fs-3 d-flex justify-content-center align-items-center">
        <i
          onClick={cambioIdioma}
          className="fa fa-exchange"
          aria-hidden="true"
          role="button"
        ></i>
      </div>
      <div className="col-5 fs-3 d-flex justify-content-center align-items-center">
        <span>{idiomaJeringozo ? "Jeringoso" : "Español"}</span>
      </div>
    </div>
  );
};

export default BarraCambioIdioma;
