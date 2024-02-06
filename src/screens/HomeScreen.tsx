import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../interfaces/movieInterface';


interface PropsNavigation {

    navigation: StackNavigationProp<any, any>

}


export const HomeScreen = ({ navigation }: PropsNavigation,) => {



    const { moviesList, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()

    if (isLoading) {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    }


    return (
        <View style={{ margin: top + 20 }}>

            <MoviePoster 
            movie={moviesList[0]}/>


        </View>
    )
}

