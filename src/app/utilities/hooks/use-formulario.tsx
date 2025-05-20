import { useState, ChangeEvent } from "react";
import { Producto } from "../../models/Producto";

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