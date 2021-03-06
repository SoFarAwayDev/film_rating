import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { ContainerState as LanguageProviderState } from 'containers/LanguageProvider/types';
import { ContainerState as AppState } from 'containers/App/types';
import { ContainerState as MoviesSearch } from 'containers/MoviesSearch/types';
import { ContainerState as MovieDetails } from 'containers/MovieDetails/types';
import { ContainerState as MyMovies } from 'containers/MyMovies/types';

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(
    saga: (() => IterableIterator<any>) | undefined,
    args: any | undefined,
  ): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: () => IterableIterator<any>;
  mode?: string | undefined;
}

export interface ApplicationRootState {
  readonly router: RouterState;
  readonly global: AppState;
  readonly language: LanguageProviderState;
  readonly movieSearch: MoviesSearch;
  readonly movieDetails: MovieDetails;
  readonly myMovies: MyMovies;
  // for testing purposes
  readonly test: any;
}
