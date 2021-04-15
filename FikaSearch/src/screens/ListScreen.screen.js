import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { MoviesContext } from '../services/movies/moviesContext';
import styled from 'styled-components/native';
import { GenresContext } from '../services/genres/genresContext';
import { SearchMoviesBar } from '../components/SearchBar.component';
import { List } from '../components/List.component';
import { SearchContext } from '../services/search/searchContext';
import { Loading } from '../components/Loading.component';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const ListScreen = () => {
  const { isLoading: isLoadingMovies } = useContext(MoviesContext);
  const { isLoading: isLoadingGenres } = useContext(GenresContext);
  const { isSearching } = useContext(SearchContext);

  return (
    <SafeArea>
      <SearchMoviesBar />
      {isLoadingMovies || isLoadingGenres || isSearching ? (
        <Loading />
      ) : (
        <List />
      )}
    </SafeArea>
  );
};
