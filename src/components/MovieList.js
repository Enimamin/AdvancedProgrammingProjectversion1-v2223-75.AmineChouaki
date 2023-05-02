import React from 'react';
import AddToMyMovies from "./AddToMyMovies";

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => (
            <div className={'d-flex justify-content-around movie-card'}  style={{width: 18 + 'em'}}>
                <img src={movie.Poster} alt="movie" className={"card-img-top"}/>
                <div className="overlay d-flex align-items-center justify-content-center">
                    <AddToMyMovies movie={movie} handleAddToMyMovies={props.handleMyMovieClick} />
                </div>
            </div>
        ))}
        </>
    );
}

export default MovieList;