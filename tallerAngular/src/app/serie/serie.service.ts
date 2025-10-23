import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Serie } from './serie.model';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private apiUrl = environment.apiUrl || '';

  constructor(private http: HttpClient) {}

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }
}
