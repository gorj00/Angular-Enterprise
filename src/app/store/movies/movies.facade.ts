import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { moviesFeature } from './movies.feature';
import { IMoviesState } from '../../models/movies.models';
import { MoviesActions } from './movies.actions'

@Injectable({ providedIn: 'root' })
export class MoviesFacade {
  movies$ = this.store.select(moviesFeature.selectMovies)
  moviesPage$ = this.store.select(moviesFeature.selectMoviesPage)
  moviesLoading$ = this.store.select(moviesFeature.selectLoading)
  moviesGenreId$ = this.store.select(moviesFeature.selectMoviesGenreId)

  constructor(private store: Store<IMoviesState>) {}

  fetchMoviesByGenreId(page: number = 1, genreId: number) {
    this.store.dispatch(MoviesActions.genre_list_request(page, genreId))
  }

}
