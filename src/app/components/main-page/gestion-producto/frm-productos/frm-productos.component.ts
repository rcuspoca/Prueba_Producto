import { Component, Inject } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'src/app/components/shared/models/producto';
import { ProductoService } from 'src/app/components/shared/services/producto.service';
import { UtilitiesComponent } from 'src/app/components/shared/utilities/utilities.component';

@Component({
  selector: 'app-frm-productos',
  templateUrl: './frm-productos.component.html',
  styleUrls: ['./frm-productos.component.css'],
  providers: [UtilitiesComponent]
})
export class FrmProductosComponent {

  nombreProducto: String | any;  
  mensajeError: string | any;

  constructor( 
    public servicioProducto: ProductoService,
    public dialogRef: MatDialogRef<FrmProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public datosProducto: Producto,
    private utilidades: UtilitiesComponent,
    
  ){ }


  validarLetrasNumerosEspacios(event: any){
    const regexpLetrasNumerosEspacios = /[a-zA-Z0-9 ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpLetrasNumerosEspacios.test(inputCharacter)) {      
      event.preventDefault();
    }
  }
  formControl = new FormControl('', [
    Validators.required
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Campo Requerido' :
    this.formControl.hasError('minlength') ? 'Campo debe tener al menos 4 caracteres!' :
    this.formControl.hasError('maxlength') ? 'Campo debe tener máximo 25 caracteres!' :
    '';
  }

  guardarProducto(formControl: NgForm){

    this.nombreProducto = formControl.value.nombre;
    if (this.servicioProducto.formData.idProducto == 0)
    {
      this.servicioProducto.postProducto(formControl.value).subscribe(
        reglaRespuesta => {
          this.utilidades.openSnackBar("El producto: "+ this.nombreProducto.toUpperCase() 
            +", ha sido creado con éxito.","X", "green-snackbar");
        },
        error => {
          if (error.status == 201 || error.status == 200)
          {
            this.utilidades.openSnackBar("El producto: "+ this.nombreProducto.toUpperCase() 
              +", ha sido creado con éxito.","X", "green-snackbar");
            this.limpiarFormulario(formControl);
          }
          else{            
            this.mensajeError = "this.utilidades.checkMessageFailModuleRegla(error)";
            this.utilidades.mostrarMensajesErrores(error.status, this.mensajeError);
          }

        }
      );
    }
    else
    {
      formControl.value.idProducto= this.servicioProducto.formData.idProducto;
      this.servicioProducto.putProducto(formControl.value).subscribe(
        reglaRespuesta => {
          this.utilidades.openSnackBar("El producto: "+ this.nombreProducto.toUpperCase() 
            +", ha sido modificado con éxito.","X", "green-snackbar");
        },
        error => {
          if (error.status == 201 || error.status == 200)
            {
              this.utilidades.openSnackBar("El producto: "+ this.nombreProducto.toUpperCase() 
              +", ha sido modificado con éxito.","X", "green-snackbar");
            }
            else{
              this.mensajeError = "this.utilidades.checkMessageFailModuleRegla(error)";
              this.utilidades.mostrarMensajesErrores(error.status, this.mensajeError);
            }
          }
        );
      }
      this.limpiarFormulario(formControl);
  }
  cancelarOperacion(formControl: NgForm): void {
    this.dialogRef.close();
    this.limpiarFormulario(formControl);
  }

  limpiarFormulario(formControl: NgForm) {
    formControl.form.reset();
    this.servicioProducto.formData = new Producto();
  }
}

