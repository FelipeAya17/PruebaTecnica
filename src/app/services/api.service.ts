import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL_SERVE = "https://api.github.com/search/users";
  private URL = "https://api.github.com/users/";
  //private URL_FOLLOW = "https://api.github.com/users/felipe/followers"
  constructor(private http: HttpClient) { }


  getUsuarios(query_params = ''): Observable <any> {
    return this.http.get<any>(`${this.URL_SERVE}?q=${query_params}`)
  };

  getUser(query_params = ''):Observable <any> {
    return this.http.get<any>(`${this.URL}${query_params}`)
  }

  getFollowers(query_params = ''):Observable <any> {
    return this.http.get<any>(`${this.URL}${query_params}/followers`)
  }
}
