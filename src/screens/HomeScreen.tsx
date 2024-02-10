import React from 'react'
import Carousel from 'react-native-snap-carousel';



import { StackNavigationProp } from '@react-navigation/stack';
import { ActivityIndicator, Dimensions, ScrollView,View } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';


const { width: windowWidth } = Dimensions.get('window');



export const HomeScreen = () => {



    const { isLoading, nowPlaying, popular, topRated, upComing } = useMovies()
    
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
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />

                </View>

                <View style={{ marginVertical:5}}>

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
    )
}

