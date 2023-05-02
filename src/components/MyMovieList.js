import React from 'react';
import Button from "./Button";

const MyMovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className={'d-flex justify-content-around movie-card'}  style={{width: 18 + 'em'}}>
                    <img src={movie.Poster} alt="movie" className={"card-img-top"}/>
                    <div className="overlay align-items-center justify-content-center">
                        <Button color={"primary"} onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}`, '_blank')}>More Info</Button>
                        <Button color={"danger"} onClick={() => props.deleteMyMovie(movie)}>Delete Movie</Button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default MyMovieList;