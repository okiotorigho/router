import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={movie.posterURL} alt={movie.title} />
            <p>{movie.title}</p>
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
