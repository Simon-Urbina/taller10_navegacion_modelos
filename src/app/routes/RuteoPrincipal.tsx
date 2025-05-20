import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { CrearProducto } from "../components/producto/CrearProducto";
import { ListarProducto } from "../components/producto/ListarProducto";
import { AdministrarProducto } from "../components/producto/AdministrarProducto";
import { EditarProducto } from "../components/producto/EditarProducto";
=======
import { CrearGato } from "../components/gato/CrearGato";
import { ListarGato } from "../components/gato/ListarGato";
import { AdministrarGato } from "../components/gato/AdministrarGato";
import { EditarGato } from "../components/gato/EditarGato";
>>>>>>> 25260569bcae36f403ab5c8576261d9f0bb7588c
import { Inicio } from "../components/contenedor/Inicio";
import { Error } from "../components/contenedor/Error";

export const RuteoPrincipal = () => {

    return (
        <Routes>

            {/* Rutas Obligatorias */}
            <Route path="/" element = {<Inicio/>} />
            <Route path="*" element = {<Error/>} />

            <Route path="/home" element={<Inicio/>} />
            
<<<<<<< HEAD
            <Route path="/product/add" element={<CrearProducto/>} />
            <Route path="/product/list" element={<ListarProducto/>} />
            <Route path="/product/manage" element={<AdministrarProducto/>} />
            <Route path="/product/update/:codProducto" element={<EditarProducto/>} />
=======
            <Route path="/cat/add" element={<CrearGato/>} />
            <Route path="/cat/list" element={<ListarGato/>} />
            <Route path="/cat/manage" element={<AdministrarGato/>} />
            <Route path="/cat/update" element={<EditarGato/>} />
>>>>>>> 25260569bcae36f403ab5c8576261d9f0bb7588c

        </Routes>
    );

}