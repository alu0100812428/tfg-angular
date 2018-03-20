import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioComponent} from '../usuario/usuario.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario = new UsuarioComponent('Pablosky','12345','Pablo','Caballero','pablo@caballero.com');

  constructor(private router:Router,private user:UserService) {
  }

  editar_perfil(name,surname,email){
    this.user.ModifyUser(name,surname,email);
    this.router.navigate(['index']);
  }

  ngOnInit() {
  }

}
