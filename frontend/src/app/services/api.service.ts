import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from '../core/models/partido.model';
import { EquipoTabla } from '../core/models/equipo-tabla.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    //inyeccion de dependencias en angular
    private http = inject(HttpClient);

    // url backend express
    private apiUrl = 'http://localhost:3000/api';

    //metodo para verificar el estado del back
    getStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/status`);
    }
    //metodo para vrificar conexion a bd sql
    testDb(): Observable<any>{
    return this.http.get(`${this.apiUrl}/test-db`);
    }
    //metodo para obtener el calendario de partidos
    getCalendarioChivas(): Observable<Partido[]> {
    return this.http.get<Partido[]>(`${this.apiUrl}/calendario/chivas`);
    }
    //metodo para obtener la tabla de posiciones
    getTablaGeneral(): Observable<EquipoTabla[]> {
    return this.http.get<EquipoTabla[]>(`${this.apiUrl}/tabla-general`);
    }

  constructor() { }
}
