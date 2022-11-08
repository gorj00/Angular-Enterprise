import { Component, OnInit } from '@angular/core';
import { MoviesContainer } from '../movies.container'
import { MoviesFacade } from '../../../store/movies/movies.facade'

@Component({
  selector: 'app-movies-sidebar',
  templateUrl: './movies-sidebar.component.html',
  styleUrls: ['./movies-sidebar.component.less']
})
export class MoviesSidebarComponent extends MoviesContainer implements OnInit {
  users: string[] = ['John', 'Maria', 'Stan'];

  constructor(facade: MoviesFacade) {
    super(facade);
    this.initialGenresFetch();
  }

  ngOnInit(): void {
  }

}
