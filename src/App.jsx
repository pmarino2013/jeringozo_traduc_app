import { useEffect, useState } from "react";
import NavBarApp from "./components/NavBarApp";
import { decodificarJeringozo, codificarJeringozo } from "./helpers/traducir";

function App() {
  const [textEspañol, setTextEspañol] = useState("");
  const [textJeringozo, setTextJeringozo] = useState("");
  const [idiomaJeringozo, setIdiomaJeringozo] = useState(true);

  useEffect(() => {
    if (idiomaJeringozo) {
      setTextJeringozo(codificarJeringozo(textEspañol));
    } else {
      setTextJeringozo(decodificarJeringozo(textEspañol));
    }
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
            <i
              onClick={cambioIdioma}
              className="fa fa-exchange"
              aria-hidden="true"
            ></i>
            <span>{idiomaJeringozo ? "Jeringozo" : "Español"}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <textarea
              className="form-control"
              rows="5"
              name=""
              id=""
              value={textEspañol}
              onChange={timeTraduction}
              // onKeyUp={timeTraduction}
            ></textarea>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <textarea
              className="form-control"
              rows="5"
              name=""
              id=""
              value={textJeringozo}
              onChange={(e) => setTextJeringozo(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* <button className="btn btn-warning" onClick={traducirAJeringozo}>
              click me
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
