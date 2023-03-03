import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Producto) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }

}
