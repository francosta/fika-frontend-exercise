import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';
import { MoviesContext } from '../services/movies/moviesContext';
import { SearchContext } from '../services/search/searchContext';
import { ListRow } from './ListRow.component';

export const List = () => {
  const { movies } = useContext(MoviesContext);
  const { searchResults } = useContext(SearchContext);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Movies</DataTable.Title>
        <DataTable.Title>Genres</DataTable.Title>
      </DataTable.Header>
      <FlatList
        data={searchResults ? searchResults : movies}
        initialNumToRender={20}
        renderItem={({ item }) => {
          return <ListRow movie={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </DataTable>
  );
};
