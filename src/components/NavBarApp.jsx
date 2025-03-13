const NavBarApp = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center  bg-light">
        <button
          className="btn btn-transparent text-dark"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
        </button>
        <span className="p-2 fs-3">Traductor de Jeringozo</span>
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
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <ul>
            <li>
              <a href="#" className="text-decoration-none">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBarApp;
