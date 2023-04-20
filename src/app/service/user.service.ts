import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

import { Observable, throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import { User } from '../models/user';
import { StarredRepos } from '../models/github-starred-repos';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = 'https://api.github.com/users/pietrorhyan'
  starredReposUrl: string = 'https://api.github.com/users/PietroRhyan/starred'

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getStars(): Observable<StarredRepos[]> {
    return this.http.get<StarredRepos[]>(this.starredReposUrl)
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
