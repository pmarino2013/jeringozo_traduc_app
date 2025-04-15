import { useState } from "react";
import ModalAboutApp from "./ModalAboutApp";
import ModalContactApp from "./ModalContactApp";
import ModalTutorialApp from "./ModalTutorialApp";

const NavBarApp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex justify-content-around align-items-center  bg-light">
        <button
          className="btn btn-transparent text-dark"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
        </button>
        <span className="p-2 fs-3 fw-bold">Traductor de Jeringozo</span>
      </div>

      <div
        className="offcanvas offcanvas-start"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Traductor de Jeringozo
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="mb-3">
            El <b>jeringoso</b> es un juego de palabras popular en países de
            habla hispana, donde se modifica una palabra o frase añadiendo
            sílabas adicionales a cada vocal.
          </div>
          <ul>
            <li>
              <a href="#" className="text-decoration-none" onClick={handleShow}>
                Tutorial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-decoration-none"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-decoration-none"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ModalAboutApp />
      <ModalContactApp />
      <ModalTutorialApp show={show} handleClose={handleClose} />
    </>
  );
};

export default NavBarApp;
