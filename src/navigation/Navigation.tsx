import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from "../screens/HomeScreen";
import { DetailScreen } from "../screens/DetailScreen";
import { Movie } from "../interfaces/movieInterface";
import { StatusBar } from "react-native";


export type RootStackParams = {
  HomeScreen:undefined;
  DetailScreen:Movie;
  Test1:{
    movie:Movie
  }
}


const Stack = createStackNavigator<RootStackParams>();


export const Navigation = () => {
  return (
    <>
    <StatusBar  barStyle={"default"}  backgroundColor="transparent" translucent  />
    <Stack.Navigator
    
    screenOptions={{
        headerShown:false,
        
        cardStyle:{
            backgroundColor:'#D4D4D4',
            
        }
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
     
    </Stack.Navigator>
    </>
  );
}