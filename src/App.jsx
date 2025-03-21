import { useEffect, useState } from "react";
import NavBarApp from "./components/NavBarApp";
import { decodificarJeringozo, codificarJeringozo } from "./helpers/traducir";
import { copiarPotapapeles } from "./helpers/portapapeles";
import "./css/traductor.css";

function App() {
  let initialCount = 5000;
  const [textEspañol, setTextEspañol] = useState("");
  const [textJeringozo, setTextJeringozo] = useState("");
  const [idiomaJeringozo, setIdiomaJeringozo] = useState(true);
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount - textEspañol.length);
    idiomaJeringozo
      ? setTextJeringozo(codificarJeringozo(textEspañol))
      : setTextJeringozo(decodificarJeringozo(textEspañol));

    // if (idiomaJeringozo) {
    //   setTextJeringozo(codificarJeringozo(textEspañol));
    // } else {
    //   setTextJeringozo(decodificarJeringozo(textEspañol));
    // }
  }, [textEspañol]);

  useEffect(() => {
    let textoj = textJeringozo;
    let texte = textEspañol;
    setTextEspañol(textoj);
    setTextJeringozo(texte);
  }, [idiomaJeringozo]);

  const timeTraduction = ({ target }) => {
    setTextEspañol(target.value);
  };

  const cambioIdioma = () => {
    setIdiomaJeringozo(!idiomaJeringozo);
  };

  return (
    <>
      <NavBarApp />
      <div className="container">
        <div className="row py-5">
          <div className="col fs-3 d-flex justify-content-around align-items-center">
            <span>{idiomaJeringozo ? "Español" : "Jeringozo"}</span>
          </div>
          <div className="col fs-3 d-flex justify-content-around align-items-center">
            <i
              onClick={cambioIdioma}
              className="fa fa-exchange"
              aria-hidden="true"
            ></i>
          </div>
          <div className="col fs-3 d-flex justify-content-around align-items-center">
            <span>{idiomaJeringozo ? "Jeringozo" : "Español"}</span>
          </div>
        </div>
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
              onChange={(e) => setTextJeringozo(e.target.value)}
            ></textarea>
            <div className="overlay">
              <i
                onClick={() => copiarPotapapeles(textJeringozo)}
                className="fa fa-clipboard"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default App;
