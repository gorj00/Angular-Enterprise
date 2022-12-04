import { MoviesFacade } from '../../store/movies/movies.facade'
import { IMovie, IGenre, IMoviesResponse } from '../../models/movies.models';
import { Observable, of, Subject, BehaviorSubject, combineLatest, map, mergeMap, switchMap, pairwise, forkJoin, startWith, tap, first, take, distinctUntilChanged, filter, pipe, empty,  } from 'rxjs';
import { shareReplay } from 'rxjs/operators'
import { Injectable } from '@angular/core'; 

@Injectable()
export class MoviesDataService {
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
    distinctUntilChanged(),
    pairwise(),
    shareReplay({ refCount: true, bufferSize: 1}),
    // Based on genreId changed, reset page to 1 if not 1
    tap(genreIdsPair => {
      const [prevGenreId, currentGenreId] = genreIdsPair
      if (
        (prevGenreId !== currentGenreId) &&
        // apparently bad practice- refactor reactively
        (this.pageSelectedSubject.value !== 1)
      ) {
        this.pageSelectedSubject.next(1)
      }
    }),
  )

  moviesLoading$ = combineLatest(
    this.moviesFacade.moviesLoading$,
    this.moviesFacade.moviesLoadingEntity$,
  ).pipe(
    filter(([loading, entity]) => (entity === this.moviesFacade.moviesEntities.MOVIES) || !entity),
    map(([loading]) => loading),
    // For loading=false case, entities are null, therefore ignore from other entities fetches being done (null)
    distinctUntilChanged(),
    shareReplay({ refCount: true, bufferSize: 1}),
  )

  moviesParams$ = combineLatest(
    this.genreSelectedPairHistory$,
    this.pageSelected$,
  ).pipe(
    distinctUntilChanged(),
    map(([genreIdsPair, page]) => {
      const [prevGenreId, currentGenreId] = genreIdsPair
      if (currentGenreId && page) {
        this.moviesFacade.fetchMoviesByGenreId(
          page,
          currentGenreId,
        )
      }
      return ({ genreId: currentGenreId, page})

    }),
    shareReplay({ refCount: true, bufferSize: 1}),
  )

  listData$ = combineLatest(
    this.moviesParams$,
    this.moviesFacade.movies$,
  ).pipe(
    // Kills if the page is changed below
    switchMap(([params, movies]) => {
      // return of({page, movies})
      return of({params, movies})
    }),
    shareReplay({ refCount: true, bufferSize: 1}),
  )

  sidebarData$ = combineLatest(
    this.moviesFacade.genres$,
    this.genreSelectedPairHistory$,
  ).pipe(
    map(([genres, genreIdsPair]) => {
      const [prevGenreId, currentGenreId] = genreIdsPair
      return ({ genres, currentGenreId})
    }),
    shareReplay({ refCount: true, bufferSize: 1}),
  )

}
