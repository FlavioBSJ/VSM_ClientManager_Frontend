import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cidade } from '../model/cidade';
import { Cliente } from '../model/cliente';
import { Endereco } from '../model/endereco';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  

  constructor(private clienteService:ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.cliente.endereco = new Endereco();
    this.cliente.endereco.cidade = new Cidade();
  }

  salvarCliente(){
    this.clienteService.criarCliente(this.cliente).subscribe(data => {
      console.log(data);
      this.router.navigate(['/clientes'])
    }, 
    error => console.log(error));
  }

  editarCliente(){
    this.clienteService.editarCliente(this.cliente).subscribe(data => {
      console.log(data);
      this.router.navigate(['/clientes'])
    }, 
    error => console.log(error));
  }

  onSubmit(){
    if(this.cliente.id == null){
      this.salvarCliente();
    }
    else{
      this.editarCliente();
    }
    console.log(this.cliente);
  }
}
