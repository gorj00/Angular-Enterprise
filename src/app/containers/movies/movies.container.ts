import { Observable } from 'rxjs';
import { MoviesFacade } from '../../store/movies/movies.facade'
import { IMovie, IGenre } from '../../models/movies.models';

export class MoviesContainer {

  constructor(protected moviesFacade: MoviesFacade) {}

  initialMoviesFetch() {
    this.moviesFacade.fetchMoviesByGenreId(1, 28)
  }

  initialGenresFetch() {
    this.moviesFacade.fetchGenresList()
  }

  // Observable of fetched study sgroups
  movies$: Observable<IMovie[]> = this.moviesFacade.movies$;
  genres$: Observable<IGenre[]> = this.moviesFacade.genres$;

}
