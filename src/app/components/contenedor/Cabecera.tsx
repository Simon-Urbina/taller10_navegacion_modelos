import { Link } from "react-router-dom";
import logo from "../../../logo.svg";

export const Cabecera = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="Logo" height="50px" width="75px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gatos
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/cat/add">
                    Crear
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/cat/list">
                    Listar
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cat/manage">
                    Administrar
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutMe">
                Acerca De
              </Link>
            </li>
          </ul>
          <span>
            <Link type="button" className="btn btn-primary" to="/signIn">
              Inicio de Sesión
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
