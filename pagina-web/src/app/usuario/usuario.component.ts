import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public username: string, public password: string,public name: string,public surname: string,public email: string) { }

  ngOnInit() {
  }

}
