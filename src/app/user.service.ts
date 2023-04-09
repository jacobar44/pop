import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {User} from './user';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user!: User;
baseURL: string = 'http://localhost:8089/Login/';
postHeader={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  }),
}

  constructor(private httpClient: HttpClient) {

   }

getUserbyUserName(userName: string, password :string): Observable<User>{
  console.log(userName+" "+password)
  return this.httpClient.get<User>(this.baseURL+ 'findByUsername?username='+userName+"&password="+password).pipe(
    map((response)=>{
      console.log(response)
      this.user=response;
      return response;
    }),
    catchError(this.handleError<any>())
  );
}

getUserbyId(Id: number):Observable<User>{
  return this.httpClient.get<User>(this.baseURL+ 'findOneId?Id='+Id).pipe(
    map((response)=>{
      return response;
    })
  )
}



addUser(newUser: User): Observable<User>{
  console.log(newUser);
return this.httpClient.post<User>
(this.baseURL+'addOne', 
newUser, 
this.postHeader);
}



private handleError<T>(result?:T){
  return result;
}

}
