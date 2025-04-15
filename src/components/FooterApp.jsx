import { version } from "../../package.json";

const FooterApp = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-muted text-center justify-content-end d-md-flex align-items-center gap-2 py-2">
          <small>
            Desarrollado con <i className="bi bi-heart"></i> de Argentina para
            el mundo
          </small>
          <small>
            v.{version} &copy;{new Date().getFullYear()} DevTuc by Pablo Marino
          </small>
        </div>
      </div>
    </div>
  );
};

export default FooterApp;
