import { Gato } from "../models/Gato";
import { ARREGLO_DUENIOS } from "./DuenioMock";

export const ARREGLO_GATOS: Array<Gato> = [
    new Gato(1, "Uchi", "Criollo", new Date("01/04/2020"), ARREGLO_DUENIOS[0]), /* mm/dd/aa */
    new Gato(2, "Motas", "Siames", new Date("05/08/2022"), ARREGLO_DUENIOS[1]),
    new Gato(3, "Cuchifli", "Criollo", new Date("10/12/2021"), ARREGLO_DUENIOS[2]),
    new Gato(4, "Mona", "Amarilla", new Date("09/06/2015"), ARREGLO_DUENIOS[3]),
    new Gato(5, "Garfield", "Naranja", new Date("07/01/2023"), ARREGLO_DUENIOS[4]),
    new Gato(6, "Pacho", "Egipcio", new Date("01/04/2020"), ARREGLO_DUENIOS[0]),
]