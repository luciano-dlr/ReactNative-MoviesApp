import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';


interface Props {
    movie: Movie;
}


export const MoviePoster = ({ movie }: Props) => {

    console.log("🚀 ~ Movie:", movie.poster_path)
    console.log(movie.poster_path)
    // console.log(https://image.tmdb.org/t/p/w500)

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <View style={{
            width: 300,
            height: 420,




        }}>

            <View style={styles.imageContainer}>

                <Image
                    source={{
                        uri
                    }}
                    style={styles.image}
                />

            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    image: {
        flex: 1,
        width: 300,
        height: 420,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    }

});


