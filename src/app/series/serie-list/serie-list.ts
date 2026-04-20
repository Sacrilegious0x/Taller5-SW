import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie-service';
import { CommonModule, DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-serie-list',
  imports: [CommonModule, DecimalPipe],
  templateUrl: './serie-list.html',
  styleUrl: './serie-list.css',
})
export class SerieList implements OnInit{
  series: Serie[] = [];
  selectedSerie: Serie | null = null;
  promedioSeasons: number = 0;
  
  constructor(private serieService: SerieService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.serieService.getSeries().subscribe((data) => {
      this.series = data;
      this.promedioSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0) / this.series.length;
      console.log('Datos cargados:', data);
      this.cdr.detectChanges();
    });
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }
}
