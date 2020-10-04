import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import {Feather, AntDesign} from '@expo/vector-icons';

const View5 = ({navigation}) => {

    const goToPost = () => {
        navigation.navigate('Post4');
      }

      const goReserve = () => {
        navigation.navigate('Reserve');
      }

    return (
        <View style={{backgroundColor: 'white', flex:1}}>
            <ImageBackground
              source={require('../assets/China.jpeg')}
              style={{width: '130%', height: '100%', justifyContent: 'flex-end',right: 170}}
              imageStyle={{resizeMode: 'stretch'}}
            >
                <View style={styles.DarkOverlay}></View>
                <View style={{top:125}}>
                     <Text style={styles.text}>2 Days   |        280 kms</Text>
                     <Feather name='calendar' size={18} color='white' style={styles.icon} />
                     <Feather name='map-pin' size={17} color='white' style={styles.icon1}/>
                </View>

                <View style={{top:15, left: 10}}>
                <Text style={styles.text1}>5</Text>
                <Text style={styles.text2}>out of 5 (1324 Reviews)</Text>
                    <AntDesign name='star' size={14} color='yellow' style={styles.star1}/>
                    <AntDesign name='star' size={14} color='yellow' style={styles.star2}/>
                    <AntDesign name='star' size={14} color='yellow' style={styles.star3}/>
                    <AntDesign name='star' size={14} color='yellow' style={styles.star4}/>
                    <AntDesign name='star' size={14} color='yellow' style={styles.star5}/>
                </View>
    
            <TouchableOpacity onPress={goToPost} style={{position: 'absolute', left: 200, top: 40, backgroundColor: 'white', padding: 10, borderRadius: 40}}>
              <Feather name='arrow-left' size={22} color='black' />
            </TouchableOpacity>
            </ImageBackground>
            <View style={styles.LightOverlay}></View>
                <View style={{bottom: 60, right: 180}}>    
                    <Text style={styles.textTitle}>Great Wall of China</Text>
                </View>

                <View style={{bottom: 90, right: 195}}>    
                    <Text style={styles.textBody}>The Great Wall of China, the largest man-made project in the world, is a series of ancient fortifications built in northern China. Although named the 'wall', it is an integrated defense system including not only lofty and solid walls, but also massive signal towers, barriers, barracks, garrison stations, and fortresses along the walls, together forming an insurmountable line, for thousands of years, to protect the territories of ancient Chinese states against the nomadic tribes from the northern steppe.</Text>
                </View>

                <View>
                <TouchableOpacity onPress={goReserve} style={{backgroundColor: 'white', height: 50, right: 5, bottom:300, width: 420,borderTopRightRadius:30,borderTopLeftRadius:30}}>
                    <Text style={{color:'black', fontSize: 22, fontWeight: 'bold', textAlign: 'center',top:10}}>Reserve Now!</Text>
                </TouchableOpacity>
                </View>

                <Text style={styles.textBody1}>Also Known as: </Text>
                <Text style={styles.textBody2}>Best Time to Visit:    </Text>
                <Text style={styles.textBody3}>September to November</Text>
                <Text style={styles.textBody4}>万里长城wàn lǐ cháng chéng</Text>
                <Text style={styles.textBody5}>April to May and</Text>
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
        opacity: 0.2, 
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
    star5: {
        left:270,
        bottom:457.2,
        elevation: 2
    },
    text1: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      paddingHorizontal: 14,
      marginBottom: 30,
      left: 278,
      bottom: 304
  },
  text2: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'normal',
    paddingHorizontal: 14,
    marginBottom: 30,
    left: 293,
    bottom: 354
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
      bottom: 520,
      textAlign: 'justify',
      margin: 16
    },
    textBody2: {
      color: 'white',
      fontSize: 14,
      fontWeight: "bold",
      paddingHorizontal: 14,
      right: 0,
      bottom: 540,
      textAlign: 'justify',
      margin: 16
    },
    textBody3: {
      color: 'white',
      fontSize: 14,
      fontWeight: "normal",
      paddingHorizontal: 14,
      left: 130,
      bottom: 570,
      textAlign: 'justify',
      margin: 16
    },
    textBody4: {
      color: 'white',
      fontSize: 14,
      fontWeight: "normal",
      paddingHorizontal: 14,
      left:110.5,
      bottom: 673,
      textAlign: 'justify',
      margin: 16
    },
    textBody5: {
      color: 'white',
      fontSize: 14,
      fontWeight: "normal",
      paddingHorizontal: 14,
      left: 128,
      bottom: 693,
      textAlign: 'justify',
      margin: 16
    },
});
  

export default View5;