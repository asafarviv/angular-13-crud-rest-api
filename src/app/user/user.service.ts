import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { User } from './user';


@Injectable({
  providedIn: 'root'
})




export class UserService {

  private apiURL = "http://localhost:8080/api/users";


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL + '/list')
    .pipe(
     // catchError(this.errorHandler)
    )
  }


   
/*
  create(User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL + '/users/', JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
*/
/*

  find(id): Observable<User> {
    return this.httpClient.get<User>(this.apiURL + '/users/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   

/*

  update(id, post): Observable<User> {
    return this.httpClient.put<User>(this.apiURL + '/users/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


   
  delete(id){
    return this.httpClient.delete<User>(this.apiURL + '/users/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  
*/
/*
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

*/

}
