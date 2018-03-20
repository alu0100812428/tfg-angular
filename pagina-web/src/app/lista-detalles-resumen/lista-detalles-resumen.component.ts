import { Component, OnInit ,Input} from '@angular/core';
import { EjecucionComponent } from '../ejecucion/ejecucion.component';
import { EjecucionesService } from '../ejecuciones.service';
import { DetallesResumenComponent } from '../detalles-resumen/detalles-resumen.component';

@Component({
  selector: 'app-lista-detalles-resumen',
  templateUrl: './lista-detalles-resumen.component.html',
  styleUrls: ['./lista-detalles-resumen.component.css']
})
export class ListaDetallesResumenComponent implements OnInit {

  constructor(private ejecuciones: EjecucionesService) { }

  ngOnInit() {
  }

}
