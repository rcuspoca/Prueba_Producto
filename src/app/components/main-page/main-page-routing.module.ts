import { verifyHostBindings } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { GestionClienteComponent } from './gestion-cliente/gestion-cliente.component';
import { GestionProductoComponent } from './gestion-producto/gestion-producto.component';
import { MainPageComponent } from './main-page.component';
import { VentaClientesComponent } from './venta-clientes/venta-clientes.component';

const routes: Routes = [
  {path:'', component : MainPageComponent, children:[
    {path: '', component: BoardComponent},
    {path:'productos', component: GestionProductoComponent},
    {path:'clientes', component: GestionClienteComponent},
    {path: 'ventas', component: VentaClientesComponent}  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
