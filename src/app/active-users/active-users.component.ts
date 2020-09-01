import { Component, OnInit} from '@angular/core';
import {UsersServiceService} from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
 users: string[];

 constructor(private userServices:UsersServiceService ){}

 ngOnInit(){
   this.users = this.userServices.activeUsers;
 }
  onSetToInactive(id: number) {
    this.userServices.onSetToInactive(id);
  }
}
