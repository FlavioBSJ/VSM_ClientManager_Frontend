import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  private getClientes(){
    this.clienteService.getListaClientes().subscribe(data => {
      this.clientes = data;
    })
  }

  public filtrarClientes(){
    return this.clientes.filter(cliente => cliente.ativo == true);
  }
}
