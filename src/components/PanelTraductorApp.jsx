import { useState } from "react";
import { copiarPotapapeles } from "../helpers/portapapeles";

const PanelTraductorApp = ({
  textEspañol,
  timeTraduction,
  count,
  textJeringozo,

  jeringozoTraduction,
}) => {
  const [showMessage, setShowMessage] = useState(false);

  const copiarTexto = () => {
    setShowMessage(true);
    copiarPotapapeles(textJeringozo);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  return (
    <>
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
          {textJeringozo.length > 4 && (
            <div className="overlay">
              <i
                title="Copiar traducción"
                onClick={copiarTexto}
                className="fa fa-clipboard"
                aria-hidden="true"
              ></i>
            </div>
          )}
        </div>

        {showMessage && (
          <div className="d-flex flex-column align-items-end">
            <div className="text-success">Texto copiado!</div>
          </div>
        )}
      </div>
    </>
  );
};

export default PanelTraductorApp;
