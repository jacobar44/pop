import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { catchError, map } from 'rxjs';
import { MessageBored } from './message-bored';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MessageBoredService {
  messageBored!:MessageBored;
  baseURL:string='http://localhost:8089/messagebored/';;
  postHeader={

  }

  constructor(private httpClient:HttpClient) { }

  getMessageBored(Id:number){
    return this.httpClient.get<MessageBored>(this.baseURL+ 'findOne?Id='+Id).pipe(
      map((response)=>{
        return response;
      }),
      catchError(this.handleError<any>())
    );
  }

  private handleError<T>(result?:T){
    return result;
  }

  getUserMessageBoreds(Id:number){
    return this.httpClient.get<MessageBored[]>(this.baseURL+'findByUID?UID='+Id).pipe(
      map((response)=>{
        return response;
      }),
      catchError(this.handleError<any>())
    );
  }

  getActiveContacts(Id:number){
    return this.httpClient.get<User[]>(this.baseURL+'messageListing?userId='+Id).pipe(
      map((response)=>{
        return response;
      }),
      catchError(this.handleError<any>())
    );
  }


}
