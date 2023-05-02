import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useEffect, useState} from "react";
import Heading from "./components/Heading";
import SearchBox from "./components/SearchBox";
import MyMovieList from "./components/MyMovieList";

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('star wars');
    const [myMovies, setMyMovies] = useState([]);
    const getMovie = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c72aade6`;

        const response = await fetch(url);
        const data = await response.json();
        if (data.Search) {
            setMovies(data.Search);
        }
    }

    useEffect(() => {
        getMovie(searchValue);
    }, [searchValue]);

    const AddMyMovie = (movie) => {
        if (myMovies.includes(movie)) {
            return;
        }
        setMyMovies([movie, ...myMovies])
    }

    const deleteMyMovie = (movie) => {
        setMyMovies(myMovies.filter((myMovie) => myMovie.imdbID !== movie.imdbID));
    }


  return (
    <div className="container-fluid movie-app">
        <div className={"row d-flex align-items-center mt-4 mb-4"}>
            <Heading heading='Movies'/>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className="row">
        </div>
        <div className="row">
            <MovieList movies={movies} handleMyMovieClick={AddMyMovie} />
        </div>
        <div className="row d-flex align-items-center mt-5 mb-4">
            <Heading heading='My Movies'/>
        </div>
        <div className="row">
            <MyMovieList movies={myMovies} handleMyMovieClick={AddMyMovie} deleteMyMovie={deleteMyMovie}/>
        </div>

    </div>
  );
}

export default App;
