import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { moviesFeature } from './movies.feature';
import { IMoviesState } from '../../models/movies.models';
import { MoviesActions, moviesEntities } from './movies.actions'

@Injectable({ providedIn: 'root' })
export class MoviesFacade {
  movies$ = this.store.select(moviesFeature.selectMovies)
  genres$ = this.store.select(moviesFeature.selectGenres)
  moviesPage$ = this.store.select(moviesFeature.selectMoviesPage)
  moviesLoading$ = this.store.select(moviesFeature.selectLoading)
  moviesLoadingEntity$ = this.store.select(moviesFeature.selectLoadingEntity)
  moviesGenreId$ = this.store.select(moviesFeature.selectMoviesGenreId)
  moviesEntities = moviesEntities

  constructor(private store: Store<IMoviesState>) {}

  fetchMoviesByGenreId(page: number = 1, genreId: number) {
    // console.log('movies')
    this.store.dispatch(MoviesActions.genre_movies_list_request(page, genreId))
  }

  fetchGenresList() {
    this.store.dispatch(MoviesActions.genre_list_request())
  }


}
