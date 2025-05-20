import { useState } from "react";
import { ARREGLO_PRODUCTOS } from "../../mocks/ProductoMock";
import { Producto } from "../../models/Producto";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Categoria } from "../../models/Categoria";
import { generarMensaje } from "../../utilities/funciones/Mensajes";

export const AdministrarProducto = () => {

    /* Definición de variables */
    const [arregloProductos] = useState<Producto[]>(ARREGLO_PRODUCTOS);

    /* Variables de la ventana de confirmación */
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => {
        setShow(false);
    };

    /* Lógica de administración */
    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto> (new Producto(0, "", 0, "", new Date, new Categoria(0, "")));

    const eliminarProducto = (objProducto: Producto) => {
        let tamano : number = ARREGLO_PRODUCTOS.length;
        for (let i = 0; i < tamano; i++) {
            if (ARREGLO_PRODUCTOS[i] !== undefined) {
                
                if (ARREGLO_PRODUCTOS[i].idProducto == objProducto.idProducto) {
                    arregloProductos.splice(i, 1);
                    setShow(false);
                    generarMensaje("success", "Producto " + objProducto.nombreProducto + " de " + objProducto.categoriaProducto.nombreCategoria + " ha sido eliminado");
                }

            }
        }
    };


    return (
        <div className="mt-5">
            
            <div className="d-flex justify-content-center">
                <div className="col-10">
                    <h2>Administrar Productos</h2>
                    <span className="d-flex justify-content-end">

                        <Link to="/product/add" className="btn btn-outline-primary col-2 justify-content-center align-items-center">
                        <i className="fa fa-plus"></i>
                        Agregar
                        </Link>
                    </span>

                    <table className="table table-sm table-hover table-striped mt-4">

                        <thead className="table table-dark bg-dark">
                            <tr className="text-center">
                                <td width="10%">Código</td>
                                <td width="20%">Nombre</td>
                                <td width="10%">Valor</td>
                                <td width="10%">Descripción</td>
                                <td width="10%">Fecha de Vencimiento</td>
                                <td width="20%">Categoría</td>
                                <td width="20%">&nbsp;</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                arregloProductos.map((objProducto, indice)=>(
                                    <tr key={indice} className="text-center">
                                        <td>{objProducto.idProducto}</td>
                                        <td>{objProducto.nombreProducto}</td>
                                        <td>{objProducto.valorProducto}</td>
                                        <td>{objProducto.descripcionProducto}</td>
                                        <td>{objProducto.vencimientoProducto.toLocaleDateString()}</td>
                                        <td>{objProducto.categoriaProducto.nombreCategoria}</td>
                                        <td>
                                            <Link to={`/product/update/` + objProducto.idProducto} className="btn btn-info btn-sm mx-1 text-white">
                                                <i className="fa fa-edit"></i>
                                            </Link>
                                            <button className="btn btn-danger btn-sm"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShow(true);
                                                setProductoSeleccionado(objProducto);
                                            }}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                    
                    {/* Inicio: ventana eliminar */}
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Eliminar Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <p>¿Estás seguro de que quieres borrar <strong>{productoSeleccionado.nombreProducto}?</strong></p>
                        </Modal.Body>
                        <Modal.Footer>
                        <button className="btn btn-outline-danger" type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            eliminarProducto(productoSeleccionado);
                        }}>Eliminar</button>
                        <Button className="btn btn-dark" onClick={handleClose}>
                            Cerrar
                        </Button>                       
                        </Modal.Footer>
                    </Modal>
                    {/* Fin: ventana eliminar */}

                </div>
                
            </div>

        </div>
    );

}