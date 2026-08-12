import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Inicio';
  
  //variable para almacenar el estado del back
  statusBackend: any = null;
  errorConexion: string | null = null;

  //servicio de la API
  private apiService = inject(ApiService);

  ngOnInit(){
  //Al cargar el componente solicitamos el estado de la API
  this.apiService.getStatus().subscribe({
    next: (data) => {
        this.statusBackend = data;
        console.log('Conexion exitosa con el backend',data);
        },
        error: (err) => {
            this.errorConexion = 'No se pudo conectar con el backend';
            console.error('Error de conexion:',err);
            }
        });
     }
}
