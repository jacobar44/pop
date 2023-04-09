import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

hoverPath: string="../../assets/Logo/pa v large.png";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onHover(){ 
 this.hoverPath="../../assets/Logo/pa v large bw.png";
  }

  onLeave(){
    this.hoverPath="../../assets/Logo/pa v large.png";
  }

  navToMessages(): void{
    this.router.navigate(['/MessageBored'], {queryParams:{}});
    }

}
