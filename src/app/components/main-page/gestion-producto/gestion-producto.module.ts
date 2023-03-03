import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FrmProductosComponent } from './frm-productos/frm-productos.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FrmProductosComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule, 
    BrowserModule   
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionProductoModule { }
