import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageBored } from '../message-bored';
import { MessageBoredService } from '../message-bored.service';
import { MessageListing } from '../message-listing';
import { MessageService } from '../message.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-messaging-page',
  templateUrl: './messaging-page.component.html',
  styleUrls: ['./messaging-page.component.css']
})
export class MessagingPageComponent implements OnInit {

  UID:number|null=null;
  contacts!:User[];

  constructor(private userService: UserService,private router: Router, private messageBoredService: MessageBoredService, private messageService: MessageService) {
  


   }
  
  ngOnInit(): void {
   
  }

 

  


}
