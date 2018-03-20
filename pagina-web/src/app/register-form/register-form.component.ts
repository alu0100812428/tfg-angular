import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }
  
  registerUser(data){
    
    var username = data.target.elements[0].value;
    var password = data.target.elements[1].value;
    var name = data.target.elements[2].value;
    var surname = data.target.elements[3].value;
    var email = data.target.elements[4].value;
    
    if(this.user.CheckUser(username,password)){
      console.log('El usuario ya existe');
    }
    else{
      this.user.RegisterUser(username,password,name,surname,email);
      console.log('Usuario creado correctamente');
      this.router.navigate(['login']);
    }
    
    return false;
  }

}
