import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = "api/cliente";

  constructor(private httpClient: HttpClient) { }

  getListaClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseUrl}`);
  }
  
  criarCliente(cliente: Cliente): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, cliente);
  }

  editarCliente(cliente: Cliente): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}`, cliente);
  }

  clienteToggler(id: number, ativo: boolean): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/${id}?ativo=${ativo}`, null);
  }
}
