import { Component, OnInit } from '@angular/core';
import { SerieApiService } from '../serie-api.service';
import { Serie } from '../serie.model';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.html',
  styleUrls: ['./serie-list.css'],
})
export class SerieList implements OnInit {
  series: Serie[] = [];
  selected: Serie | null = null;

  constructor(private serieService: SerieApiService) {}

  getCoursesList(): void {
    this.serieService.getSeries().subscribe((series: Serie[]) => {
      console.log('Respuesta getSeries:', series);
      this.series = series;
    }, (err) => console.error('Error en getSeries:', err));
  }

  select(s: Serie): void {
    this.selected = s;
  }

  // Calcula el promedio de temporadas entre las series que tienen la propiedad seasons
  seasonsAverage(): number {
    const withSeasons = this.series.filter(s => typeof s.seasons === 'number');
    if (withSeasons.length === 0) return 0;
    const total = withSeasons.reduce((acc, s) => acc + (s.seasons || 0), 0);
    return Math.round((total / withSeasons.length));
  }

  ngOnInit(): void {
    this.getCoursesList();
  }
}
