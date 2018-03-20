import { Injectable } from '@angular/core';
import { ModeloComponent } from './modelo/modelo.component';

@Injectable()
export class ModelosService {

  algoritmos : ModeloComponent[] = [
    new ModeloComponent(0,'TSP',
    'Algoritmo Traveller Salesman Problem o TSP (en español Problema del viajante de comercio) se utiliza para calcular la distancia mínima para recorrer todos los puntos y regresar al inicio con el menor coste posible.',
    'https://qph.ec.quoracdn.net/main-qimg-344b9a414a293792a807072fd78ae3fc','10MB','10/2/2018'),
    new ModeloComponent(1,'Calculo de determinantes',
    'Algoritmo que permite obtener el determinane de una matriz.',
    'https://www.matesfacil.com/matrices/determinante8.png','7MB','13/2/2018'),
    new ModeloComponent(2,'Matrices',
    'Algoritmo para calcular la multiplicacion de matrices.',
    'https://ekuatio.com/wp-content/uploads/multiplicacion-6.png','4MB','19/2/2018'),
    new ModeloComponent(3,'Ecuaciones',
    'Algoritmo para resolver ecuaciones.',
    'http://conceptodefinicion.de/wp-content/uploads/2016/11/Ecuaci%C3%B3n.jpg','14MB','20/2/2018'),
  ];
  
  id: number = 3;
  index: number = 3;
  id_actual:number;
  algoritmo_actual: ModeloComponent = this.algoritmos[0];
  nuevo_algoritmo: ModeloComponent;

  constructor() {}
  
  subir_modelo(nombre:string,descripcion:string){
    this.id = this.id + 1;
    var currentTime = new Date();
    var day:number = currentTime.getDate();
    var month:number = currentTime.getMonth()+1;
    var year:number = currentTime.getFullYear();

    var fecha = `${day}/${month}/${year}`;
    this.nuevo_algoritmo = new ModeloComponent(this.id,nombre,descripcion,'asd','100MB',fecha);
    this.algoritmos.push(this.nuevo_algoritmo);
  }
  
  seleccionar_algoritmo(id:number){
    var founded :boolean = false;
    this.algoritmos.forEach((item,index)=>{
      if((item.id==id)&&(!founded)){
        this.id_actual = item.id;
        this.algoritmo_actual = item;
        this.index = index;
        founded = true;
      }
    }
    )
    //this.id_actual = id-1;
    //this.algoritmo_actual = this.algoritmos[id-1];
  }
  
  editar_algoritmo(nombre:string,descripcion:string){
    this.algoritmo_actual.nombre = nombre;
    this.algoritmo_actual.descripcion = descripcion;
    
    this.algoritmos[this.index].nombre = nombre;
    this.algoritmos[this.index].descripcion = descripcion;
    
  }
  
  get_nombre(id:number){
    var founded :boolean = false;
    var nombre: string;
    this.algoritmos.forEach((item,index)=>{
      if((item.id==id)&&(!founded)){
        nombre = item.nombre;
        founded = true;
      }
    }
    )
    return nombre;
  }

}
