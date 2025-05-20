import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useFormulario } from "../../utilities/hooks/use-formulario";
import { Gato } from "../../models/Gato";
import { Duenio } from "../../models/Duenio";
import { ARREGLO_DUENIOS } from "../../mocks/DuenioMock";
import { useState } from "react";
import { ARREGLO_GATOS } from "../../mocks/GatoMock";
import { generarMensaje } from "../../utilities/funciones/Mensajes";
import { useNavigate } from "react-router-dom";

export const CrearGato = () => {

    /* Definir variables */
    type formulario = React.FormEvent<HTMLFormElement>;
    let {nombreGato, razaGato, dobleEnlace, objeto} = useFormulario<Gato>(new Gato(0, "", "", new Date(), new Duenio(0, "")));

    /* Manejo de Seleccionable */
    const [arrDuenios] = useState<Duenio[]>(ARREGLO_DUENIOS);
    let [codDuenio, setCodDuenio] = useState<number>(-1);

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

            let codigo = ARREGLO_GATOS.length + 1;
            objeto.idGato = codigo;
            objeto.duenioGato = arrDuenios.find((objDuenio) => objDuenio.idDuenio === codDuenio) as Duenio;
            objeto.nacimientoGato = fecha;
            ARREGLO_GATOS.push(objeto);

            // Mensaje
            generarMensaje("success", "Excelente, registraste el gato");

            // Limpie cajas
            // limpiarCajas(objFormi); /* NO */

            // Llebar a administrar
            navegacion("/cat/manage");

        }

    }

    const limpiarCajas = (formulario: HTMLFormElement) => {

        formulario.reset();
        objeto.idGato = 0;
        objeto.nombreGato = "";
        objeto.razaGato = "";
        objeto.duenioGato = new Duenio(0, "");
        objeto.nacimientoGato = new Date();

        formulario.classList.remove("was-validated");

    }

    return (
        <div className="d-flex mt-5 justify-content-center">

                <div className="col-10">
                    <h2 className="fw-semibold fst-italic">Registrar Gato</h2>

                    <div className="d-flex justify-content-center">
                        <div className="card col-6">
                            <div className="card-header bg-primary text-white">
                                <h4 className="card-title fw-bold">Formulario de Registro</h4>
                            </div>
                            <div className="card-body">
                                <Form onSubmit={enviarFormulario} validated={enProceso}>

                                    <Form.Group className="mb-3" controlId="nombreGato">
                                        <Form.Label htmlFor="nombreGato">
                                            <span className="negrito">*</span> {" "}
                                            Nombre: 
                                        </Form.Label>
                                        <Form.Control className="form-control" name="nombreGato" id="nombreGato" value={nombreGato} onChange={dobleEnlace} required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="razaGato">
                                        <Form.Label htmlFor="razaGato">
                                            <span className="negrito">*</span> {" "}
                                            Raza: 
                                        </Form.Label>
                                        <Form.Control className="form-control" name="razaGato" id="razaGato" value={razaGato} onChange={dobleEnlace} required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="nacimientoGato">
                                        <Form.Label htmlFor="nacimientoGato">
                                            <span className="negrito">*</span> {" "}
                                            Fecha de Nacimiento: 
                                        </Form.Label>
                                        <br />
                                        <DatePicker
                                            className="form-control"
                                            id="nacimientoGato"
                                            name="nacimientoGato" 
                                            selected={fecha}
                                            onChange={(fechaSeleccionada) => {setFecha(fechaSeleccionada as Date)}} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="duenioGato">
                                        <Form.Label htmlFor="duenioGato">
                                            <span className="negrito">*</span> {" "}
                                            Dueño: 
                                        </Form.Label>
                                        <Form.Select className="form-select"
                                            name="codDuenio"
                                            id="codDuenio"
                                            value={codDuenio}
                                            onChange={(e) => { setCodDuenio(Number(e.target.value)) }}
                                            required>
                                            <option value={-1}>Seleccionar Dueño</option>
                                            {
                                                arrDuenios.map((objDuenio, indice) => (
                                                    <option value={objDuenio.idDuenio} key={indice}>
                                                        {objDuenio.nombreDuenio}
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