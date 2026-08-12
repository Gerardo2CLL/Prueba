import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor() { }
}
