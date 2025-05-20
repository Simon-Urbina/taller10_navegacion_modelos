import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/inicio.css";

export const Inicio: React.FC = () => {
  return (
    <div className="inicio-section">
      <h1 className="inicio-heading">HOLA TOMASINO</h1>

      <div className="inicio-content container">
        <div className="row align-items-center">
          {/* Columna izquierda: orden vertical */}
          <div className="col-12 col-lg-6 inicio-left">
            <div className="inicio-left-content">
              <p className="login-text">Loguéate</p>
              <Link to="/login" className="inicio-button login-btn">
                LogIn
              </Link>
              <p className="profile-text">Ve tu perfil</p>
              <Link to="/profile" className="inicio-button perfil-btn">
                Perfil
              </Link>
            </div>
          </div>

          {/* Columna derecha: imagen centrada */}
          <div className="col-12 col-lg-6 inicio-right">
            <div className="inicio-image"></div>
          </div>
        </div>

        {/* Sección de votación */}
        <div className="inicio-vote">
          <p className="inicio-vote-text">¿Ya entraste? ¡Vota!</p>
          <Link to="/vote" className="inicio-button vote-btn">
            Votar
          </Link>
        </div>
      </div>

      {/* Estilos personalizados con nombres únicos */}
      <style>{`
        .inicio-section {
          background-color: #ffffff;
          padding: 5vh 2vw;
        }
        .inicio-heading {
          text-align: center;
          color: #303364;
          font-size: clamp(2rem, 8vw, 5rem);
          font-weight: bold;
          margin-bottom: 3vh;
          position: relative;
        }
        .inicio-heading::after {
          content: "";
          display: block;
          width: 10vw;
          height: 4px;
          background-color: #00c9d3;
          margin: 1vh auto 0;
          border-radius: 2px;
        }
        .inicio-content {
          padding: 0 2vw;
        }
        .inicio-left {
          display: flex;
          justify-content: center;
          margin-bottom: 4vh;
        }
        .inicio-left-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2vh;
        }
        .login-text,
        .profile-text {
          color: #303364;
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          margin: 0;
          text-transform: uppercase;
          font-weight: 600;
        }
        .inicio-button {
          background-color: #00c9d3;
          color: #151515;
          padding: 1vh 2vw;
          font-size: clamp(1rem, 3vw, 1.25rem);
          border: none;
          border-radius: 0.5rem;
          text-decoration: none;
          box-shadow: 0 4px 8px rgba(0,201,211,0.3);
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .inicio-button:hover {
          background-color: #151515;
          color: #00c9d3;
        }
        .inicio-right {
          display: flex;
          justify-content: center;
        }
        .inicio-image {
          width: 60%;
          padding-bottom: calc(60% * (4/3));
          background-color: #f0f0f0;
          border-radius: 1rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .inicio-vote {
          text-align: center;
          margin-top: 5vh;
        }
        .inicio-vote-text {
          color: #303364;
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          margin-bottom: 2vh;
        }
        .vote-btn {
          background-color: #fcb500;
          color: #151515;
          padding: 1vh 2vw;
          font-size: clamp(1rem, 3vw, 1.25rem);
          border-radius: 0.5rem;
          text-decoration: none;
          box-shadow: 0 4px 8px rgba(252,181,0,0.3);
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .vote-btn:hover {
          background-color: #151515;
          color: #fcb500;
        }
        @media (min-width: 992px) {
          .inicio-left {
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
};
