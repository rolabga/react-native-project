import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {Feather, AntDesign} from '@expo/vector-icons';

const View4 = ({navigation}) => {

    const goToPost = () => {
        navigation.navigate('Post3');
      }

      const goReserve = () => {
        navigation.navigate('Reserve');
      }

    return (
        <View style={{backgroundColor: 'white', flex:1}}>
            <ImageBackground
              source={require('../assets/Rome.jpg')}
              style={{width: '130%', height: '100%', justifyContent: 'flex-end',right: 170}}
              imageStyle={{resizeMode: 'stretch'}}
            >
                <View style={styles.DarkOverlay}></View>
                <View style={{top:120}}>
                     <Text style={styles.text}>1-3 Days |        470 kms</Text>
                     <Feather name='calendar' size={18} color='white' style={styles.icon} />
                     <Feather name='map-pin' size={18} color='white' style={styles.icon1}/>
                </View>

                <View style={{top:5, left: 10}}>
                <Text style={styles.text1}>4</Text>
                <Text style={styles.text2}>out of 5 (1235 Reviews)</Text>
                    <AntDesign name='star' size={14} color='yellow' style={styles.star1}/>
                    <AntDesign name='star' size={14} color='yellow' style={styles.star2}/>
                    <AntDesign name='star' size={14} color='yellow' style={styles.star3}/>
                    <AntDesign name='star' size={14} color='yellow' style={styles.star4}/>
                </View>
    
            <TouchableOpacity onPress={goToPost} style={{position: 'absolute', left: 200, top: 40, backgroundColor: 'white', padding: 10, borderRadius: 40}}>
              <Feather name='arrow-left' size={22} color='black' />
            </TouchableOpacity>
            </ImageBackground>
            <View style={styles.LightOverlay}></View>
                <View style={{bottom: 60, right: 180}}>    
                    <Text style={styles.textTitle}>The Colosseum, Rome</Text>
                </View>

                <View style={{bottom: 90, right: 195}}>    
                    <Text style={styles.textBody}>The Colosseum has been regarded as a symbol of Rome since the Middle Ages. The significance of the Colosseum was reflected in Bede’s writing when he wrote in 7th century, “As long as the Colosseum stands, Rome shall stand; when the Colosseum falls, Rome shall fall; and when Rome falls, the world will end.” Well, the Colosseum still stands mighty, long after the fall of the Roman Empire. It has survived several earthquakes, plant overgrowth, looting, and modern day pollution to become one of Rome’s top tourist attractions.</Text>
                </View>

                <View>
                <TouchableOpacity onPress={goReserve} style={{backgroundColor: 'white', height: 50, right: 5, bottom:300, width: 420,borderTopRightRadius:30,borderTopLeftRadius:30}}>
                    <Text style={{color:'black', fontSize: 22, fontWeight: 'bold', textAlign: 'center',top:10}}>Reserve Now!</Text>
                </TouchableOpacity>
                </View>

                <Text style={styles.textBody1}>Also Known as:    </Text>
                <Text style={styles.textBody2}>Best Time to Visit:   </Text>
                <Text style={styles.textBody3}>October</Text>
                <Text style={styles.textBody4}>Flavian Amphitheatre</Text>
                <Text style={styles.textBody5}>May, September, and</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    DarkOverlay:{
        position: 'absolute',
        width: '130%',
        height: '100%',
        justifyContent: 'flex-end',
        backgroundColor: '#000',
        opacity: 0.2, 
    },
    LightOverlay:{
        position: 'absolute',
        width: '130%',
        height: 430,
        bottom: 0,
        justifyContent: 'flex-end',
        backgroundColor: '#000',
        opacity: 0.5, 
    },
    text: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'normal',
      paddingHorizontal: 14,
      marginBottom: 30,
      left: 195,
      bottom: 350
    },
    icon: {
        left:187,
        bottom:400,
        elevation: 2
    },
    icon1: {
        left:285,
        bottom:420,
        elevation: 2
    },
    star1: {
      left:210,
      bottom:400,
      elevation: 2
  },
  star2: {
      left:225,
      bottom:414.5,
      elevation: 2
  },
  star3: {
      left:240,
      bottom:428.6,
      elevation: 2
  },
  star4: {
      left:255,
      bottom:442.9,
      elevation: 2
  },
  text1: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginBottom: 30,
    left: 260,
    bottom: 304
},
text2: {
  color: 'white',
  fontSize: 14,
  fontWeight: 'normal',
  paddingHorizontal: 14,
  marginBottom: 30,
  left: 275,
  bottom: 353
},
textTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginBottom: 30,
    left: 195,
    bottom: 350
  },
  textBody: {
    color: 'white',
    fontSize: 14,
    fontWeight: "normal",
    paddingHorizontal: 14,
    left: 195,
    bottom: 350,
    textAlign: 'justify',
    margin: 16
  },
  textBody1: {
    color: 'white',
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 14,
    right: 0,
    bottom: 510,
    textAlign: 'justify',
    margin: 16
  },
  textBody2: {
    color: 'white',
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 14,
    right: 0,
    bottom: 530,
    textAlign: 'justify',
    margin: 16
  },
  textBody3: {
    color: 'white',
    fontSize: 14,
    fontWeight: "normal",
    paddingHorizontal: 14,
    left: 130,
    bottom: 563,
    textAlign: 'justify',
    margin: 16
  },
  textBody4: {
    color: 'white',
    fontSize: 14,
    fontWeight: "normal",
    paddingHorizontal: 14,
    left:110.5,
    bottom: 663,
    textAlign: 'justify',
    margin: 16
  },
  textBody5: {
    color: 'white',
    fontSize: 14,
    fontWeight: "normal",
    paddingHorizontal: 14,
    left: 128,
    bottom: 683,
    textAlign: 'justify',
    margin: 16
  },
});
  

export default View4;