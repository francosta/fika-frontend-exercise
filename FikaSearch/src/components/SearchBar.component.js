import React, { useContext, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchContext } from '../services/search/searchContext';

export const SearchMoviesBar = () => {
  const { onSearch, searchQuery, clearSearch } = useContext(SearchContext);
  const [searchKeyword, setSearchKeyword] = useState(searchQuery);

  return (
    <Searchbar
      placeholder='Search'
      onSubmitEditing={() => {
        if (searchKeyword !== '') {
          onSearch(searchKeyword);
        }
      }}
      onChangeText={(text) => {
        if (text === '') {
          clearSearch();
        }
        setSearchKeyword(text);
      }}
      value={searchKeyword}
    />
  );
};
