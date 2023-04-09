import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

userName!: string;
password!: string;
user: User|null =null;


  constructor( private router: Router, private userService: UserService) { 
   this.userName='';
   this.password='';
    //this.user=new User(0,'','',new Date(),'','');
  }

  ngOnInit(): void {
  }

getUser():void{
  
}

isValidCredentials(): void{
  this.userService.getUserbyUserName(this.userName, this.password).subscribe((response)=>{this.user=response
    if(this.userChecker(this.user)){
      this.router.navigate(['/home']);
    }
    else{
      this.router.navigate(['/']);
    }
  });
}

userChecker(user: User): boolean{
  console.log(user);
  if(user==null||user.password!=this.password){
   return false;
}

return true;

}

navToReg(): void{
this.router.navigate(['/register'], {queryParams:{}});
}


}
