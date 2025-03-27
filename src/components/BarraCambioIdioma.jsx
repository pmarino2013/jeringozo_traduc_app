import React from "react";

const BarraCambioIdioma = ({ idiomaJeringozo, cambioIdioma }) => {
  return (
    <div className="row py-5">
      <div className="col fs-3 d-flex justify-content-around align-items-center">
        <span>{idiomaJeringozo ? "Español" : "Jeringozo"}</span>
      </div>
      <div className="col fs-3 d-flex justify-content-around align-items-center">
        <i
          onClick={cambioIdioma}
          className="fa fa-exchange"
          aria-hidden="true"
          role="button"
        ></i>
      </div>
      <div className="col fs-3 d-flex justify-content-around align-items-center">
        <span>{idiomaJeringozo ? "Jeringozo" : "Español"}</span>
      </div>
    </div>
  );
};

export default BarraCambioIdioma;
