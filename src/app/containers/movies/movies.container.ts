import { Observable } from 'rxjs';
import { MoviesFacade } from '../../store/movies/movies.facade'
import { IMovie, IGenre } from '../../models/movies.models';
import { BehaviorSubject, combineLatest, map  } from 'rxjs';

export class MoviesContainer {
  private genreSelectedSubject = new BehaviorSubject<number>(1)
  genreSelected$ = this.genreSelectedSubject.asObservable()

  constructor(protected moviesFacade: MoviesFacade) {}

  initialMoviesFetch() {
    this.moviesFacade.fetchMoviesByGenreId(1, 28)
  }

  initialGenresFetch() {
    this.moviesFacade.fetchGenresList()
  }

  onGenreSelected(genreId: number | null) {
    if (genreId !== null) {
      this.moviesFacade.fetchMoviesByGenreId(1, genreId)
      this.genreSelectedSubject.next(genreId)
    }
  }

  data$ = combineLatest(
    this.moviesFacade.movies$,
    this.moviesFacade.genres$,
    this.genreSelected$,
  ).pipe(
    map((
      [movies, genres, genreSelected]: [IMovie[], IGenre[], number]
      ) => ({
      movies, genres, genreSelected
    }))
  )

}
