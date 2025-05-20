import { useState } from "react";
import { ARREGLO_PRODUCTOS } from "../../mocks/ProductoMock";
import { Producto } from "../../models/Producto";

export const ListarProducto = () => {

    /* Definición de variables */
    const [arregloProductos] = useState<Producto[]>(ARREGLO_PRODUCTOS);

    return (
        <div className="mt-5">
            
            <div className="d-flex justify-content-center">
                <div className="col-10">
                    <h2>Listar Productos</h2>

                    <table className="table table-sm table-hover table-striped mt-4">

                        <thead className="table table-dark bg-dark">
                            <tr>
                                <td>Código</td>
                                <td>Nombre</td>
                                <td>Valor</td>
                                <td>Descripción</td>
                                <td>Fecha de Vencimiento</td>
                                <td>Categoría</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                arregloProductos.map((objProducto, indice)=>(
                                    <tr key={indice}>
                                        <td>{objProducto.idProducto}</td>
                                        <td>{objProducto.nombreProducto}</td>
                                        <td>{objProducto.valorProducto}</td>
                                        <td>{objProducto.descripcionProducto}</td>
                                        <td>{objProducto.vencimientoProducto.toLocaleDateString()}</td>
                                        <td>{objProducto.categoriaProducto.nombreCategoria}</td>
objProducto                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>

                </div>
                
            </div>

        </div>
    );

}