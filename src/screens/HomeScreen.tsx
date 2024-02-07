import React from 'react'
import Carousel from 'react-native-snap-carousel';



import { StackNavigationProp } from '@react-navigation/stack';
import { ActivityIndicator, Button, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';


const { width: windowWidth } = Dimensions.get('window');




export const HomeScreen = () => {



    const { moviesList, isLoading, moviesListPopular, moviesListTopRated,moviesListUpcoming } = useMovies()
    
    const { top } = useSafeAreaInsets()

    if (isLoading) {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    }


    return (
        <ScrollView>

            <View style={{ marginTop: top + 20 }}>

                {/* carrusel principal */}
                <View style={{ width: 440 }}>

                    <Carousel
                        data={moviesList}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />

                </View>

           

                <View style={{
                    marginVertical:5
                }}>
                 
                    <HorizontalSlider
                        title='Peliculas Populareh'
                        movies={moviesListPopular}
                    />
                    <HorizontalSlider
                    
                        title='Peliculas Rated'
                        movies={moviesListTopRated}

                    />
                    <HorizontalSlider
                    
                        title='Peliculas Upcoming'
                        movies={moviesListUpcoming}

                    />
                  

                </View>






            </View>
        </ScrollView>
    )
}

