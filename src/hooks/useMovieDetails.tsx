import React, { useEffect } from 'react';
import { useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?:MovieFull
    cast: Cast[];

}

export const useMovieDetails = (movieId:number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading:true,
        movieFull:undefined,
        cast:[]
    });

    
    const getMoviDetails = async () => {
        
        const movieDetailsPromise =  movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise =  movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [ movieDetailsResp,castPromiseResp ] = await Promise.all([ movieDetailsPromise,castPromise]);
        
        setState({
            isLoading:false,
            movieFull:movieDetailsResp.data,
            cast:castPromiseResp.data.cast
        })


    };
    
    useEffect(() => {
        
        getMoviDetails()
        
    }, [])
    
    // console.log(movieId);


    return {
       ...state
    }

};


