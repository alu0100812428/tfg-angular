import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejecucion',
  templateUrl: './ejecucion.component.html',
  styleUrls: ['./ejecucion.component.css']
})
export class EjecucionComponent implements OnInit {

  constructor(public id_ejecucion :number,public id_resumen: number, public ejecutando: boolean, public completado: boolean) { }

  ngOnInit() {
  }

}
