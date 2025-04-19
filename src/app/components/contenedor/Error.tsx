import { useNavigate } from "react-router-dom";

export const Error = () => {

    /* Definición de variables */
    const navegacion = useNavigate();

  return (

    <div className="mt-5 ">
        
      <div className="d-flex justify-content-center">

        <div className="col-10 bg-primary rounded-3 p-5 mb-5">

            <div className="d-flex justify-content-center align-items-center">

                <div className="col-6 text-center">

                    <h1 className="fw-semibold text-black no-encontrado">
                        4<strong className="text-white">0</strong>4
                    </h1>

                    <p className="text-white fs-2">Recurso No Encontrado</p>

                    <span className="d-flex justify-content-center">
                        <button className="btn btn-dark col-6 fs-3" onClick={()=>navegacion(-1)}>
                            <i className="fa fa-arrow-left-long"> Regresar</i>
                        </button>
                    </span>

                </div>



                <div className="col-6 text-center">
                    <i className="fa fa-bug fa-shake text-dark tamano-icono"></i>
                </div>

            </div>

        </div>

      </div>

    </div>
  );

};
