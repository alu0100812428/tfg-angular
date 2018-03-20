import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelosService } from '../modelos.service';

@Component({
  selector: 'app-subir-modelo-form',
  templateUrl: './subir-modelo-form.component.html',
  styleUrls: ['./subir-modelo-form.component.css']
})
export class SubirModeloFormComponent implements OnInit {

  constructor(private router:Router, private algoritmos: ModelosService) { }

  ngOnInit() {
  }
  
  subir_modelo(data){
    
    var nombre = data.target.elements[0].value;
    var descripcion = data.target.elements[1].value;
    
    this.algoritmos.subir_modelo(nombre,descripcion);
    this.router.navigate(['algoritmos']);
    
    return false;
  }

}
