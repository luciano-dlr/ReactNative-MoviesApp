import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';


interface Props {

    navigation: StackNavigationProp<any, any>

}

export const HomeScreen = ({ navigation }: Props) => {


   
    const { moviesList,isLoading } = useMovies()

    if (isLoading) {

        return (
            <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                <ActivityIndicator color='red' size={50}/>
            </View>
        )
    }
  

    return (
        <View>
            <Text>Soy home</Text>
            

            <Button
                title='Ir detalle '
                onPress={() => navigation.navigate('DetailScreen')}
            />
        </View>
    )
}

