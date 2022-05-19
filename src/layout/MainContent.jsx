import React, { useState, useEffect } from "react";
import { MoviesList } from "../components/MoviesList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const MainContent = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }, []) // Если никакой зависимости нету, тогда данная функция выполниться только один раз при первом монтировании.

    const searchMovie = (string, type = 'all') => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${string}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }

    return (
        <main className="container content">
            <Search searchMovie={searchMovie} />
            {
                loading ? (<Preloader />) : (<MoviesList movies={movies} />)
            }
        </main>
    )
}

export { MainContent }