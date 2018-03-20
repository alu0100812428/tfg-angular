import { Component, OnInit, Input } from '@angular/core';
import {ModeloComponent} from '../modelo/modelo.component';
import { Router } from '@angular/router';
import { ModelosService } from '../modelos.service';

@Component({
  selector: 'app-model-item',
  templateUrl: './model-item.component.html',
  styleUrls: ['./model-item.component.css']
})
export class ModelItemComponent implements OnInit {
  //@Input() name: string;  //Nombre del modelo
  @Input() modelo: ModeloComponent;

  constructor(private router:Router, private algoritmo: ModelosService) { 
  }

  funcion(id:number){
    this.algoritmo.seleccionar_algoritmo(id);
  }

  ngOnInit() {
  }

}
