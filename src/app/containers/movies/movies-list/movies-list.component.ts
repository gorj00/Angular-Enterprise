import { Component, OnInit } from '@angular/core';
import { MoviesContainer } from '../movies.container'
import { MoviesFacade } from '../../../store/movies/movies.facade'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.less']
})
export class MoviesListComponent extends MoviesContainer implements OnInit {

  constructor(facade: MoviesFacade) {
    super(facade);
  }

  ngOnInit(): void {
  }

}
