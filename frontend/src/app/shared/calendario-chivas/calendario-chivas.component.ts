import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Partido } from '../../core/models/partido.model';

@Component({
  selector: 'app-calendario-chivas',
  imports: [],
  templateUrl: './calendario-chivas.component.html',
  styleUrl: './calendario-chivas.component.css'
})
export class CalendarioChivasComponent implements OnInit {
  private apiService = inject(ApiService);

  partidos: Partido[] = [];
  cargando = true;
  error: string | null = null;

  ngOnInit(): void {
    this.apiService.getCalendarioChivas().subscribe({
      next: (datos) => {
        this.partidos = datos;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar el calendario:', error);
        this.error = 'No fue posible cargar el calendario.';
        this.cargando = false;
      }
    });
  }
}