import React, { createContext } from 'react';
import { GenresContextProvider } from './genres/genresContext';
import { MoviesContextProvider } from './movies/moviesContext';
import { SearchContextProvider } from './search/searchContext';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider>
      <SearchContextProvider>
        <GenresContextProvider>
          <MoviesContextProvider>{children}</MoviesContextProvider>
        </GenresContextProvider>
      </SearchContextProvider>
    </AppContext.Provider>
  );
};
