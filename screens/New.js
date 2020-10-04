import React  from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import { Feather, Foundation  } from '@expo/vector-icons';


const screenHeight = Dimensions.get('window').height
const New = ({}) => {


  return (
    <ImageBackground source={require('../assets/menu2.jpg')} style={styles.background}> 
    <View style={styles.DarkOverlay}></View>
    <View style={{Height: '100%', maxHeight: screenHeight}}>
    <View style={styles.LightOverlay}></View>
        <Foundation size={30} name="burst-new" color="#fff" style={{top:72, left:25}}/>
        <Text style={{fontSize:30, fontWeight: 'bold', top:35,left:60, color: '#fff'}}>New Tours</Text>
        <ScrollView contentContainerStyle={{ flexGrow: 2 }} style={{top:35}}>
        <View style={{marginTop: -20}}>
                <Image
                    source={require('../assets/Jaisalmer1.jpg')}
                    style={{width: '92%', height: 250, borderRadius: 10, alignSelf: 'center', top:60}} 
                />
                <View style={styles.Overlay}></View>
                <View style={{position: 'absolute', padding: 16, bottom: 28}}>
                    <View style={{flexDirection: 'row'}}>
                        <Feather name='map-pin' size={18} style={{top: 100,left: 10, color: 'white', position: 'relative', bottom: 0}} />
                        <Text style={{top:95, left: 12, fontSize: 22, color: 'white', fontWeight:'normal', bottom: 6}} >Jaisalmer</Text>
                    </View>
                    <Text style={{top: 100,textAlign:'justify',marginHorizontal: 15, fontSize: 14, color: 'white', fontWeight:'normal',marginBottom: 10, opacity: 0.9}}>
                    A remote desert location, fairytale architecture and incredible hotels make Jaisalmer the destination of your wildest dreams.
                    </Text>
                </View>
            </View>

            <View>
                <Image
                    source={require('../assets/Slovenia2.jpg')}
                    style={{width: '92%', height: 250, borderRadius: 10, alignSelf: 'center', top:80}} 
                />
                <View style={styles.Overlay1}></View>
                <View style={{position: 'absolute', padding: 16, bottom: 28}}>
                    <View style={{flexDirection: 'row'}}>
                        <Feather name='map-pin' size={18} style={{top: 115,left: 10, color: 'white', position: 'relative', bottom: 0}} />
                        <Text style={{top:110, left: 12, fontSize: 22, color: 'white', fontWeight:'normal', bottom: 6}} >Slovenia</Text>
                    </View>
                    <Text style={{top: 120,textAlign:'justify',marginHorizontal: 15, fontSize: 14, color: 'white', fontWeight:'normal',marginBottom: 10, opacity: 0.9}}>
                    This beautiful former part of Yugoslavia is a country mixed with adventures from the sea to a mountainous part of the country dotted with old world towns. 
                    </Text>
                </View>
            </View>

            <View>
                <Image
                    source={require('../assets/Bart.jpg')}
                    style={{width: '92%', height: 250, borderRadius: 10, alignSelf: 'center', top:100}} 
                />
                <View style={styles.Overlay2}></View>
                <View style={{position: 'absolute', padding: 16, bottom: 28}}>
                    <View style={{flexDirection: 'row'}}>
                        <Feather name='map-pin' size={18} style={{top: 140,left: 10, color: 'white', position: 'relative', bottom: 0}} />
                        <Text style={{top:135, left: 12, fontSize: 22, color: 'white', fontWeight:'normal', bottom: 6}} >St. Bart's</Text>
                    </View>
                    <Text style={{top: 140,textAlign:'justify',marginHorizontal: 15, fontSize: 14, color: 'white', fontWeight:'normal',marginBottom: 10, opacity: 0.9}}>
                    St. Bart’s has long had the reputation of an exclusive luxury playground for the high-end European tourists; the wintertime province of rock stars and mega moguls. 
                    </Text>
                </View>
            </View>

            <View>
                <Image
                    source={require("../assets/white.jpg")}
                    style={{width: '92%', height: 130, borderRadius: 10, alignSelf: 'center', top:135}} 
                />
            </View>
            <View>
                <Image
                    source={require("../assets/white.jpg")}
                    style={{width: '92%', height: 1, borderRadius: 10, alignSelf: 'center', top:100}} 
                />
            </View>
        </ScrollView>   
    </View>
    </ImageBackground>
  );
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
        opacity: 0.3,
    },
    LightOverlay:{
        position: 'absolute',
        top: 65,
        right: 0,
        left: 0,
        height: 40,
        width: '100%',
        backgroundColor: '#f64848',
    },
    Overlay:{
        position: 'absolute',
        top: 60,
        right: 0,
        left: 14,
        height: 250,
        width: '92%',
        backgroundColor: '#000',
        opacity: 0.4,
        borderRadius:10
    },
    Overlay1:{
        position: 'absolute',
        top: 80,
        right: 0,
        left: 14,
        height: 250,
        width: '92%',
        backgroundColor: '#000',
        opacity: 0.4,
        borderRadius:10
    },
    Overlay2:{
        position: 'absolute',
        top: 100,
        right: 0,
        left: 14,
        height: 250,
        width: '92%',
        backgroundColor: '#000',
        opacity: 0.4,
        borderRadius:10
    },
    background: {
        flex: 1,
        width: null,
        height: null,
    },
});

export default New;