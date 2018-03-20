import { Component, OnInit } from '@angular/core';
import { EjecucionesService } from '../ejecuciones.service';

@Component({
  selector: 'app-columna-ejecuciones',
  templateUrl: './columna-ejecuciones.component.html',
  styleUrls: ['./columna-ejecuciones.component.css']
})
export class ColumnaEjecucionesComponent implements OnInit {

  constructor(private ejecuciones: EjecucionesService) { }

  ngOnInit() {
  }

}
