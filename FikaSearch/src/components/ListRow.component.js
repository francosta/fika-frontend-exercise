import React, { useContext } from 'react';
import { DataTable } from 'react-native-paper';
import { GenresContext } from '../services/genres/genresContext';
import styled from 'styled-components/native';

export const ListRow = ({ movie }) => {
  const { genres } = useContext(GenresContext);

  const getGenres = (movie) => {
    return movie.genre_ids.map((genreId) => {
      return genres[genreId];
    });
  };

  const Image = styled.Image`
    width: 60px;
    height: 80px;
  `;

  return (
    <DataTable.Row>
      <DataTable.Cell>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie['poster_path']}`,
          }}
        />
      </DataTable.Cell>
      <DataTable.Cell>{movie.original_title}</DataTable.Cell>
      <DataTable.Cell>{getGenres(movie).join(', ')}</DataTable.Cell>
    </DataTable.Row>
  );
};
