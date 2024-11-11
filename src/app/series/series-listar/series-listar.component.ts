import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-listar',
  templateUrl: './series-listar.component.html',
  styleUrls: ['./series-listar.component.css']
})
export class SeriesListarComponent implements OnInit {
  series: Array<Serie>=[];
  prom!: number;
  constructor(private serieService:SeriesService) { }
  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.promedio(this.series)
    });
  }

  promedio(series:Array<Serie>):void{
    let sum:number=0;
    for(let i:number=0;i<series.length;i++){
      sum+=series[i].seasons
    }
    this.prom=sum/series.length
  }
  ngOnInit() {
    this.getSeries();
  }

}
