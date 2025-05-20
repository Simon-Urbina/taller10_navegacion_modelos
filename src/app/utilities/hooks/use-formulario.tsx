import { useState, ChangeEvent } from "react";
<<<<<<< HEAD
import { Producto } from "../../models/Producto";
=======
>>>>>>> 25260569bcae36f403ab5c8576261d9f0bb7588c

export const useFormulario = <T extends Object> (objInicial: T) => {

    const [objeto, setObjeto] = useState(objInicial);

    /* Doble enlace */

    const dobleEnlace = ({target}: ChangeEvent<any>) => {

        const {name, value} = target;

        setObjeto({...objeto, [name]: value});

    };
    
    return {
        objeto, dobleEnlace, ...objeto
    };

}