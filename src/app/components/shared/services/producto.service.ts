import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  readonly urlAPI = environment.usProductoUrl;
  path ='/Producto';
  formData: Producto = new Producto();

  // Métodos y llamados a las Apis
  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]> (`${this.urlAPI+ this.path}`);
  }

  postProducto(datosVista: Producto) {
     return this.http.post<Producto>(`${this.urlAPI+ this.path}`, datosVista);
    }
  
  putProducto(datosVista: Producto) {    
    return this.http.put<Producto>(`${this.urlAPI+ this.path}`, datosVista);
  }

}
