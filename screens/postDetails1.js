import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {Feather, AntDesign} from '@expo/vector-icons';

const Post1 = ({navigation}) => {
  
  const goBack = () => {
    navigation.navigate('Home');
}

const goToPost = () => {
  navigation.navigate('Post');
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

const goToPost7 = () => {
  navigation.navigate('Post7');
}

const goToPost8 = () => {
  navigation.navigate('Post8');
}

const goView2 = () => {
  navigation.navigate('View2');
}


const [show, setShow] = React.useState(false);

  return (
    <View style={{backgroundColor: 'white', flex:1}}>
        <ImageBackground
          source={require('../assets/Bangkok.jpg')}
          style={{width: '100%', height: 380, justifyContent: 'flex-end'}}
          imageStyle={{resizeMode: 'cover' ,borderBottomLeftRadius:30, borderBottomRightRadius:30}}
        >
        <View style={styles.LightOverlay}></View>
        <Text style={styles.Tagline}>Discover Bangkok</Text>
        <Text style={styles.Placename}>Explore the scenic beauty of Bangkok</Text>

        <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 40, backgroundColor: '#f64848', padding: 10, borderRadius: 40}}>
          <Feather name='arrow-left' size={22} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity style={{position: 'absolute', right: 20, top: 40, backgroundColor: '#f64848', padding: 10, borderRadius: 40}} onPress={()=>{
                        setShow(!show)
                    }}>
          <AntDesign name={show == false ? 'hearto' : 'heart'} size={22} color='#fff' />
        </TouchableOpacity>

        </ImageBackground>

        <TouchableOpacity style={styles.BookTicketbtn} onPress={goView2}>
          <Text style={styles.bookTicketText}>View More</Text>
        </TouchableOpacity>

        <ScrollView style={{backgroundColor: 'white'}}>
          <Text style={{marginLeft: 30, marginTop: 40, marginBottom: 10, fontSize:20, fontWeight: 'bold'}}>
            About the Place
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Bangkok, Thai Krung Thep, city, capital, and chief port of Thailand. It is the only cosmopolitan city in a country of small towns and villages and is Thailand’s cultural and commercial centre.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Bangkok is located on the delta of the Chao Phraya River, about 25 miles (40 km) from the Gulf of Thailand. It was formerly divided into two municipalities—Krung Thep on the east bank and Thon Buri on the west—connected by several bridges.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          In 1971 the two were united as a city-province with a single municipal government. In 1972 the city and the two surrounding provinces were merged into one province, called Krung Thep Maha Nakhon (Bangkok Metropolis). The metropolis is a bustling, crowded city, with temples, factories, shops, and homes juxtaposed along its roads and canals. It is also a major tourist destination, noted for bountiful cultural attractions and a nightlife that includes a flourishing sex trade.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          The name Bangkok, used commonly by foreigners, is, according to one interpretation, derived from a name that dates to the time before the city was built—the village or district (bang) of wild plums (makok). The Thai call their capital Krung Thep, which is the first part of its mellifluous and lengthy official name meaning “the City of Gods, the Great City, the Residence of the Emerald Buddha, the Impregnable City (of Ayutthaya) of God Indra, the Grand Capital of the World Endowed with Nine Precious Gems, the Happy City Abounding in Enormous Royal Palaces Which Resemble the Heavenly Abode Wherein Dwell the Reincarnated Gods, a City Given by Indra and Built by Vishnukarm.”
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

                        <TouchableOpacity style={{paddingVertical: 20}} onPress={goToPost7}>
                            <Image source={require('../assets/Iceland.jpeg')} style={{borderRadius: 10, marginBottom:10, width: 230, marginRight: 14, height: 210, resizeMode: 'stretch'}}/>
                            <View style={styles.ImageOverlay}></View>
                            <Feather name='map-pin' size={18} color='white' style={styles.imageLocationIcon}/>
                            <Text style={styles.imageText}>Iceland</Text>
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

export default Post1;