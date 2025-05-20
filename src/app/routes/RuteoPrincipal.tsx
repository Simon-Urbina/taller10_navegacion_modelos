import { Route, Routes } from "react-router-dom";
import { CrearProducto } from "../components/producto/CrearProducto";
import { ListarProducto } from "../components/producto/ListarProducto";
import { AdministrarProducto } from "../components/producto/AdministrarProducto";
import { EditarProducto } from "../components/producto/EditarProducto";
import { Inicio } from "../components/contenedor/Inicio";
import { Error } from "../components/contenedor/Error";

export const RuteoPrincipal = () => {

    return (
        <Routes>

            {/* Rutas Obligatorias */}
            <Route path="/" element = {<Inicio/>} />
            <Route path="*" element = {<Error/>} />

            <Route path="/home" element={<Inicio/>} />
            
            <Route path="/product/add" element={<CrearProducto/>} />
            <Route path="/product/list" element={<ListarProducto/>} />
            <Route path="/product/manage" element={<AdministrarProducto/>} />
            <Route path="/product/update/:codProducto" element={<EditarProducto/>} />

        </Routes>
    );

}