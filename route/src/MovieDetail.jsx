import React from 'react';

const MovieDetail = ({ match, movies }) => {
  const movieId = match.params.id;
  const movie = movies.find((m) => m.id === parseInt(movieId, 10));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieDetail;
