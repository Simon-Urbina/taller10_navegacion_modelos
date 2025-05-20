<<<<<<< HEAD
import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../Blanco Vertical.png";
import "../../../assets/css/cabecera.css";

export const Cabecera: React.FC = () => {
  return (
    <>
      <style>{`
        .custom-navbar {
          background-color: #303364;
          box-shadow:
            0 2px 4px rgba(0,201,211,0.4),
            0 2px 4px rgba(0,142,140,0.3),
            0 4px 8px rgba(252,181,0,0.2),
            0 4px 8px rgba(48,51,100,0.2);
          padding: 1.5rem 1rem;
        }
        .custom-navbar .navbar-brand img {
          width: 120px;
        }
        .nav-link {
          font-size: 1.1rem;
          color: #f7f7f7;
          transition: color 0.2s ease, border-bottom 0.2s ease;
        }
        .nav-link:hover {
          color: #fcb500;
        }
        .navItemActive {
          color: #fcb500 !important;
          border-bottom: 3px solid #fcb500;
        }
        .btn-custom {
          background-color: #fcb500;
          color: #151515;
          padding: 0.6rem 1.2rem;
          font-size: 1.1rem;
          border-radius: 0.25rem;
          border: none;
          margin-left: 0.5rem;
          transition: all 0.2s ease;
        }
        .btn-custom:hover {
          background-color: #303364;
          color: #fcb500;
          border: 2px solid #fcb500;
        }
        .navbar-toggler {
          border-color: #fcb500;
        }
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,201,211,0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
      `}</style>

      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsable content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'navItemActive' : ''}`
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'navItemActive' : ''}`
                  }
                >
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/vote"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'navItemActive' : ''}`
                  }
                >
                  Votar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/aboutMe"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'navItemActive' : ''}`
                  }
                >
                  Acerca De
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/login" className="btn btn-custom">
                LogIn
              </Link>
              <Link to="/profile" className="btn btn-custom">
                Perfil
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
=======
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
>>>>>>> 25260569bcae36f403ab5c8576261d9f0bb7588c
  );
};
