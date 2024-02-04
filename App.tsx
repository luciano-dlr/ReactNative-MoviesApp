import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';


// Ojo leio con el archivo MainActivity.kt  D:\CursoFH.native\MoviesApp\android\app\src\main\java\com\moviesapp>

export const App = () => {
  return (
    <NavigationContainer>
     <Navigation/>
    </NavigationContainer>
  )
}
