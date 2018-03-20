import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-lista-ejecuciones',
  templateUrl: './resumen-lista-ejecuciones.component.html',
  styleUrls: ['./resumen-lista-ejecuciones.component.css']
})
export class ResumenListaEjecucionesComponent implements OnInit {

  constructor(public id_resumen:number, public id_algoritmo: number,public titulo: string) { }

  ngOnInit() {
  }

}
