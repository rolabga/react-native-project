import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import {Feather, AntDesign} from '@expo/vector-icons';

const Post8 = ({navigation}) => {

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

const goToPost7 = () => {
  navigation.navigate('Post7');
}

const goView9 = () => {
  navigation.navigate('View9');
}

const [show, setShow] = React.useState(false);

  return (
    <View style={{backgroundColor: 'white', flex:1}}>
        <ImageBackground
          source={require('../assets/Egypt.jpeg')}
          style={{width: '100%', height: 380, justifyContent: 'flex-end'}}
          imageStyle={{resizeMode: 'cover' ,borderBottomLeftRadius:30, borderBottomRightRadius:30}}
        >
          <View style={styles.LightOverlay}></View>
        <Text style={styles.Tagline}>Discover Egypt</Text>
        <Text style={styles.Placename}>Explore the scenic beauty of Egypt</Text>

        <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 40, backgroundColor: '#f64848', padding: 10, borderRadius: 40}}>
          <Feather name='arrow-left' size={22} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity style={{position: 'absolute', right: 20, top: 40, backgroundColor: '#f64848', padding: 10, borderRadius: 40}} onPress={()=>{
                        setShow(!show)
                    }}>
          <AntDesign name={show == false ? 'hearto' : 'heart'} size={22} color='#fff' />
        </TouchableOpacity>

        </ImageBackground>

        <TouchableOpacity style={styles.BookTicketbtn} onPress={goView9}>
          <Text style={styles.bookTicketText}>View More</Text>
        </TouchableOpacity>

        <ScrollView style={{backgroundColor: 'white'}}>
          <Text style={{marginLeft: 30, marginTop: 40, marginBottom: 10, fontSize:20, fontWeight: 'bold'}}>
            About the Place
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Egypt, country located in the northeastern corner of Africa. Egypt’s heartland, the Nile River valley and delta, was the home of one of the principal civilizations of the ancient Middle East and, like Mesopotamia farther east, was the site of one of the world’s earliest urban and literate societies. Pharaonic Egypt thrived for some 3,000 years through a series of native dynasties that were interspersed with brief periods of foreign rule. After Alexander the Great conquered the region in 323 BC, urban Egypt became an integral part of the Hellenistic world.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Under the Greek Ptolemaic dynasty, an advanced literate society thrived in the city of Alexandria, but what is now Egypt was conquered by the Romans in 30 BC. It remained part of the Roman Republic and Empire and then part of Rome’s successor state, the Byzantine Empire, until its conquest by Arab Muslim armies in AD 639–642.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Until the Muslim conquest, great continuity had typified Egyptian rural life. Despite the incongruent ethnicity of successive ruling groups and the cosmopolitan nature of Egypt’s larger urban centres, the language and culture of the rural, agrarian masses—whose lives were largely measured by the annual rise and fall of the Nile River, with its annual inundation—had changed only marginally throughout the centuries. Following the conquests, both urban and rural culture began to adopt elements of Arab culture, and an Arabic vernacular eventually replaced the Egyptian language as the common means of spoken discourse.
          </Text>
          <Text style={{paddingHorizontal: 30,fontSize: 14, fontWeight: 'normal',opacity: 0.3, textAlign: 'justify', justifyContent: 'flex-start', lineHeight: 26}}>
          Moreover, since that time, Egypt’s history has been part of the broader Islamic world, and though Egyptians continued to be ruled by foreign elite—whether Arab, Kurdish, Circassian, or Turkish—the country’s cultural milieu remained predominantly Arab.
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

                        <TouchableOpacity style={{paddingVertical: 20}} onPress={goToPost7}>
                            <Image source={require('../assets/Iceland.jpeg')} style={{borderRadius: 10, marginBottom:10, width: 230, marginRight: 14, height: 210, resizeMode: 'stretch'}}/>
                            <View style={styles.ImageOverlay}></View>
                            <Feather name='map-pin' size={18} color='white' style={styles.imageLocationIcon}/>
                            <Text style={styles.imageText}>Iceland</Text>
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

export default Post8;