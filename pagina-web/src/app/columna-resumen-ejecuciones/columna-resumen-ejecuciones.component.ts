import { Component, OnInit } from '@angular/core';
import { EjecucionesService } from '../ejecuciones.service';

@Component({
  selector: 'app-columna-resumen-ejecuciones',
  templateUrl: './columna-resumen-ejecuciones.component.html',
  styleUrls: ['./columna-resumen-ejecuciones.component.css']
})
export class ColumnaResumenEjecucionesComponent implements OnInit {

  constructor(private ejecuciones: EjecucionesService) { }

  ngOnInit() {
  }

}
