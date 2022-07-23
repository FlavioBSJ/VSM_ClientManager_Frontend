import { Endereco } from "./endereco";

export class Cliente {
  id: number;
  nome:string;
  cpf:string;
  email:string;
  telefone:string;
  endereco:Endereco;
  ativo:boolean;

}