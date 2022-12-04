import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service'
import { MoviesFacade } from '../../../store/movies/movies.facade'
import { MoviesService } from '../../../services/movies.service'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.less']
})
export class MoviesListComponent implements OnInit {

  constructor(
    private moviesFacade: MoviesFacade,
    private moviesService: MoviesService,
    private moviesDataService: MoviesDataService,) {
  }

  get listData$() {
    return this.moviesDataService.listData$
  }

  imgUrl(path: string | undefined): string {
    return this.moviesService.reqUrl(path)
  }

  ngOnInit(): void {
    this.moviesDataService.genreSelectedPairHistory$.subscribe(val => console.log('SUBSCRIBE', val))
    // this.genreSelectedSubject.asObservable().subscribe(val => console.log('SUBSCRIBE 2', val))
  }

}
