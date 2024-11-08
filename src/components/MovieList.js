import React from 'react';
import Card from './Card';

const MovieList = ({ list }) => (
  <>
    {list.map((movie) => (
      <Card key={movie.episode_id} movie={movie} />
    ))}
  </>
);

export default MovieList;
