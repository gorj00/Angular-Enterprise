import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesDataService } from '../movies-data.service'
import { MoviesFacade } from '../../../store/movies/movies.facade'

@Component({
  selector: 'app-movies-sidebar',
  templateUrl: './movies-sidebar.component.html',
  styleUrls: ['./movies-sidebar.component.less']
})
export class MoviesSidebarComponent implements OnInit {


  users: string[] = ['John', 'Maria', 'Stan'];

  constructor(
    private moviesfacade: MoviesFacade,
    private moviesDataService: MoviesDataService,
  ) {
  }

  onSelectGenre(genreId: number | void) {
    genreId && this.moviesDataService.onGenreSelected(genreId)
  }

  get sidebarData$() {
    return this.moviesDataService.data$
  }

  ngOnInit(): void {
    this.moviesDataService.initialGenresFetch()
  }

}
