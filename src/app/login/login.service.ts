import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private BASE_URL = 'http://localhost:8000'; // your backend URL

  constructor(private http: HttpClient) {}

  login(body: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/login`, body);
  }

}
