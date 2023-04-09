import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message!: Message;
  baseURL: string = 'http://localhost:8089/message/';
  postHeader={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    }),
  }
  constructor(private httpClient:HttpClient) { 
    
  }

  getMessages(MBID: number): Observable<Message[]>{
    return this.httpClient.get<Message>(this.baseURL+ 'findAllMBID?MBID='+MBID).pipe(
      map((response)=>{
        this.message=response;
        return response;
      }),
      catchError(this.handleError<any>())
    );
  }

  private handleError<T>(result?:T){
    return result;
  }

}
