import React from 'react'
import { Text, View,FlatList } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface';
import Icon from "react-native-vector-icons/Ionicons";
import currencyFormater from 'currency-formatter'
import { CastItem } from './CastItem';




interface Props {

    movieFull: MovieFull;
    cast: Cast[]

}

export const MovieDetails = ({ movieFull, cast }: Props) => {


    return (
        <>
            {/* detalles */}
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: 'row' }}>


                    <Icon
                        name='star-outline'
                        color='grey'
                        size={18}
                    />

                    <Text style={{ marginLeft: 10 }}>{movieFull.vote_average}</Text>

                    <Text style={{ marginLeft: 10 }}>
                        - {movieFull.genres.map(genere => genere.name).join(', ')}
                    </Text>



                </View>

                {/* historia */}

                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', color: 'black' }}>
                    Historia
                </Text>

                <Text style={{ fontSize: 15, marginTop: 4, fontWeight: 'bold', color: 'black' }}>{movieFull.overview}</Text>

                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', color: 'black' }}>
                    Presupuesto
                </Text>

                <Text style={{ fontSize: 15, marginTop: 4, fontWeight: 'bold', color: 'black' }}>
                    USD {currencyFormater.format(movieFull.budget, { code: 'USD' })}
                </Text>

            </View>

            {/* casting */}
            <View >

                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', color: 'black',marginHorizontal:20,marginBottom:12 }}>
                    Actores
                </Text>

                <FlatList
                    data={cast}
                    keyExtractor={ (item) => item.id.toString() }
                    renderItem={({item}) => <CastItem actor={item} /> }
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    // style={{ width:'100'}}

                />

                {/* <CastItem actor={cast[0]} /> */}

            </View>



        </>
    )
}



