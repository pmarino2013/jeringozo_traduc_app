const ModalContactApp = () => {
  return (
    <div
      className="modal fade"
      id="contactModal"
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content  bg-light">
          <div className="modal-header">
            <h1>Traductor de Jeringozo</h1>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body ">
            <h3>Enlaces de contacto</h3>
            <div className="d-flex justify-content-around mt-3">
              <div className="d-flex align-items-center gap-2">
                <a
                  className="nav-link fs-4"
                  href="mailto:pmarino2013@gmail.com"
                >
                  <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <a
                  className="nav-link fs-4"
                  href="https://www.linkedin.com/in/pablomarinotech/"
                  target="_blank"
                >
                  <i
                    className="fa fa-linkedin-square fa-2x"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <a
                  className="nav-link fs-4"
                  href="https://x.com/pablomarino8"
                  target="_blank"
                >
                  <i
                    className="fa fa-twitter-square fa-2x"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContactApp;
