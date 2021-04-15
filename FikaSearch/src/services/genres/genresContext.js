import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { mapGenres } from '../../utils/mapGenres';

export const GenresContext = createContext();

export const GenresContextProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const genresURL =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US';

  const getGenres = async () => {
    setIsLoading(true);
    const response = await axios.get(genresURL);
    const genres = mapGenres(response.data.genres);
    setGenres(genres);
    setIsLoading(false);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <GenresContext.Provider value={{ genres, isLoading }}>
      {children}
    </GenresContext.Provider>
  );
};
