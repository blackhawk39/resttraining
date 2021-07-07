import React from 'react';

const Movie = (props) => {
    const movie = props.movie;
	return (
        <div className='image-container d-flex justify-content-start m-3'>
            <img className="my-poster" src={movie.Poster} alt='movie'></img>
        </div>
	);
};

export default Movie;