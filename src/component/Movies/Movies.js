import React, { useState, useEffect } from 'react';
import yts from '../../api';
import MovieCard from '../MovieCard/MovieCard';
import './style.css'


const fetchMovieList = async () => {
    try {
        let { data: res } = await yts.get(`api/v2/list_movies.json/`, {
            params: {
                limit: 20
            },
        });
        return {data: res.data.movies};
    } catch (err) {
        console.log(err);
    }
};

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await fetchMovieList();

            setMovies(() => [...data]);
        })();
    }, []);

    return (
        <>
            <div className='container'>
                <div className='row justify-content-center m-5'>
                    {movies.map((movie) => {
                        return <MovieCard key={movie.id} movie={movie} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default Movies;
