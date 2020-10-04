import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {Feather, AntDesign} from '@expo/vector-icons';

const Post2 = ({navigation}) => {

  const goBack = () => {
    navigation.navigate('Home');
}

const goToPost = () => {
  navigation.navigate('Post');
}

const goToPost1 = () => {
  navigation.navigate('Post1');
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

const goView3 = () => {
  navigation.navigate('View3');
}

const [show, setShow] = React.useState(false);

  return (
    <View style={{backgroundColor: 'white', flex:1}}>
        <ImageBackground
          source={require('../assets/LasVegas.jpg')}
          style={{width: '100%', height: 380, justifyContent: 'flex-end'}}
          imageStyle={{resizeMode: 'cover' ,borderBottomLeftRadius:30, borderBottomRightRadius:30}}
        >
         <View style={styles.LightOverlay}></View> 
        <Text style={styles.Tagline}>Discover Las Vegas</Text>
        <Text style={styles.Placename}>Explore the scenic beauty of Las Vegas</Text>

        <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 40, backgroundColor: '#f64848', padding: 10, borderRadius: 40}}>
          <Feather name='arrow-left' size={22} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity style={{position: 'absolute', right: 20, top: 40, backgroundColor: '#f64848', padding: 10, borderRadius: 40}} onPress={()=>{
                        setShow(!show)
                    }}>
          <AntDesign name={show == false ? 'hearto' : 'heart'} size={22} color='#fff' />
        </TouchableOpacity>

        </ImageBackground>

        <TouchableOpacity style={styles.BookTicketbtn} onPress={goView3}>
          <Text style={styles.bookTicketText}>View More</Text>
        </TouchableOpacity>

        <ScrollView style={{backgroundColor: 'white'}}>
          <Text style={{marginLeft: 30, marginTop: 40, marginBottom: 10, fontSize:20, fontWeight: 'bold'}}>
            About the Place
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Las Vegas, city, seat (1909) of Clark county, southeastern Nevada, U.S. The only major city in the American West to have been founded in the 20th century, Las Vegas grew from a tiny, desert-bound railroad service centre at the outset of the 20th century to the country’s fastest-growing metropolis at century’s end.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          This transformation—made possible by a combination of shrewd entrepreneurship, access to water, an extensive transportation network, and permissive state laws—has created the city now often known simply as “Vegas,” a place of vast casinos, elaborate hotels, and spectacular entertainment venues that attracts masses of visitors from throughout the world.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Las Vegas is a place of million-lightbulb signs and fantastic architecture, of readily visible wealth and carefully hidden poverty. It is a place of superlatives, both positive and negative. Within the city stand the largest glass pyramid in the world; one of the largest hotels in the country, with more than 5,000 rooms; and one of the most expensive hotels ever constructed, the Bellagio.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          The area along Las Vegas Boulevard and its adjoining near-downtown streets—the famous “Strip”—is the “City Without Clocks,” whose multibillion-dollar economy is devoted to servicing a wide array of impulses and addictions of many kinds. It is this Las Vegas, the flashy playground unofficially known as “Sin City,” that the American novelist and essayist Joan Didion once termed.
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

export default Post2;