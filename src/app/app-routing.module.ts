import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CriarClienteComponent } from './criar-cliente/criar-cliente.component';
import { ToggleClienteComponent } from './toggle-cliente/toggle-cliente.component';

const routes: Routes = [
  {path: 'clientes', component: ClienteListComponent},
  {path: '', redirectTo: 'clientes', pathMatch:'full'},
  {path:'criar-cliente', component:CriarClienteComponent},
  {path:'toggle-cliente', component:ToggleClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
