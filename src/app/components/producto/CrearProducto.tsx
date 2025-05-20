import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useFormulario } from "../../utilities/hooks/use-formulario";
import { Producto } from "../../models/Producto";
import { Categoria } from "../../models/Categoria";
import { ARREGLO_CATEGORIAS } from "../../mocks/CategoriaMock";
import { useState } from "react";
import { ARREGLO_PRODUCTOS } from "../../mocks/ProductoMock";
import { generarMensaje } from "../../utilities/funciones/Mensajes";
import { useNavigate } from "react-router-dom";

export const CrearProducto = () => {

    /* Definir variables */
    type formulario = React.FormEvent<HTMLFormElement>;
    let {nombreProducto, valorProducto, descripcionProducto, dobleEnlace, objeto} = useFormulario<Producto>(new Producto(0, "", 0, "", new Date(), new Categoria(0, "")))

    /* Manejo de Seleccionable */
    const [arrCategoria] = useState<Categoria[]>(ARREGLO_CATEGORIAS);
    let [codCategoria, setCodCategoria] = useState<number>(-1);

    /* Manejo de fecha */
    const [fecha, setFecha] = useState<Date>(new Date);

    /* Envío del formulario */
    const [enProceso, setEnProceso] = useState<boolean>(false);
    const navegacion = useNavigate();

    const enviarFormulario = (frmCrear: formulario) => {

        frmCrear.preventDefault();
        setEnProceso(true);

        const objFormi = frmCrear.currentTarget;
        objFormi.classList.add("was-validated");

        if (objFormi.checkValidity() === false) {

            frmCrear.preventDefault();
            frmCrear.stopPropagation();
        } else {

            let codigo = ARREGLO_PRODUCTOS.length + 1;
            objeto.idProducto = codigo;
            objeto.categoriaProducto = arrCategoria.find((objCategoria) => objCategoria.idCategoria === codCategoria) as Categoria;
            objeto.vencimientoProducto = fecha;
            ARREGLO_PRODUCTOS.push(objeto);

            // Mensaje
            generarMensaje("success", "Excelente, registraste el producto");

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
                    <h2 className="fw-semibold fst-italic">Registrar Producto</h2>

                    <div className="d-flex justify-content-center">
                        <div className="card col-6">
                            <div className="card-header bg-primary text-white">
                                <h4 className="card-title fw-bold">Formulario de Registro</h4>
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
                                            Descripción: 
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
                                            name="codDuenio"
                                            id="codDuenio"
                                            value={codCategoria}
                                            onChange={(e) => { setCodCategoria(Number(e.target.value)) }}
                                            required>
                                            <option value={-1}>Seleccionar Dueño</option>
                                            {
                                                arrCategoria.map((objCategoria, indice) => (
                                                    <option value={objCategoria.idCategoria} key={indice}>
                                                        {objCategoria.nombreCategoria}
                                                    </option>
                                                ))
                                            }
                                        </Form.Select>
                                    </Form.Group>

                                    <span className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary mx-2 col-3"> <i className="fa fa-check" /> Registrar</button>
                                        <button className="btn btn-danger mx-2 col-3"> <i className="fa fa-x" /> Cancelar</button>
                                    </span>

                                </Form>
                            </div>
                        </div>
                    </div>

            </div>

            

            

        </div>
    );

}