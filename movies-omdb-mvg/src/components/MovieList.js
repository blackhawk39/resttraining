import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div key={index+1}>
					<div className='image-container d-flex justify-content-start m-3'>
						<img className="my-poster" src={movie.Poster} alt='movie'></img>
					</div>
					<button className="deleteMovie btn btn-outline-danger" onClick={() => props.handleDeleteMovie(movie)}>Delete</button>
				</div>
			))}
		</>
	);
};

export default MovieList;