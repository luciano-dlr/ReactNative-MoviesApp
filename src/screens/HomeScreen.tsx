import React, { useEffect, useState } from 'react'
import Carousel from 'react-native-snap-carousel';

import { StackNavigationProp } from '@react-navigation/stack';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

import ImageColors from 'react-native-image-colors';




const { width: windowWidth } = Dimensions.get('window');


export const HomeScreen = () => {


const { isLoading, nowPlaying, popular, topRated, upComing } = useMovies()
const { top } = useSafeAreaInsets()



const getPosterColors = async (index:number) => {
    
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    console.log("🚀 ~ getPosterColors ~ uri:", uri)
    // --fer
    // const colors2 = await getColors(uri, {})

    //Important Leio 13/2/2024
    //efe proyecto libreria rota, pide inyection de expo en proyect algun dia integrado ...

    const colors2 = await ImageColors.getColors(uri,{});

    console.log("SOY EL RESULTADO LEIO", colors2)

    // console.log("🚀 ~ getPosterColors ~ colors2:", colors2)

   
}


    if (isLoading) {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    }


    return (

        <GradientBackground >

            <ScrollView>

                <View style={{ marginTop: top + 20 }}>

                    {/* carrusel principal */}
                    <View style={{ width: 440 }}>

                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={(slideIndex => getPosterColors(slideIndex))}
                        />

                    </View>

                    <View style={{ marginVertical: 5 }}>

                        <HorizontalSlider
                            title='Popular'
                            movies={popular}
                        />
                        <HorizontalSlider
                            title='Top Rated'
                            movies={topRated}
                        />
                        <HorizontalSlider
                            title='Up coming'
                            movies={upComing}
                        />

                    </View>

                </View>

            </ScrollView>
        </GradientBackground>
    )
}

