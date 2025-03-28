import React from "react";

const ModalAboutApp = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
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
          <div className="modal-body">
            <p>Traductor de Jeringozo App version 1.0.1</p>
            <p>Licensed under GNU AGPL v3</p>

            <p>© Traductor de Jeringozo 2025</p>
            <p>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              <span className="ms-2">/pablomarinotech</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAboutApp;
