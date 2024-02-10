import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {

    actor: Cast

}

export const CastItem = ({ actor }: Props) => {
    
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    
    
    // console.log("🚀 ~ CastItem ~ actor:",JSON.stringify( actor,null,4))

    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    
                    <Image
                        source={{uri}}
                        style={{width:80,height:80,borderTopLeftRadius:10,borderBottomLeftRadius:10}}
                    
                    />

                )

            }

            
            <View style={styles.actorInfo} >

                <Text style={{fontSize:16,fontWeight:'bold',color:'gray',width:'100%'}}  
                numberOfLines={1}
                ellipsizeMode='tail'>
            
                    {actor.name}

                </Text>
                <Text style={{fontSize:14,fontWeight:'bold',color:'black',width:'100%'}}
                numberOfLines={1}
                ellipsizeMode='tail'
                >

                    {actor.character}
                   

                </Text>
            

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    
container:{
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:10,
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginRight:20,
    // paddingVertical:10,
    marginVertical:10,
    width:250,
   

    marginLeft: 20,
},
actorInfo:{
    flex:1,
    marginLeft: 10,
    justifyContent:'center',
    gap:10
}


});