import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloComponent} from '../modelo/modelo.component';
import { ModelosService } from '../modelos.service';

@Component({
  selector: 'app-editar-algoritmo',
  templateUrl: './editar-algoritmo.component.html',
  styleUrls: ['./editar-algoritmo.component.css']
})
export class EditarAlgoritmoComponent implements OnInit {

  constructor(private router:Router,private algoritmo:ModelosService) { }

  ngOnInit() {
  }
  
  editar_algoritmo(data){
    
    var nombre = data.target.elements[0].value;
    var descripcion = data.target.elements[1].value;
    
    this.algoritmo.editar_algoritmo(nombre,descripcion);
    this.router.navigate(['algoritmos']);
    
    return false;
  }

}
