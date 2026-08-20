import { Component } from '@angular/core';
import { CalendarioChivasComponent } from '../../shared/calendario-chivas/calendario-chivas.component';
import { TablaGeneralComponent } from '../../shared/tabla-general/tabla-general.component';

@Component({
  selector: 'app-inicio',
  imports: [CalendarioChivasComponent, TablaGeneralComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {}