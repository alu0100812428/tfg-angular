import { Injectable } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';
import { ModeloComponent } from './modelo/modelo.component';

@Injectable()
export class UserService {
  
  usuarios : UsuarioComponent[] = [
    new UsuarioComponent('pablosky','123','pablo','caballero','pablo@pablo.com'),
    new UsuarioComponent('pedrosky','123','pedro','garcía','pedrosky@pedrosky.com'),
    new UsuarioComponent('peter','123','Peter','Rodriguez','peter@peter.com'),
    new UsuarioComponent('pedro','123','pedro','Hernandez','pedro@pedro.com'),
  ];
  
  UsuarioNuevo: UsuarioComponent;
  
  UsuarioActual: number = 0;
  
  username: string;
  password: string;
  name: string;
  surname: string;
  email: string;

  private isUserLoggedIn;
  
  constructor() {
    this.isUserLoggedIn = false;
  }
  
  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }
  
  logoutUserLoggedIn(){
    this.isUserLoggedIn = false;
  }
  
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
  
  
  CheckUser(username:string, password: string){
    var ExisteUsuario : boolean = false;
    
    this.usuarios.forEach((item, index) => {
      if(ExisteUsuario==false){
        if((item.username == username)&&(item.password==password)){
          ExisteUsuario = true;
          this.UsuarioActual = index;
          console.log("El usuario y contraseña es correcto");
          
          this.username = item.username;
          this.password = item.password;
          this.name = item.name;
          this.surname = item.surname;
          this.email = item.email;
          
        }
        else{
          console.log("El usuario o contraseña es incorrecto");
        }
      }
    });
    return ExisteUsuario;
  }

  //public username: string, public password: string,public name: string,public surname: string,public email: string
  RegisterUser(username: string, password: string, name: string, surname: string, email: string){
    this.UsuarioNuevo= new UsuarioComponent(username,password,name,surname,email);
    this.usuarios.push(this.UsuarioNuevo);
  }
  
  ModifyUser(name: string, surname: string, email: string){
    //this.usuarios[this.UsuarioActual].username = username;
    //this.usuarios[this.UsuarioActual].password = password;
    this.usuarios[this.UsuarioActual].name = name;
    this.usuarios[this.UsuarioActual].surname = surname;
    this.usuarios[this.UsuarioActual].email = email;
    
    this.name = name;
    this.surname = surname;
    this.email = email;
  }


}
