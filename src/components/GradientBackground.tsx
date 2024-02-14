import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


interface Props {

    children:JSX.Element | JSX.Element[]

}

export const GradientBackground = ({children}:Props) => {


  return (
    <View style={{flex:1,}}>

        <LinearGradient
            colors={['#084F6A','#75CEDB','white']}
            style={{...StyleSheet.absoluteFillObject}}

            start={{x:0.2,y:0}}
            end={{x:0.8,y:0.8}}
        />

        {children}
      
    </View>
  )
}


