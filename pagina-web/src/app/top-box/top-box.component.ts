import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-top-box',
  templateUrl: './top-box.component.html',
  styleUrls: ['./top-box.component.css']
})
export class TopBoxComponent implements OnInit {

  constructor(private router:Router,private user:UserService) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['']);
    this.user.logoutUserLoggedIn();
  }
  
}
