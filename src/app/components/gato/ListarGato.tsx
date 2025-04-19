import { useState } from "react";
import { ARREGLO_GATOS } from "../../mocks/GatoMock";
import { Gato } from "../../models/Gato";

export const ListarGato = () => {

    /* Definición de variables */
    const [arregloGatos] = useState<Gato[]>(ARREGLO_GATOS);

    return (
        <div className="mt-5">
            
            <div className="d-flex justify-content-center">
                <div className="col-10">
                    <h2>Listar Gatos</h2>

                    <table className="table table-sm table-hover table-striped mt-4">

                        <thead className="table table-dark bg-dark">
                            <tr>
                                <td>Código</td>
                                <td>Nombre</td>
                                <td>Raza</td>
                                <td>Fecha de Nacimiento</td>
                                <td>Dueño</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                arregloGatos.map((objGato, indice)=>(
                                    <tr key={indice}>
                                        <td>{objGato.idGato}</td>
                                        <td>{objGato.nombreGato}</td>
                                        <td>{objGato.razaGato}</td>
                                        <td>{objGato.nacimientoGato.toLocaleDateString()}</td>
                                        <td>{objGato.duenioGato.nombreDuenio}</td>
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