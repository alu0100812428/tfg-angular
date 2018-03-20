import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios : UsuarioComponent[] = [
    new UsuarioComponent('pablosky','123','pablo','caballero','pablo@pablo.com'),
    new UsuarioComponent('pedrosky','123','pedro','garcía','pedrosky@pedrosky.com'),
    new UsuarioComponent('peter','123','peter','Rodriguez','peter@peter.com'),
    new UsuarioComponent('pedro','123','pedro','Hernandez','pedro@pedro.com'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
