import { MoviesFacade } from '../../store/movies/movies.facade'
import { IMovie, IGenre, IMoviesResponse } from '../../models/movies.models';
import { BehaviorSubject, combineLatest, map, distinctUntilChanged, filter } from 'rxjs';
import { shareReplay } from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesDataService {
  private genreSelectedSubject = new BehaviorSubject<number | null>(28)
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
    this.genreSelected$,
    this.pageSelected$,
  ).pipe(
    distinctUntilChanged(),
    map(([genreId, page]) => {
      if (genreId && page) {
        this.moviesFacade.fetchMoviesByGenreId(
          page,genreId,
        )
      }
      return ({ genreId, page})
    }),
    shareReplay({ refCount: true, bufferSize: 1}),
  )

  data$ = combineLatest(
    this.moviesParams$,
    this.moviesFacade.movies$,
    this.moviesFacade.genres$,
    this.moviesLoading$,
  ).pipe(
    map(([params, movies, genres, moviesLoading]) => ({params, movies, genres, moviesLoading})),
    shareReplay({ refCount: true, bufferSize: 1}),
  )

}
