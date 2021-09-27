import { Categoria } from "src/app/home/model/Categoria";

export interface Heroi {
    id: number;
    nome: string;
    categorias: Categoria;
}