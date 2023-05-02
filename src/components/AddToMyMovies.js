import React from "react";

const AddToMyMovies = (props) => {
    return (
        <div className={'col-auto m-2'}>
            <button
                onClick={() => props.handleAddToMyMovies(props.movie)}
                className={'btn btn-success'}>
                Add to My Movies
            </button>
        </div>
    );
}

export default AddToMyMovies;