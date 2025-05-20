import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/css/error.css";

export const Error: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="error-screen">
      <div className="error-card">
        <h1 className="error-code">4<span>0</span>4</h1>
        <p className="error-message">Recurso No Encontrado</p>
        <button className="error-btn" onClick={() => navigate(-1)}>
          ← Regresar
        </button>
      </div>
      <div className="error-illustration">
        <i className="fa fa-bug fa-shake" aria-hidden="true"></i>
      </div>

      <style>{`
        .error-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #303364;
          padding: 4vw;
          margin: 5vh auto;
          box-sizing: border-box;
          max-width: 90vw;
          border-radius: 1rem;
        }
        .error-card {
          text-align: center;
          color: #f7f7f7;
          margin-bottom: 4vh;
        }
        .error-code {
          font-size: 10vw;
          margin: 0;
          color: #fcb500;
          line-height: 1;
        }
        .error-code span {
          color: #00c9d3;
        }
        .error-message {
          font-size: 4vw;
          margin: 2vh 0;
        }
        .error-btn {
          background-color: #00c9d3;
          color: #151515;
          border: none;
          padding: 1.5vh 3vw;
          font-size: 3vw;
          border-radius: 0.5vw;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .error-btn:hover {
          background-color: #303364;
          color: #00c9d3;
          border: 0.3vh solid #00c9d3;
        }
        .error-illustration {
          font-size: 20vw;
          color: #f7f7f7;
        }
        @media (min-aspect-ratio: 1/1) {
          /* Landscape: place illustration to the right */
          .error-screen {
            flex-direction: row;
            justify-content: space-between;
            padding: 4vw;
          }
          .error-card {
            margin: 0;
          }
          .error-illustration {
            margin-left: 2vw;
          }
        }
        @media (max-width: 480px) {
          .error-code {
            font-size: 20vw;
          }
          .error-message {
            font-size: 6vw;
          }
          .error-btn {
            font-size: 4vw;
            padding: 2vh 4vw;
          }
          .error-illustration {
            font-size: 30vw;
          }
        }
      `}</style>
    </div>
  );
};
