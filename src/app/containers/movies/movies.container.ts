import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MoviesFacade } from '../../store/movies/movies.facade'
import { IMovie } from '../../models/movies.models';

export class MoviesContainer {

  constructor(protected moviesFacade: MoviesFacade) {
    // Fetching data from the database with Redux
    this.moviesFacade.fetchMoviesByGenreId(1, 27);
  }

  // Observable of fetched study sgroups
  movies$: Observable<IMovie[]> = this.moviesFacade
  .movies$
    .pipe(
      map(movies => movies)
    );

  // Navigation

  // Data flow


}
