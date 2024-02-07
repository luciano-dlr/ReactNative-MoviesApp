import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlayingResponse } from '../interfaces/movieInterface';

export const useMovies = () => {


    const [isLoading, setIsLoading] = useState(true)
    const [moviesList, setMoviesList] = useState<Movie[]>([])
    const [moviesListPopular, setMoviesListPopular] = useState<Movie[]>([])
    const [moviesListTopRated, setMoviesListTopRated] = useState<Movie[]>([])
    const [moviesListUpcoming, setMoviesListUpcoming] = useState<Movie[]>([])


   

    const getMovies = async () => {

        const respNowPlaying = await movieDB.get<MovieDBNowPlayingResponse>('/now_playing')
        const respPopular = await movieDB.get<MovieDBNowPlayingResponse>('/popular')
        const respTopRated = await movieDB.get<MovieDBNowPlayingResponse>('/top_rated')
        const respUpcoming = await movieDB.get<MovieDBNowPlayingResponse>('/upcoming')

        setMoviesList(respNowPlaying.data.results)
        setMoviesListPopular(respPopular.data.results)
        setMoviesListTopRated(respTopRated.data.results)
        setMoviesListUpcoming(respUpcoming.data.results)



        setIsLoading(false)
    }


    useEffect(() => {

        getMovies();

    }, [])







    return {
        moviesList,
        moviesListPopular,
        moviesListTopRated,
        moviesListUpcoming,
        isLoading
    }
}


