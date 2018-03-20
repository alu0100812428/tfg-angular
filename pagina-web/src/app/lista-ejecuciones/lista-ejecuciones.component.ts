import { Component, OnInit } from '@angular/core';
import { EjecucionesService } from '../ejecuciones.service';
import { ResumenEjecucionComponent } from '../resumen-ejecucion/resumen-ejecucion.component';

@Component({
  selector: 'app-lista-ejecuciones',
  templateUrl: './lista-ejecuciones.component.html',
  styleUrls: ['./lista-ejecuciones.component.css']
})
export class ListaEjecucionesComponent implements OnInit {

  constructor(private ejecuciones: EjecucionesService) {}

  ngOnInit() {
  }

}
