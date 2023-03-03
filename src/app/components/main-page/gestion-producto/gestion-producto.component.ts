import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from 'src/app/components/shared/services/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { FrmProductosComponent } from './frm-productos/frm-productos.component';
import { Producto } from '../../shared/models/producto';

@Component({
  selector: 'app-gestion-producto',
  templateUrl: './gestion-producto.component.html',
  styleUrls: ['./gestion-producto.component.css']
})
export class GestionProductoComponent {

  listarProductos : Producto[] = [];

  displayedColumns: string[] = ['nombreProducto', 'valorUnitario','actions'];
  dataSource: MatTableDataSource<Producto> | any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public servProducto: ProductoService
    ,public dialog: MatDialog,)    
    {
      this.dataSource = new MatTableDataSource(this.listarProductos);      
    }  

  ngOnInit(): void {
    this.cargarListaProductos();  
  }

  public cargarListaProductos(){
    this.servProducto.getProductos().subscribe(
      (respuesta:Producto[]) =>{
        console.log("respuesta servicio:", respuesta);
        if (respuesta){
          this.dataSource.data = respuesta.sort((a,b) => a.nombreProducto.localeCompare(b.nombreProducto));
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error => {
        console.log("Error al consultar el servicio:", error.error);
        // this.utilidades.mostrarMensajesErrores(error.status, error.error);
      });    
  }

  buscarPorFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  crear() {
    const dialogRef = this.dialog.open(FrmProductosComponent, {
      width: '100%',
      data: { disabled: false },
      disableClose: true
    });   
    // dialogRef.afterClosed().subscribe(() => {
    //   this.cargarCorporaciones();
    //   this.refreshTable();
    // });
  }

  editar(data: any) {
    const dialogRef = this.dialog.open(FrmProductosComponent, {
      width: '100%',
      data,
      disableClose: true
    });
  }

}
