import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-toggle-cliente',
  templateUrl: './toggle-cliente.component.html',
  styleUrls: ['./toggle-cliente.component.css']
})
export class ToggleClienteComponent implements OnInit {

  id: number;
  checkboxFlag: boolean;

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleCliente(){
    if(this.checkboxFlag == undefined){
      this.checkboxFlag = false;
    }
    this.clienteService.clienteToggler(this.id, this.checkboxFlag).subscribe(data => {
      console.log(data);
      this.router.navigate(['/clientes'])
    }, 
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.id);
    console.log(this.checkboxFlag);
    this.toggleCliente();
  }
}
