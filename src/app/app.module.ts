import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CriarClienteComponent } from './criar-cliente/criar-cliente.component';
import { ToggleClienteComponent } from './toggle-cliente/toggle-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    CriarClienteComponent,
    ToggleClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
