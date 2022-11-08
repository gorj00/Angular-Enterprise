import { Component, OnInit } from '@angular/core';
import { MoviesContainer } from '../movies.container'
import { MoviesFacade } from '../../../store/movies/movies.facade'
import { MoviesService } from '../../../services/movies.service'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.less']
})
export class MoviesListComponent extends MoviesContainer implements OnInit {

  constructor(facade: MoviesFacade, private moviesService: MoviesService) {
    super(facade);
    this.initialMoviesFetch();
  }

  imgUrl(path: string | undefined): string {
    return this.moviesService.reqUrl(path)
  }

  ngOnInit(): void {
  }

}
