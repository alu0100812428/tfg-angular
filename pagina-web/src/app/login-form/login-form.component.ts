import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }

  loginUser(data){
    
    var username = data.target.elements[0].value;
    var password = data.target.elements[1].value;
    
    if(this.user.CheckUser(username,password)){
      console.log('El usuario existe');
      this.user.setUserLoggedIn();
      this.router.navigate(['index']);
    }
    
    /*
    if(username == 'admin' && password == 'admin'){
      this.user.setUserLoggedIn();
      this.router.navigate(['index']);
    }
    */
    
    return false;
  }
  
}
