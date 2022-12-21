import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private planetsUrl = 'http://swapi.dev/api/planets' ;

  constructor(
    private http: HttpClient) { }

  getPlanets(): Observable<any> {
    return this.http.get<any>(this.planetsUrl)
  }
}
