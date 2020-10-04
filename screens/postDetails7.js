import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {Feather, AntDesign} from '@expo/vector-icons';

const Post7 = ({navigation}) => {

  const goBack = () => {
    navigation.navigate('Home');
}

const goToPost = () => {
  navigation.navigate('Post');
}

const goToPost1 = () => {
  navigation.navigate('Post1');
}

const goToPost2 = () => {
  navigation.navigate('Post2');
}

const goToPost3 = () => {
  navigation.navigate('Post3');
}

const goToPost4 = () => {
  navigation.navigate('Post4');
}

const goToPost5 = () => {
  navigation.navigate('Post5');
}

const goToPost6 = () => {
  navigation.navigate('Post6');
}

const goToPost8 = () => {
  navigation.navigate('Post8');
}

const goView8 = () => {
  navigation.navigate('View8');
}

const [show, setShow] = React.useState(false);

  return (
    <View style={{backgroundColor: 'white', flex:1}}>
        <ImageBackground
          source={require('../assets/Iceland.jpeg')}
          style={{width: '100%', height: 380, justifyContent: 'flex-end'}}
          imageStyle={{resizeMode: 'cover' ,borderBottomLeftRadius:30, borderBottomRightRadius:30}}
        >
          <View style={styles.LightOverlay}></View>
        <Text style={styles.Tagline}>Discover Iceland</Text>
        <Text style={styles.Placename}>Explore the scenic beauty of Iceland</Text>

        <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 40, backgroundColor: '#f64848', padding: 10, borderRadius: 40}}>
          <Feather name='arrow-left' size={22} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity style={{position: 'absolute', right: 20, top: 40, backgroundColor: '#f64848', padding: 10, borderRadius: 40}} onPress={()=>{
                        setShow(!show)
                    }}>
          <AntDesign name={show == false ? 'hearto' : 'heart'} size={22} color='#fff' />
        </TouchableOpacity>

        </ImageBackground>

        <TouchableOpacity style={styles.BookTicketbtn} onPress={goView8}>
          <Text style={styles.bookTicketText}>View More</Text>
        </TouchableOpacity>

        <ScrollView style={{backgroundColor: 'white'}}>
          <Text style={{marginLeft: 30, marginTop: 40, marginBottom: 10, fontSize:20, fontWeight: 'bold'}}>
            About the Place
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Iceland, island country located in the North Atlantic Ocean. Lying on the constantly active geologic border between North America and Europe, Iceland is a land of vivid contrasts of climate, geography, and culture. Sparkling glaciers, such as Vatna Glacier (Vatnajökull), Europe’s largest, lie across its ruggedly beautiful mountain ranges; abundant hot geysers provide heat for many of the country’s homes and buildings and allow for hothouse agriculture year-round; and the offshore Gulf Stream provides a surprisingly mild climate for what is one of the northernmost inhabited places on the planet.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Iceland was founded more than 1,000 years ago during the Viking age of exploration and settled by a mixed Norse and Celtic population. The early settlement, made up primarily of Norwegian seafarers and adventurers, fostered further excursions to Greenland and the coast of North America (which the Norse called Vinland).
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Despite its physical isolation some 500 miles (800 km) from Scotland—its nearest European neighbour—Iceland has remained throughout its history very much a part of European civilization. The Icelandic sagas, most of which recount heroic episodes that took place at the time the island was settled, are regarded as among the finest literary achievements of the Middle Ages, reflecting a European outlook while commemorating the history and customs of a people far removed from continental centres of commerce and culture.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          The capital, Reykjavík (“Bay of Smokes”), is the site of the island’s first farmstead and is a thriving city, handsome in aspect and cosmopolitan in outlook. Other major population centres are Akureyri, on the north-central coast; Hafnarfjördhur, on the southwestern coast; and Selfoss, in the southern lowlands.
          </Text>

          <View style={{marginLeft: 28, marginRight: 28}}>
          <Text style={{marginTop: 15, marginBottom: -10, fontSize:20, fontWeight: 'bold'}}>
              Suggested Places
            </Text>
            <View>
                    <ScrollView horizontal={true}>
                    <TouchableOpacity style={{paddingVertical: 20}} onPress={goToPost}>
                            <Image source={require('../assets/Paris.jpg')} style={{borderRadius: 10, marginBottom:10, width: 230, marginRight: 14, height: 210, resizeMode: 'stretch'}}/>
                            <View style={styles.ImageOverlay}></View>
                            <Feather name='map-pin' size={18} color='white' style={styles.imageLocationIcon}/>
                            <Text style={styles.imageText}>Paris</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{paddingVertical: 20}} onPress={goToPost1}> 
                            <Image source={require('../assets/Bangkok.jpg')} style={{borderRadius: 10, marginBottom:10, width: 230, marginRight: 14, height: 210, resizeMode: 'stretch'}}/>
                            <View style={styles.ImageOverlay}></View>
                            <Feather name='map-pin' size={18} color='white' style={styles.imageLocationIcon}/>
                            <Text style={styles.imageText}>Bangkok</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{paddingVertical: 20}} onPress={goToPost2}>
                            <Image source={require('../assets/LasVegas.jpg')} style={{borderRadius: 10, marginBottom:10, width: 230, marginRight: 14, height: 210, resizeMode: 'stretch'}}/>
                            <View style={styles.ImageOverlay}></View>
                            <Feather name='map-pin' size={18} color='white' style={styles.imageLocationIcon}/>
                            <Text style={styles.imageText}>Las Vegas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{paddingVertical: 20}} onPress={goToPost3}>
                            <Image source={require('../assets/Rome.jpg')} style={{borderRadius: 10, marginBottom:10, width: 230, marginRight: 14, height: 210, resizeMode: 'stretch'}}/>
                            <View style={styles.ImageOverlay}></View>
                            <Feather name='map-pin' size={18} color='white' style={styles.imageLocationIcon}/>
                            <Text style={styles.imageText}>Rome</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{paddingVertical: 20}} onPress={goToPost4}>
                            <Image source={require('../assets/China.jpeg')} style={{borderRadius: 10, marginBottom:10, width: 230, marginRight: 14, height: 210, resizeMode: 'stretch'}}/>
                            <View style={styles.ImageOverlay}></View>
                            <Feather name='map-pin' size={18} color='white' style={styles.imageLocationIcon}/>
                            <Text style={styles.imageText}>China</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{paddingVertical: 20}} onPress={goToPost5}>
                            <Image source={require('../assets/England.jpeg')} style={{borderRadius: 10, marginBottom:10, width: 230, marginRight: 14, height: 210, resizeMode: 'stretch'}}/>
                            <View style={styles.ImageOverlay}></View>
                            <Feather name='map-pin' size={18} color='white' style={styles.imageLocationIcon}/>
                            <Text style={styles.imageText}>England</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{paddingVertical: 20}} onPress={goToPost6}>
                            <Image source={require('../assets/Greece.jpeg')} style={{borderRadius: 10, marginBottom:10, width: 230, marginRight: 14, height: 210, resizeMode: 'stretch'}}/>
                            <View style={styles.ImageOverlay}></View>
                            <Feather name='map-pin' size={18} color='white' style={styles.imageLocationIcon}/>
                            <Text style={styles.imageText}>Greece</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{paddingVertical: 20}} onPress={goToPost8}>
                            <Image source={require('../assets/Egypt.jpeg')} style={{borderRadius: 10, marginBottom:10, width: 230, marginRight: 14, height: 210, resizeMode: 'stretch'}}/>
                            <View style={styles.ImageOverlay}></View>
                            <Feather name='map-pin' size={18} color='white' style={styles.imageLocationIcon}/>
                            <Text style={styles.imageText}>Egypt</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
          </View>
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LightOverlay: {
    position: 'absolute',
    width: '100%',
    height: 380, 
    justifyContent: 'flex-end',
    backgroundColor: '#000',
    opacity: 0.2,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30
  },
  Tagline: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginVertical: 6,
  },
  Placename: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginBottom: 30,
  },
  BookTicketbtn: {
    position: 'absolute',
    right: 12,
    top: 350,
    backgroundColor: '#f64848',
    padding: 16,
    borderRadius: 40,
    elevation: 2
  },
  bookTicketText: {
    color: 'white',
    fontSize: 14, 
  },
  imageText:{
    position: 'absolute',
    color: 'white',
    marginTop: 4,
    left: 30,
    bottom: 40,
    fontSize: 20
  },
  imageLocationIcon:{
    position: 'absolute',
    marginTop: 4,
    left: 10,
    bottom: 44
  },
});

export default Post7;