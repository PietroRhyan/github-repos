import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { Observable, throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'https://api.github.com/users/pietrorhyan'

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
