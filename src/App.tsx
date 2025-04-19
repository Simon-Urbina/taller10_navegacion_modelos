import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cabecera } from "./app/components/contenedor/Cabecera";
import { Footer } from "./app/components/contenedor/Footer";
import { BrowserRouter } from "react-router-dom";
import { RuteoPrincipal } from "./app/routes/RuteoPrincipal";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    
    <BrowserRouter>
      <main>

        <Cabecera />

        <section>
          <RuteoPrincipal />
        </section>

        <Footer />
        <ToastContainer/>
      </main>
    </BrowserRouter>
  );
}

export default App;
