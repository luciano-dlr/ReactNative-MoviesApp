import React, { useRef } from 'react'
import { Animated, View } from 'react-native'

export const FadeScreen = () => {

    const opacity = useRef(new Animated.Value(0)).current;


    const fadeIn = () => {

        Animated.timing(
            opacity,
            {
                toValue:1,
                duration:1000,
                useNativeDriver:true
                
            }
        )
    }


    return (
        <View style={{
            flex: 1,
            backgroundColor:'grey',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <View style={{
                backgroundColor: '#084F6A',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                
            }} />

        </View>

    )
}


