import React from "react";
import XIcon from "../../../assets/images/X (formerly Twitter)_dark.svg";
import TikTokIcon from "../../../assets/images/tiktok.svg";
import InstagramIcon from "../../../assets/images/Instagram_dark.svg";
import "../../../assets/css/footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="text-white mt-5 py-5" style={{ backgroundColor: "#303364" }}>
      <div className="container">
        <div className="row text-center">

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="fw-semibold footer-title">Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/contact" className="footer-link text-decoration-none">Contacto</a>
              </li>
              <li>
                <a href="/aboutMe" className="footer-link text-decoration-none">Acerca De</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="fw-semibold footer-title">Universidad Santo Tomás</h5>
            <p className="footer-info">© 2025</p>
            <p className="footer-info">Facultad de Ingeniería de Sistemas</p>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="fw-semibold footer-title">Encuéntranos</h5>
            <div className="d-flex justify-content-center align-items-center gap-3 mt-2">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src={XIcon} alt="X" width={32} height={32} />
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                <img src={TikTokIcon} alt="TikTok" width={32} height={32} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="footer-credits mb-0">Alison Borda Sánchez &amp; Simón Jacobo Urbina Martínez</p>
          </div>
        </div>
      </div>

      <style>{`
        .footer-title {
          font-size: clamp(1.2rem, 3vw, 1.5rem);
        }
        .footer-link {
          color: #ffffff;
          font-size: clamp(1rem, 3vw, 1.2rem);
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #fcb500;
        }
        .footer-info {
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          margin: 0.5rem 0;
        }
        .footer-credits {
          font-size: clamp(0.8rem, 2.5vw, 1rem);
          color: #f7f7f7;
        }
      `}</style>
    </footer>
  );
};
