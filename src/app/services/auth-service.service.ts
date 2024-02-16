import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  baseUrl ="http://localhost:8080/api/v1/auth"
  constructor(
    private http : HttpClient
  ) { }
  login({username, password }: {username: string, password: string}): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(this.baseUrl+"/login",{
      username,
      password
    })
  }
  register({email, password, username }: {email: string, password: string, username: string}): Observable<AuthResponse>{
    console.log(email, password, username)
    return this.http.post<AuthResponse>(this.baseUrl+"/register",{
      email,
      password,
      username
    })
  }
}
