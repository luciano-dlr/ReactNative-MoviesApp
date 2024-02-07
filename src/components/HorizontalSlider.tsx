import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import { FlatList, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string,
    movies: Movie[]
}

export const HorizontalSlider = ({ title, movies }: Props) => {


    return (
        <View style={{ 
            height: (title) ? 260 : 250
            }}>

            <Text style={{ fontSize: 30, fontWeight: '600',marginLeft:10,color:'black',marginVertical:8 }}>{title}</Text>

            <FlatList
                data={movies}
                renderItem={({ item }: any) => (

                    <MoviePoster movie={item} width={140} height={200} />

                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}


