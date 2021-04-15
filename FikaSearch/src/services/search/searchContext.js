import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const search = async (searchTerm) => {
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=${searchTerm}`;
    setSearchQuery(searchTerm);
    setIsSearching(true);
    const response = await axios.get(searchURL);
    setSearchResults(response.data.results);
    setIsSearching(false);
  };

  const clearSearch = () => {
    setIsSearching(false);
    setSearchQuery(null);
    setSearchResults(null);
  };

  useEffect(() => {
    if (searchQuery && searchQuery !== '') {
      search(searchQuery);
    }
  }, [searchQuery]);

  return (
    <SearchContext.Provider
      value={{
        onSearch: search,
        isSearching,
        searchQuery,
        setSearchQuery,
        searchResults,
        clearSearch,
      }}>
      {children}
    </SearchContext.Provider>
  );
};
