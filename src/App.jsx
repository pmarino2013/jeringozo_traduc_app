import { useEffect, useState } from "react";
import NavBarApp from "./components/NavBarApp";
import "./css/traductor.css";
import BarraCambioIdioma from "./components/BarraCambioIdioma";
import PanelTraductorApp from "./components/PanelTraductorApp";
import { codificarJeringozo, decodificarJeringozo } from "./helpers";
import FooterApp from "./components/FooterApp";

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

  const jeringozoTraduction = ({ target }) => {
    setTextJeringozo(target.value);
  };

  const cambioIdioma = () => {
    setIdiomaJeringozo(!idiomaJeringozo);
  };

  return (
    <div className="vh-100 d-flex flex-column justify-content-between">
      <NavBarApp />
      <div className="container">
        <BarraCambioIdioma
          idiomaJeringozo={idiomaJeringozo}
          cambioIdioma={cambioIdioma}
        />
        <PanelTraductorApp
          textEspañol={textEspañol}
          timeTraduction={timeTraduction}
          count={count}
          textJeringozo={textJeringozo}
          jeringozoTraduction={jeringozoTraduction}
        />

        <div className="row">
          <div className="col"></div>
        </div>
      </div>
      <FooterApp />
    </div>
  );
}

export default App;
