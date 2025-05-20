import { Categoria } from "./Categoria";

export class Producto {

    public idProducto: number;
    public nombreProducto: string;
    public valorProducto: number;
    public descripcionProducto: string;
    public vencimientoProducto: Date;
    public categoriaProducto: Categoria;

    constructor (id: number, nom: string, valor: number, des: string, fecha: Date, categoria: Categoria) {
        this.idProducto = id;
        this.nombreProducto = nom;
        this.valorProducto = valor;
        this.descripcionProducto = des;
        this.vencimientoProducto = fecha;
        this.categoriaProducto = categoria;
    }

}