import { Component, OnInit, Input } from '@angular/core';
import {ModeloComponent} from '../modelo/modelo.component';
import { ModelosService } from '../modelos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {

  //id,nombre, descripcion, imagen, tamano, fecha 
  /*
  modelos : ModeloComponent[] = [
    new ModeloComponent('1','TSP','descripcion','https://qph.ec.quoracdn.net/main-qimg-344b9a414a293792a807072fd78ae3fc','100Mb','10/2/18'),
    new ModeloComponent('2','Calculo de determinantes','descripcion','https://www.matesfacil.com/matrices/determinante8.png','100Mb','10/2/18'),
    new ModeloComponent('3','Matrices','descripcion','https://ekuatio.com/wp-content/uploads/multiplicacion-6.png','100Mb','10/2/18'),
    new ModeloComponent('4','Ecuaciones','descripcion','http://conceptodefinicion.de/wp-content/uploads/2016/11/Ecuaci%C3%B3n.jpg','100Mb','10/2/18'),
  ];
  */
  


  constructor(private router:Router,private algoritmos: ModelosService) { 

  }
  
  ngOnInit() {
  }

}
