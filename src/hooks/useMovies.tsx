import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';

export const useMovies = () => {


    const [isLoading, setIsLoading] = useState(true)
    const [moviesList, setMoviesList] = useState<Movie[]>([])

    const getMovies = async () => {

        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')

        setMoviesList(resp.data.results)


        
        setIsLoading(false)
    }


    useEffect(() => {

        getMovies();

    }, [])
    






    return {
        moviesList,
        isLoading
    }
}


