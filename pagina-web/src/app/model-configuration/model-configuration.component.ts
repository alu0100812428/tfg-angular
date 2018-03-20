import { Component, OnInit } from '@angular/core';
import { ModelosService } from '../modelos.service';
import { Router } from '@angular/router';
import { EjecucionesService } from '../ejecuciones.service';

@Component({
  selector: 'app-model-configuration',
  templateUrl: './model-configuration.component.html',
  styleUrls: ['./model-configuration.component.css']
})
export class ModelConfigurationComponent implements OnInit {

  constructor(private router:Router,private algoritmos: ModelosService,private ejecuciones: EjecucionesService) { }

  ngOnInit() {
  }
  
  enviar_tareas(data){
    
    var titulo = data.target.elements[0].value;
    var n_tareas = data.target.elements[1].value;
    
    this.ejecuciones.nuevo_resumen_ejecucion(this.algoritmos.id_actual,titulo,n_tareas);
    this.router.navigate(['ejecuciones']);
    
    return false;
  }

}
