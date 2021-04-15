import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const moviesURL =
    'https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false';

  const getMovies = async () => {
    setIsLoading(true);
    const response = await axios.get(moviesURL);
    setMovies(response.data.results);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, isLoading }}>
      {children}
    </MoviesContext.Provider>
  );
};
