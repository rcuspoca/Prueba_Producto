import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.css'] 
})
export class UtilitiesComponent {

  constructor(
    private _snackBar: MatSnackBar
  ){}

  openSnackBar(message: string, action: string, clase: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [clase]
    });
  }

  mostrarMensajesErrores(error: number, mensaje: string) {

    switch (error) {
      case 200:
        if (mensaje === null || mensaje === '') {
          this.openSnackBar("Operación realizada correctamente!.", "X", "green-snackbar");
        } else {
          this.openSnackBar(mensaje, "X", "green-snackbar");
        }
        break;
      case 201:
        if (mensaje === null || mensaje === '') {
          this.openSnackBar("Operación realizada correctamente!.", "X", "green-snackbar");
        } else {
          this.openSnackBar(mensaje, "X", "green-snackbar");
        }
        break;
      case 500:
        if (mensaje === null || mensaje === '') {
          this.openSnackBar("Se presentó un error interno al realizar la operación (500 Internal Server Error).", "X", "red-snackbar");
        } else {
          this.openSnackBar(mensaje, "X", "red-snackbar");
        }
        break;
      case 404:
        if (mensaje === null || mensaje === '') {
          this.openSnackBar("El recurso del request no se ha podido encontrar, por favor intentarlo mas tarde!", "X", "blue-snackbar");
        } else {
          this.openSnackBar(mensaje, "X", "blue-snackbar");
        }
        break;
      case 400:
        if (mensaje === null || mensaje === '') {
          this.openSnackBar("El servidor no puede o no va a procesar el request por un error de sintaxis del cliente (Parámetros incorrectos).", "X", "orange-snackbar");
        } else {
          this.openSnackBar(mensaje, "X", "orange-snackbar");
        }
        break;
      default:
        if (mensaje === null || mensaje === '') {
          this.openSnackBar("Error al realizar la petición http, por favor validar con el administrador del sistema!.", "X", "orange-snackbar");
        } else {
          this.openSnackBar(mensaje, "X", "orange-snackbar");
        }
        break;
    }    
  }

   //checkMessageFailModuleRegla(error): string {

    // if (typeof error.error[0] === 'string') {
    //   return error.error[0];
    // }

    // if (typeof error.error === 'string') {
    //   return error.error;
    // }

    // return typeof error.error.text !== 'undefined' ? error.error.text
    //   : typeof error.error.errors.Codigo !== 'undefined' ? error.error.errors.Codigo
    //     : typeof error.error.errors.Codigo !== 'undefined' ? error.error.errors.Codigo[0]
    //       : typeof error.error.errors.Nombre !== 'undefined' ? error.error.errors.Nombre[0]
    //         : '';
  //}


}
