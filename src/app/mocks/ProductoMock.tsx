import { Producto } from "../models/Producto";
import { ARREGLO_CATEGORIAS } from "./CategoriaMock";

export const ARREGLO_PRODUCTOS: Array<Producto> = [
    new Producto(1, "Papa", 15000, "Kilo de papa", new Date("01/01/2030"), ARREGLO_CATEGORIAS[3]) /* mm/dd/aa */
]