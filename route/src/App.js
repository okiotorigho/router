import React, { useState } from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './HomePage';
import MovieDetail from './MovieDetail';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(null);

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
    filterMovies();
  };

  const handleRatingChange = (event) => {
    setRatingFilter(parseInt(event.target.value, 10));
    filterMovies();
  };

  const filterMovies = () => {
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        (!ratingFilter || movie.rating >= ratingFilter)
    );
    setFilteredMovies(filteredMovies);
  };

  const handleAddMovie = () => {
    const newMovie = {
      title: prompt("Enter movie title:"),
      description: prompt("Enter movie description:"),
      posterURL: prompt("Enter movie poster URL:"),
      rating: parseFloat(prompt("Enter movie rating (1-10):")),
    };

    if (newMovie.title && !isNaN(newMovie.rating)) {
      setMovies((prevMovies) => [...prevMovies, newMovie]);
      filterMovies();
    } else {
      alert("Invalid input. Please try again.");
    }
  };

  return (
    <Router>
    <div>
      <h1>Movienet App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/movies">
          <Filter
            onTitleChange={handleTitleChange}
            onRatingChange={handleRatingChange}
          />
          <button onClick={handleAddMovie}>Add Movie</button>
          <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
        </Route>
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  </Router>
  );
};

export default App;
