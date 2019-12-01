import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  baseUrl : string = "https://swapi.co/api/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  cloakHidden = new BehaviorSubject(true);
  latest = new BehaviorSubject({});

  changeCloak(value : boolean){
    setTimeout(() => {
        this.cloakHidden.next(value);
    });
  }

  getPeople(): Observable<any> {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.get<any>(this.baseUrl+'people/', httpOptions)
      .pipe(map(response => response));
  }

  getPlanets(): Observable<any> {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.get<any>(this.baseUrl+'planets/', httpOptions)
      .pipe(map(response => response));
  }

  getFilms(): Observable<any> {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.get<any>(this.baseUrl+'films/', httpOptions)
      .pipe(map(response => response));
  }

  getSpecies(): Observable<any> {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.get<any>(this.baseUrl+'species/', httpOptions)
      .pipe(map(response => response));
  }

  getVehicles(): Observable<any> {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.get<any>(this.baseUrl+'vehicles/', httpOptions)
      .pipe(map(response => response));
  }

  getStarships(): Observable<any> {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.get<any>(this.baseUrl+'starships/', httpOptions)
      .pipe(map(response => response));
  }

  getData(url:string): Observable<any> {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.get<any>(url, httpOptions)
      .pipe(map(response => response));
  }
}