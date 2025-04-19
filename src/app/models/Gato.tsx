import { Duenio } from "./Duenio";

export class Gato {

    public idGato: number;
    public nombreGato: string;
    public razaGato: string;
    public nacimientoGato: Date;
    public duenioGato: Duenio;

    constructor (id: number, nom: string, raza: string, fecha: Date, duenio: Duenio) {
        this.idGato = id;
        this.nombreGato = nom;
        this.razaGato = raza;
        this.nacimientoGato = fecha;
        this.duenioGato = duenio;
    }

}