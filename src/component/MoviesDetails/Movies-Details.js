import React, { useState, useEffect } from 'react';
import Comment from '../ComAddForm/ComAddForm'
import yts from '../../api';
import './style.css'

const MoviesDeatils = ({ match }) => {
    const movie_id = match.params.id;
    const [movieDetail, setMovieDetail] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {

        (async () => {
            const fetchMovieDetails = await yts.get(`api/v2/movie_details.json/`, {
                params: {
                    movie_id,
                },
            });

            setMovieDetail(fetchMovieDetails.data.data.movie);
            setGenres(fetchMovieDetails.data.data.movie.genres);
        })();
    }, [movie_id])

    return (
        <>
        <div className="movie_details_container">
            <div className='main'>
                <div className="movie-main-details">
                    <div className="movie-poster-left">
                        <div className="poster">
                            <img src={movieDetail.medium_cover_image} alt={movieDetail.slug} />
                        </div>
                    </div>
                    <div className="movie-details-middle">
                        <div className="title">
                            <h1>{movieDetail.title}</h1>
                        </div>
                        <span className="break-line"></span>
                        <div className="genres">
                            <h4>{movieDetail.year}</h4>
                            <h4>{genres.map((genre, i) => {
                                return (<i key={i}> {genre} / </i>);
                            })} </h4>
                        </div>
                    </div>
                    <div className="movie-specs">
                        <div className="tech-specs-left-content">
                            <h2 className="description">Description </h2>
                            <p>{movieDetail.description_full}</p>
                        </div>
                        <div>
                            <Comment/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MoviesDeatils;
