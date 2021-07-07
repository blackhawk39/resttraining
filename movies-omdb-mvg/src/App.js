import React, { useState } from 'react';
import axios from 'axios';

import Movie from './components/Movie';
import MovieList from './components/MovieList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [movieName, setMovieName] = useState('');
  const [Title, setTitle] = useState('');
  const [Year, setYear] = useState('');
  const [imdbID, setImdbId] = useState('');
  const [Type, setType] = useState('');
  const [Poster, setPoster] = useState('');
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const handleGetMovieDetails = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios.post(`http://www.omdbapi.com/?t=${movieName}&apikey=3ca97f79`)
      .then(res => {
        setTitle(res.data.Title);
        setYear(res.data.Year);
        setImdbId(res.data.imdbID);
        setType(res.data.Type);
        setPoster(res.data.Poster);
        var movieDetail = { Title, Year, imdbID, Type, Poster};
        setMovie(movieDetail);
      })
      .then(() => {
        setIsLoading(false);
      })
  }

  const handleAddMovie = (e) => {
    e.preventDefault();
    var movieDetail = { Title, Year, imdbID, Type, Poster};
    setMovies([...movies, movieDetail]);
  }

  const handleDeleteMovie = (m) => {
    const filteredList = movies.filter((mve) => mve.imdbID !== m.imdbID);
    setMovies(filteredList);
  }

  return (
    <div className='container-fluid movie-app'>
      <form id="register-form" className="col-md-3 mx-auto">
        <div className="form-group">
            <label htmlFor="movieName">Enter movie name : </label>
            <input type="text" className="form-control" id="movie" autoComplete="off" required value={movieName} onChange={(e) => setMovieName(e.target.value)} />
        </div>
        <button onClick={handleGetMovieDetails} type="submit" className="btn btn-outline-success" id="getMovieDetails">Search { isLoading && <div className="spinner-border spinner-border-sm" role="status"><span className="sr-only">Loading</span></div>}</button>
        <button onClick={handleAddMovie} className="btn btn-outline-success" id="addMovie" disabled={movies.length === 10}>Add</button>
      </form>

      { movie.Poster && <Movie movie={movie}/>}

      { movies.length > 0 &&
        <div className="kick-bucket-list">
          <h2 className="diplsay-4">Kick Bucket List</h2>
          <div className='row'>
            <MovieList movies={movies} handleDeleteMovie={handleDeleteMovie} />
          </div>
        </div>
      }

    </div>
  );
};

export default App;