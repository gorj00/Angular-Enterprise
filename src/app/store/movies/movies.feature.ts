import { createFeature, createReducer, on } from '@ngrx/store';
import { IMoviesState } from '../../models/movies.models'

import  { MoviesActions } from './movies.actions';

const initialState: IMoviesState = {
  movies: [],
  moviesPage: null,
  moviesGenreId: null,
  moviesTotal: null,
  loading: false,
  errors: [],
};

export const moviesFeature = createFeature({
  name: 'movies',
  reducer: createReducer(
    initialState,
    on(MoviesActions.genre_list_request, (state: IMoviesState, { page, genreId }) => ({
      ...state,
      loading: true,
      moviesPage: page,
      moviesGenreId: genreId,
    })),
    on(MoviesActions.genre_list_response, (state: IMoviesState, { items, total }) => ({
      ...state,
      loading: false,
      movies: items,
      moviesTotal: total,
    })),
    on(MoviesActions.genre_list_failure, (state: IMoviesState, { error }) => ({
      ...state,
      loading: false,
      error,
    })),
  ),
});

export const {
  name,
  reducer,
  selectMoviesState,

  // AUTO GENERATED SELECTORS
  // selectHistory,
  // selectErrors,
  // selectResult,
} = moviesFeature;
