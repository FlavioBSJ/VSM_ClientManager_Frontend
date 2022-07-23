import { Cidade } from "./cidade";

export class Endereco{
  id: number;
  rua:string;
  numero:string;
  bairro:string;
  cep:string;
  cidade:Cidade;
}