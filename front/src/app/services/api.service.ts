import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const url = 'http://localhost:3000/api/v1'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  // test = () => this.http.get('https://api.github.com/users').toPromise();
  
  // register = (userData) => this.http.get('http://localhost:49001/api/auth/info', userData).toPromise();

  register = (userData) => this.http.post(url + '/auth/register', userData, httpOptions).toPromise();

  // getJson = (path) => this.http.get('./assets' + path).toPromise();
  
  test(){
    return 'ok'
  }

}
