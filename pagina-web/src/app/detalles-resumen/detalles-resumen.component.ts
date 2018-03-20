import { Component, OnInit, Input } from '@angular/core';
import { EjecucionComponent } from '../ejecucion/ejecucion.component';
import { EjecucionesService } from '../ejecuciones.service';

@Component({
  selector: 'app-detalles-resumen',
  templateUrl: './detalles-resumen.component.html',
  styleUrls: ['./detalles-resumen.component.css']
})
export class DetallesResumenComponent implements OnInit {

  @Input() ejecucion: EjecucionComponent;

  constructor(private ejecuciones: EjecucionesService) {

  }

  ngOnInit() {
  }

}
