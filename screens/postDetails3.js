import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {Feather, AntDesign} from '@expo/vector-icons';

const Post3 = ({navigation}) => {

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

const goView4 = () => {
  navigation.navigate('View4');
}

const [show, setShow] = React.useState(false);

  return (
    <View style={{backgroundColor: 'white', flex:1}}>
        <ImageBackground
          source={require('../assets/Rome.jpg')}
          style={{width: '100%', height: 380, justifyContent: 'flex-end'}}
          imageStyle={{resizeMode: 'cover' ,borderBottomLeftRadius:30, borderBottomRightRadius:30}}
        >
          <View style={styles.LightOverlay}></View>
        <Text style={styles.Tagline}>Discover Rome</Text>
        <Text style={styles.Placename}>Explore the scenic beauty of Rome</Text>

        <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 40, backgroundColor: '#f64848', padding: 10, borderRadius: 40}}>
          <Feather name='arrow-left' size={22} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity style={{position: 'absolute', right: 20, top: 40, backgroundColor: '#f64848', padding: 10, borderRadius: 40}} onPress={()=>{
                        setShow(!show)
                    }}>
          <AntDesign name={show == false ? 'hearto' : 'heart'} size={22} color='#fff' />
        </TouchableOpacity>

        </ImageBackground>

        <TouchableOpacity style={styles.BookTicketbtn} onPress={goView4}>
          <Text style={styles.bookTicketText}>View More</Text>
        </TouchableOpacity>

        <ScrollView style={{backgroundColor: 'white'}}>
          <Text style={{marginLeft: 30, marginTop: 40, marginBottom: 10, fontSize:20, fontWeight: 'bold'}}>
            About the Place
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Rome, Italian Roma, historic city and capital of Roma provincia (province), of Lazio regione (region), and of the country of Italy. Rome is located in the central portion of the Italian peninsula, on the Tiber River about 15 miles (24 km) inland from the Tyrrhenian Sea.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Once the capital of an ancient republic and empire whose armies and polity defined the Western world in antiquity and left seemingly indelible imprints thereafter, the spiritual and physical seat of the Roman Catholic Church, and the site of major pinnacles of artistic and intellectual achievement, Rome is the Eternal City, remaining today a political capital, a religious centre, and a memorial to the creative imagination of the past.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          For well over a millennium, Rome controlled the destiny of all civilization known to Europe, but then it fell into dissolution and disrepair. Physically mutilated, economically paralyzed, politically senile, and militarily impotent by the late Middle Ages, Rome nevertheless remained a world power—as an idea.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          The force of Rome the lawgiver, teacher, and builder continued to radiate throughout Europe. Although the situation of the popes from the 6th to the 15th century was often precarious, Rome knew glory as the fountainhead of Christianity and eventually won back its power and wealth and reestablished itself as a place of beauty, a source of learning, and a capital of the arts.
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

export default Post3;