import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

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

  searchPlanets(p:string): Observable<any> {
    if (!p.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<any>(`${this.planetsUrl}/?search=${p}`)
  }
}
