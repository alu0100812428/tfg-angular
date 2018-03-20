import { Component, OnInit, Input } from '@angular/core';
import { EjecucionComponent } from '../ejecucion/ejecucion.component';
import { EjecucionesService } from '../ejecuciones.service';
import { ModelosService } from '../modelos.service';

@Component({
  selector: 'app-resumen-ejecucion',
  templateUrl: './resumen-ejecucion.component.html',
  styleUrls: ['./resumen-ejecucion.component.css']
})
export class ResumenEjecucionComponent implements OnInit {

  @Input() ejecucion: EjecucionComponent;

  constructor(private ejecuciones: EjecucionesService,private algoritmos: ModelosService) { 

  }

  ngOnInit() {
  }

  get_ejecuciones(id_resumen: number){
    this.ejecuciones.get_ejecuciones(id_resumen);
  }
  
}
