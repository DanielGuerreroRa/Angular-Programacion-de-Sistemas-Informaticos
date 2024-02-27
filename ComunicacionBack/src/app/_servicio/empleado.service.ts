import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Empleado } from '../_modelo/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private url:string='http://localhost:8080/api/empleados';
  empleadoCambio = new Subject<Empleado[]>();

  listar(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.url);
  }

  alta(e:Empleado): Observable<Empleado>{
    console.log("Ha llegado")
    return this.http.post<Empleado>(this.url,e);
  }

  constructor(private http:HttpClient) { }
}
