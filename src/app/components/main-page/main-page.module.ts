import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from '../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GestionProductoComponent } from './gestion-producto/gestion-producto.component';
import { GestionClienteComponent } from './gestion-cliente/gestion-cliente.component';
import { VentaClientesComponent } from './venta-clientes/venta-clientes.component';
import { FrmProductosComponent } from './gestion-producto/frm-productos/frm-productos.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [
    MainPageComponent,
    BoardComponent,
    NavbarComponent,
    GestionProductoComponent,
    GestionClienteComponent,
    VentaClientesComponent,
    FrmProductosComponent,
    LoginComponent
  ],
  imports: [
    MainPageRoutingModule,
    SharedModule
  ]
})
export class MainPageModule { }
