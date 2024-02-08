import React from 'react';
// import Icon from "react-native-vector-icons/Ionicos";
import { StackScreenProps } from '@react-navigation/stack';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import Icon from "react-native-vector-icons/Ionicons";

const screenHeight = Dimensions.get('screen').height

interface Poprs extends StackScreenProps<RootStackParams, 'DetailScreen'> {}


export const DetailScreen = ({ navigation, route }: Poprs) => {

  const movie = route.params


  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


  console.log("🚀 ~ DetailScreen ~ movie:", movie.original_title)



  return (
    <ScrollView>

    <View style={styles.imageContainer}>

      <Image
        source={{ uri }}
        style={styles.posterImage}
        />

    </View>

    <View style={styles.marginContainer}>

        <Text style={styles.subTitle} >{movie.original_title}</Text>
        <Text style={styles.title} >{movie.title}</Text>

    </View>
    <View style={styles.marginContainer}>

       {/* <Icon */}
       <Icon
       name='star-outline'
       color='grey'
       size={20}
       />

    </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  imageContainer:{
    width:'100%',
    height:screenHeight * 0.7,
    backgroundColor:'white',
    borderBottomRightRadius:40,
    borderBottomLeftRadius:40,
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 6,
  },

  posterImage: {
    flex: 1,
    borderBottomRightRadius:40,
    borderBottomLeftRadius:40,
    paddingBottom:20,
  },
  marginContainer:{
    marginHorizontal:20,
    marginVertical:20
  },
  subTitle:{
    fontSize:16,
    opacity:0.8
  },
  title:{
    fontSize:20,
    fontWeight:'700',
    color:'black'
  }

});


