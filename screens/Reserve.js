import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity, Alert} from 'react-native';
import { TextInput} from 'react-native-gesture-handler';
import { Ionicons, Entypo, Feather} from '@expo/vector-icons';
const{width: WIDTH} = Dimensions.get('window')

const Reserve = ({navigation}) => {

    const goBack = () => {
        navigation.navigate('Home');
      }

      const Alertbtn = () =>
      Alert.alert(
        "Do you wish to continue?",
        "TRVL will proceed to search bookings with the provided details.",
        [
          {
            text: "Cancel"
          },
          { text: "Continue", onPress: () => navigation.navigate('Home') }
        ],
        { cancelable: false }
      );  
    
    return(
        <ImageBackground source={require('../assets/trvl.jpg')} style={styles.background}>
            <View style={styles.DarkOverlay}>
                <View style={styles.logoContainer}>
                </View>
            </View>
            <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 40, backgroundColor: '#f64848', padding: 10, borderRadius: 40}}>
          <Feather name='arrow-left' size={22} color='#fff' />
        </TouchableOpacity>
            <Image source={require('../assets/logo1.png')} style={styles.logo}/>
                <Text style={styles.title}>TRVL</Text>
                <Text style={styles.subtitle}>Discover your Next Holiday Destination</Text>
            <View style={styles.inputContainer}>
            <Ionicons name='md-person' size={28} color={'white'} style={styles.inputIcon} />
                <TextInput 
                    style={styles.input}
                    placeholder='First Name'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                />
            </View>

            <View style={styles.inputContainer}>
                <Ionicons name='md-person' size={28} color={'white'} style={styles.inputIcon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Last Name'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                />
            </View>

            <View style={styles.inputContainer}>
                <Entypo name='mail' size={28} color={'white'} style={styles.inputIcon} />
                <TextInput 
                    style={styles.input}
                    placeholder='E-mail Address'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                />
            </View>

            <View style={styles.inputContainer2}>
                <TextInput 
                    style={styles.input2}
                    placeholder='Phone Number*'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                />
            </View>

            <View style={styles.inputContainer3}>
                <Entypo name='calendar' size={28} color={'white'} style={styles.inputIcon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Departure Date'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                />
            </View>

            <View style={styles.inputContainer3}>
                <Entypo name='calendar' size={28} color={'white'} style={styles.inputIcon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Return Date'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                />
            </View>

            <View style={styles.inputContainer3}>
                <Entypo name='calendar' size={28} color={'white'} style={styles.inputIcon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Preferred Pickup Address'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                />
            </View>

            <TouchableOpacity style={styles.btnLogin} onPress={Alertbtn} >
                    <Text style={styles.text}>Submit your Reservation</Text>
                </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
DarkOverlay:{
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    opacity: 0.1,
},
background: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
},
logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
    
},
logo: {
    width: 150,
    height: 70,
    resizeMode: 'stretch',
    top:40
},
title: {
    color: 'white',
    fontSize: 65,
    fontWeight: '500',
    top:20,
    left: 9        
},
subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: "bold",
    bottom: 0,
    marginBottom: 60        
},
inputContainer:{
    marginTop: 10,
    bottom: 60
},
inputContainer1:{
    marginTop: 10,
    bottom: 60
},
inputContainer2:{
    marginTop: 10,
    bottom: -1337
},
inputContainer3:{
    marginTop: 10,
    bottom: 115
},
input: {
    width: WIDTH -55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(.0,0,0,0.6)',
    color: 'white',
    marginHorizontal: 25 
},
input1: {
    width: WIDTH -270,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    backgroundColor: 'rgba(.0,0,0,0.6)',
    color: 'white',
    marginHorizontal: 25,
    textAlign: 'center' ,
    right: 105
},
input2: {
    width: WIDTH -160,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    backgroundColor: 'rgba(.0,0,0,0.6)',
    color: 'white',
    marginHorizontal: 25,
    textAlign: 'center' ,
    left:45
},
inputIcon: {
    position: 'absolute',
    top: 8,
    left:37
},

btnLogin: {
    width: WIDTH -55,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#f64848',
    justifyContent: 'center',
    marginTop: 20,
    bottom: 80
},
text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
}
});
 

export default Reserve;