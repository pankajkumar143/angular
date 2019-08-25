import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
public users = [];
  constructor(private user:UsersService) { 

  }

  ngOnInit() {

    this.users=this.user.getDetails();
  }

}
