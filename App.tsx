import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';



// Ojo leio con el archivo MainActivity.kt  D:\CursoFH.native\MoviesApp\android\app\src\main\java\com\moviesapp>

const AppState = ({ children }: any) => {


  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}


export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen/> */}
      </AppState>
    </NavigationContainer>
  )
}
