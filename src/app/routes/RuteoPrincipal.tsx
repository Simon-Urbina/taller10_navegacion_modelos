import { Route, Routes } from "react-router-dom";
import { CrearGato } from "../components/gato/CrearGato";
import { ListarGato } from "../components/gato/ListarGato";
import { AdministrarGato } from "../components/gato/AdministrarGato";
import { EditarGato } from "../components/gato/EditarGato";
import { Inicio } from "../components/contenedor/Inicio";
import { Error } from "../components/contenedor/Error";

export const RuteoPrincipal = () => {

    return (
        <Routes>

            {/* Rutas Obligatorias */}
            <Route path="/" element = {<Inicio/>} />
            <Route path="*" element = {<Error/>} />

            <Route path="/home" element={<Inicio/>} />
            
            <Route path="/cat/add" element={<CrearGato/>} />
            <Route path="/cat/list" element={<ListarGato/>} />
            <Route path="/cat/manage" element={<AdministrarGato/>} />
            <Route path="/cat/update" element={<EditarGato/>} />

        </Routes>
    );

}