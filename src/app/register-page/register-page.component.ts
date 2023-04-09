import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {


firstName!: string;
lastName!: string;
DOB!: Date;
phoneNumber!: string;
userName!: string;
password!: string;
newUser!: User;

  constructor(private userService:UserService) {
    this.firstName="";
    this.lastName="";
    this.DOB=new Date();
    this.phoneNumber="";
    this.userName="";
    this.password="";

   }

  ngOnInit(): void {

  }

  createUser():void{
    
this.userService.addUser(new User(this.userName,this.password,this.firstName,this.lastName,null,this.DOB,this.phoneNumber)
).subscribe(
  (error)=> this.handleError(error)
);
  }

  handleError(error: any): void {
    console.log(error);
  }

}
