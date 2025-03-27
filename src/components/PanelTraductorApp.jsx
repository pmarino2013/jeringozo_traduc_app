import React from "react";

const PanelTraductorApp = ({
  textEspañol,
  timeTraduction,
  count,
  textJeringozo,
  copiarPotapapeles,
  jeringozoTraduction,
}) => {
  return (
    <div className="row">
      <div className="col-12 col-md-6 mb-3">
        <textarea
          className="form-control"
          rows="5"
          maxLength={5000}
          value={textEspañol}
          onChange={timeTraduction}

          // onKeyUp={timeTraduction}
        ></textarea>
        <div className="d-flex justify-content-end pe-2">
          <small className={count <= 10 ? " text-danger" : "text-muted"}>
            {count}
          </small>
        </div>
      </div>
      <div className="col-12 col-md-6 mb-3 position-relative">
        <textarea
          className="form-control text-area-traduc"
          rows="5"
          name=""
          id=""
          readOnly
          value={textJeringozo}
          onChange={(e) => jeringozoTraduction(e.target.value)}
        ></textarea>
        <div className="overlay">
          <i
            title="Copiar traducción"
            onClick={() => copiarPotapapeles(textJeringozo)}
            className="fa fa-clipboard"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default PanelTraductorApp;
