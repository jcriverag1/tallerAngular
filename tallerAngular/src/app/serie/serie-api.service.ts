import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Serie } from './serie.model';

@Injectable({
  providedIn: 'root'
})
export class SerieApiService {
  private apiUrl = environment.apiUrl; // environment points to the full JSON URL

  constructor(private http: HttpClient) {}

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }

  getSerie(id: string | number): Observable<Serie | undefined> {
    // The remote JSON is a list; fetch all and find the matching id client-side
    return this.http.get<Serie[]>(this.apiUrl).pipe(
      map((list) => list.find((s) => s.id === id))
    );
  }
}
