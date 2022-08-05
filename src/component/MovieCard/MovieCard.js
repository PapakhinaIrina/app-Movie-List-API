import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


const MovieCard = ({ movie }) => (
    <div className='movie-card'>
        <Link className='movies-link' to={`/movie-details/${movie.id}`}>
            <div className='movie-poster'>
                <img
                    src={movie.medium_cover_image}
                    alt={movie.title}
                />
            </div>
            <h3 className='movie-title'>
                {movie.title}
            </h3>
        </Link>
    </div>
);

export default MovieCard;
