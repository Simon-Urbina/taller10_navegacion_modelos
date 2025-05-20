import { useState } from "react";
import { ARREGLO_GATOS } from "../../mocks/GatoMock";
import { Gato } from "../../models/Gato";
import { Link } from "react-router-dom";

export const AdministrarGato = () => {

    /* Definición de variables */
    const [arregloGatos] = useState<Gato[]>(ARREGLO_GATOS);

    return (
        <div className="mt-5">
            
            <div className="d-flex justify-content-center">
                <div className="col-10">
                    <h2>Administrar Gatos</h2>
                    <span className="d-flex justify-content-end">

                        <Link to="/cat/add" className="btn btn-outline-primary col-2 justify-content-center align-items-center">
                        <i className="fa fa-plus"></i>
                        Agregar
                        </Link>
                    </span>

                    <table className="table table-sm table-hover table-striped mt-4">

                        <thead className="table table-dark bg-dark">
                            <tr className="text-center">
                                <td width="10%">Código</td>
                                <td width="20%">Nombre</td>
                                <td width="15%">Raza</td>
                                <td width="15%">Fecha de Nacimiento</td>
                                <td width="20%">Dueño</td>
                                <td width="20%">&nbsp;</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                arregloGatos.map((objGato, indice)=>(
                                    <tr key={indice} className="text-center">
                                        <td>{objGato.idGato}</td>
                                        <td>{objGato.nombreGato}</td>
                                        <td>{objGato.razaGato}</td>
                                        <td>{objGato.nacimientoGato.toLocaleDateString()}</td>
                                        <td>{objGato.duenioGato.nombreDuenio}</td>
                                        <td>
                                            <a href="" className="btn btn-info btn-sm mx-1 text-white">
                                                <i className="fa fa-edit"></i>
                                            </a>
                                            <button className="btn btn-danger btn-sm">
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>

                </div>
                
            </div>

        </div>
    );

}