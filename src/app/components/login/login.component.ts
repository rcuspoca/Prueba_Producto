import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  formulario: FormGroup;

  constructor(private fb: FormBuilder
    ,private _snackBar: MatSnackBar
    ,private router:Router){

      this.formulario= this.fb.group({
      usuario:['',Validators.required],
      contrasena:['',Validators.required]
    })
  }
  Validar(){
    if(this.formulario.value.usuario == 'prueba123'
      && this.formulario.value.contrasena == "prueba123"){
        this.router.navigate(['main-page']);
    }else{
      this.openSnackBar("Usuario/Contraseña Inválidas","","orange-snackbar")
    }
  }

  openSnackBar(message: string, action: string, clase: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [clase]
    });
  }

}
