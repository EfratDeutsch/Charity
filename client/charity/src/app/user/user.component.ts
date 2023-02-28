import { Component, OnInit } from '@angular/core';
import { user } from '../models/user.model';
import { UserServiceService } from '../Services/user-service.service';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'userComponent',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
id:number=0;
userName:string='';
password:string='';
firstName:string='';
lastName:string='';

constructor(public userServ:UserServiceService) { }

  ngOnInit(): void {
  }
public getUser(){
// this.userName=userName;
// this.password=password;

this.userServ.getUser(this.userName,this.password).subscribe((res:user)=>{
  alert("welcome" +res);
})
  }

}
