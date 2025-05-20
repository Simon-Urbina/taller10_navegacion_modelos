import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useFormulario } from "../../utilities/hooks/use-formulario";
import { Producto } from "../../models/Producto";
import { Categoria } from "../../models/Categoria";
import { ARREGLO_CATEGORIAS } from "../../mocks/CategoriaMock";
import { useState } from "react";
import { ARREGLO_PRODUCTOS } from "../../mocks/ProductoMock";
import { generarMensaje } from "../../utilities/funciones/Mensajes";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditarProducto = () => {

    /* Envío del formulario */
    const [enProceso, setEnProceso] = useState<boolean>(false);
    const navegacion = useNavigate();

    const { codProducto } = useParams();

    const productoSeleccionado = ARREGLO_PRODUCTOS.find((objProducto) => objProducto.idProducto === Number(codProducto)) as Producto;

    /* Manejo de fecha */
    const [fecha, setFecha] = useState<Date>(
        productoSeleccionado ? productoSeleccionado.vencimientoProducto: new Date()
    );

    /* Manejo de Seleccionable */
    const [arrCategorias] = useState<Categoria[]>(ARREGLO_CATEGORIAS);
    let [codCategoria, setCodCategoria] = useState<number>(
        productoSeleccionado ? productoSeleccionado.categoriaProducto.idCategoria: -1
    );

    /* Definir variables */
    type formulario = React.FormEvent<HTMLFormElement>;
    let {nombreProducto, valorProducto, descripcionProducto, dobleEnlace, objeto} =
        useFormulario<Producto>
        (new Producto(Number(codProducto),
        productoSeleccionado ? productoSeleccionado.nombreProducto: "",
        productoSeleccionado ? productoSeleccionado.valorProducto: 0,
        productoSeleccionado ? productoSeleccionado.descripcionProducto: "",
        new Date(),
        productoSeleccionado ? productoSeleccionado.categoriaProducto: new Categoria(0, "")));

    const ActualizarProducto = (objProducto: Producto) => {
        let tamano = ARREGLO_PRODUCTOS.length;
        for (let i = 0; i < tamano; i++) {
            if (ARREGLO_PRODUCTOS[i] !== undefined) {
                
                if (ARREGLO_PRODUCTOS[i].idProducto == Number(codProducto)) {
                    ARREGLO_PRODUCTOS[i] = objProducto;
                }

            }
        }
    }

    const enviarFormulario = (frmEditar: formulario) => {

        frmEditar.preventDefault();
        setEnProceso(true);

        const objFormi = frmEditar.currentTarget;
        objFormi.classList.add("was-validated");

        if (objFormi.checkValidity() === false) {

            frmEditar.preventDefault();
            frmEditar.stopPropagation();
        } else {

            objeto.categoriaProducto = arrCategorias.find((objCategoria) => objCategoria.idCategoria === codCategoria) as Categoria;
            objeto.vencimientoProducto = fecha;
            ActualizarProducto(objeto);

            // Mensaje
            generarMensaje("success", "Excelente, actualizaste el producto");

            // Limpie cajas
            // limpiarCajas(objFormi); /* NO */

            // Llebar a administrar
            navegacion("/product/manage");

        }

    }

    const limpiarCajas = (formulario: HTMLFormElement) => {

        formulario.reset();
        objeto.idProducto = 0;
        objeto.nombreProducto = "";
        objeto.valorProducto = 0;
        objeto.descripcionProducto = "";
        objeto.categoriaProducto = new Categoria(0, "");
        objeto.vencimientoProducto = new Date();

        formulario.classList.remove("was-validated");

    }

    return (
        <div className="d-flex mt-5 justify-content-center">

                <div className="col-10">
                    <h2 className="fw-semibold fst-italic">Editar Producto</h2>

                    <div className="d-flex justify-content-center">
                        <div className="card col-6">
                            <div className="card-header bg-primary text-white">
                                <h4 className="card-title fw-bold">Formulario de Actualización</h4>
                            </div>
                            <div className="card-body">
                                <Form onSubmit={enviarFormulario} validated={enProceso}>

                                    <Form.Group className="mb-3" controlId="nombreProducto">
                                        <Form.Label htmlFor="nombreProducto">
                                            <span className="negrito">*</span> {" "}
                                            Nombre: 
                                        </Form.Label>
                                        <Form.Control className="form-control" name="nombreProducto" id="nombreProducto" value={nombreProducto} onChange={dobleEnlace} required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="valorProducto">
                                        <Form.Label htmlFor="valorProducto">
                                            <span className="negrito">*</span> {" "}
                                            Valor: 
                                        </Form.Label>
                                        <Form.Control className="form-control" name="valorProducto" id="valorProducto" value={valorProducto} onChange={dobleEnlace} required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="descripcionProducto">
                                        <Form.Label htmlFor="descripcionProducto">
                                            <span className="negrito">*</span> {" "}
                                            Descrpición: 
                                        </Form.Label>
                                        <Form.Control className="form-control" name="descripcionProducto" id="descripcionProducto" value={descripcionProducto} onChange={dobleEnlace} required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="vencimientoProducto">
                                        <Form.Label htmlFor="vencimientoProducto">
                                            <span className="negrito">*</span> {" "}
                                            Fecha de Vencimiento: 
                                        </Form.Label>
                                        <br />
                                        <DatePicker
                                            className="form-control"
                                            id="vencimientoProducto"
                                            name="vencimientoProducto" 
                                            selected={fecha}
                                            onChange={(fechaSeleccionada) => {setFecha(fechaSeleccionada as Date)}} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="categoriaProducto">
                                        <Form.Label htmlFor="categoriaProducto">
                                            <span className="negrito">*</span> {" "}
                                            Categoría: 
                                        </Form.Label>
                                        <Form.Select className="form-select"
                                            name="codCategoria"
                                            id="codCategoria"
                                            value={codCategoria}
                                            onChange={(e) => { setCodCategoria(Number(e.target.value)) }}
                                            required>
                                            <option value={-1}>Seleccionar Dueño</option>
                                            {
                                                arrCategorias.map((objCategoria, indice) => (
                                                    <option value={objCategoria.idCategoria} key={indice}>
                                                        {objCategoria.nombreCategoria}
                                                    </option>
                                                ))
                                            }
                                        </Form.Select>
                                    </Form.Group>

                                    <span className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary mx-2 col-3"> <i className="fa fa-check" /> Actualizar</button>
                                        <Link to={`/product/manage`} className="btn btn-danger mx-2 col-3"> <i className="fa fa-x" /> Cancelar</Link>
                                    </span>

                                </Form>
                            </div>
                        </div>
                    </div>

            </div>

        </div>
    );

}