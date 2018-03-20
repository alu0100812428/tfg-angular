import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-index-main-column',
  templateUrl: './index-main-column.component.html',
  styleUrls: ['./index-main-column.component.css']
})
export class IndexMainColumnComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit() {
  }

}
