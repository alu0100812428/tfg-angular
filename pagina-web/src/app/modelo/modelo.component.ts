import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent implements OnInit {

  constructor(public id:number, public nombre:string, public descripcion:string, public imagen: string, public tamano: string, public fecha: string ) { }

  ngOnInit() {
  }

}
