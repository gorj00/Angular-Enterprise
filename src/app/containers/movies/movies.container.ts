import { MoviesFacade } from '../../store/movies/movies.facade'
import { IMovie, IGenre, IMoviesResponse } from '../../models/movies.models';
import { Observable, of, Subject, BehaviorSubject, combineLatest, map, switchMap, pairwise, empty, startWith } from 'rxjs';

export class MoviesContainer {
  private genreSelectedSubject = new Subject<number | null>()
  genreSelected$ = this.genreSelectedSubject.asObservable()
  private pageSelectedSubject = new BehaviorSubject<number>(1)
  pageSelected$ = this.pageSelectedSubject.asObservable()

  constructor(protected moviesFacade: MoviesFacade) {}

  // initialMoviesFetch() {
  //   this.moviesFacade.fetchMoviesByGenreId(1, 28)
  // }

  initialGenresFetch() {
    this.moviesFacade.fetchGenresList()
  }

  onGenreSelected(genreId: number | null) {
    if (genreId !== null) {
      this.genreSelectedSubject.next(genreId)
    }
  }

  // [previous genreId, current genreId]
  genreSelectedPairHistory$ = this.genreSelected$.pipe(
    startWith(null, 28), // empty value to fill-in the buffer
    pairwise()
  )

  moviesOfGenreAndPage$ = combineLatest(
    this.moviesFacade.movies$,
    this.genreSelectedPairHistory$,
    this.pageSelected$,
  ).pipe(
    // Kills if the page is changed below
    switchMap(([movies, genreIdsPair, page]) => {
      const [prevGenreId, currentGenreId] = genreIdsPair
      if (prevGenreId !== currentGenreId) {
        this.pageSelectedSubject.next(1)
      }
      this.moviesFacade.fetchMoviesByGenreId(
        page,
        currentGenreId ? +currentGenreId : 0
      )
      return of(movies)
    })
  )

  data$ = combineLatest(
    // this.moviesOfGenreAndPage$,
    this.moviesFacade.genres$,
    this.genreSelectedPairHistory$,
    this.pageSelected$,
  ).pipe(
    map((
      [/* movies,  */genres, genreSelectedPairHistory, pageSelected]
      ) => {
        const [prevGenreId, currentGenreId] = genreSelectedPairHistory
        console.log({
          /* movies,  */genres, currentGenreId, pageSelected
        })
        return ({
      /* movies,  */genres, currentGenreId, pageSelected
    })})
  )

}
