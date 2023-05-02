import React from "react";

const MovieCard = (props) => {
    return (
        <div className={'d-flex justify-content-around movie-card'} style={{width: 18 + 'em'}}>
            <img src={props.movie.Poster} alt="movie" className="card-img-top"/>
        </div>
    );
}

export default MovieCard;