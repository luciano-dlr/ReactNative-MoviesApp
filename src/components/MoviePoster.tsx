import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Navigation, RootStackParams } from '../navigation/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';


interface Props {
    movie: Movie;
    height?: number;
    width?: number;
    
    
}



export const MoviePoster = ({ movie, height = 420, width = 300, }: Props, ) => {


    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()


    return (
        <TouchableOpacity
            onPress={() =>  navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 8,
                padding:12,
                borderRadius:18
  
            }}

        >

            <View style={styles.imageContainer} >

                <Image
                    source={{
                        uri
                    }}
                    style={styles.image}
                />

            </View>
           
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    image: {
        flex: 1,
        borderRadius: 18,
        
        
    },
    imageContainer: {
        flex: 1,
        backgroundColor:'white',
        borderRadius:18,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 6,
        
     
    }

});


