import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { Feather, Fontisto } from '@expo/vector-icons';

const Home = ({navigation}) => {
    let input = '';

    const image = { uri: "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"};
    
    const recentImage = { uri: "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"};

    const images =[
    {id:'1', key:'1', title:'Paris', uri: require('../assets/Paris.jpg')},
    {id:'2', key:'2', title:'Bangkok', uri: require('../assets/Bangkok.jpg')},
    {id:'3', key:'3', title:'Las Vegas', uri: require('../assets/LasVegas.jpg')},
    {id:'4', key:'4', title:'Rome', uri: require('../assets/Rome.jpg')},
    {id:'5', key:'5', title:'England', uri: require('../assets/England.jpeg')},
    {id:'6', key:'6', title:'Greece', uri: require('../assets/Greece.jpeg')},
    {id:'7', key:'7', title:'China', uri: require('../assets/China.jpeg')},
    {id:'8', key:'8', title:'Iceland', uri: require('../assets/Iceland.jpeg')},
    {id:'9', key:'9', title:'Egypt', uri: require('../assets/Egypt.jpeg')},
];

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

const goToPost8 = () => {
    navigation.navigate('Post8');
}

const saveInput = userInput => {
    input = userInput;
    input = input.toLowerCase();
}

const search = () => {
    if(input == "paris") goToPost();
    else if(input == "bangkok") goToPost1();
    else if(input == "las vegas") goToPost2();
    else if(input == "rome") goToPost3();
    else if(input == "china") goToPost4();
    else if(input == "england") goToPost5();
    else if(input == "greece") goToPost6();
    else if(input == "iceland") goToPost7();
    else if(input == "egypt") goToPost8();
    else alert("Location not found. Try to enter the exact name of an area.");
}


  return (
    <View style={{flexGrow: 1, height: '100%'}}>
      <View >
          <ImageBackground
          source={image}
          style={{width: '100%', height: 270, top:35}}
          imageStyle={{borderBottomRightRadius:70}}
          >
              
              <View style={styles.DarkOverlay}></View>
              <View style={styles.searchContainer}>
                  <Text style={styles.UserGreet}>Hi Angel,</Text>
                  <Text style={styles.userText}>Where would you like to go today?</Text>
              </View>
              <View>
                  <TextInput
                  style={styles.searchBox}
                  placeholder='Search Destination'
                  placeholderTextColor='#666'
                  onChangeText = {userInput => saveInput(userInput)}
                  onSubmitEditing = {search}
                  ></TextInput>
                  <Feather name='search' size={22} color='#666' style={
                      {position: 'absolute', top: 20, right: 60, opacity: 0.6}} />
              </View>
              <View style={{flex:1}}>
                  
              </View>
          </ImageBackground>
        </View>

        <ScrollView style={{top:35}}>
            <View style={{padding: 20, flex: 1}}>
                <Text style={{fontSize: 22, fontWeight: 'bold', bottom: -5}}>
                    Top Trending
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

                        <TouchableOpacity style={{paddingVertical: 20}} onPress={goToPost8}>
                            <Image source={require('../assets/Egypt.jpeg')} style={{borderRadius: 10, marginBottom:10, width: 230, marginRight: 14, height: 210, resizeMode: 'stretch'}}/>
                            <View style={styles.ImageOverlay}></View>
                            <Feather name='map-pin' size={18} color='white' style={styles.imageLocationIcon}/>
                            <Text style={styles.imageText}>Egypt</Text>
                        </TouchableOpacity>                   
                    </ScrollView>
                </View>
            </View>
            <View>
                <View style={{padding: 20, flexDirection: 'row', justifyContent:'space-between', top:10}}>
                    <Text style={{fontSize:22, fontWeight: 'bold', bottom: 45}}>Recently Viewed</Text>
                </View>
                <Image
                    source={recentImage}
                    style={{width: '92%', height: 250, borderRadius: 10, alignSelf: 'center', bottom: 40}} 
                />
                <View style={{position: 'absolute', padding: 16, bottom: 28}}>
                    <View style={{flexDirection: 'row'}}>
                        <Feather name='map-pin' size={18} style={{left: 18, color: 'white', position: 'relative', bottom: 0}} />
                        <Text style={{left: 22, fontSize: 22, color: 'white', fontWeight:'normal', bottom: 6}} > Venice</Text>
                    </View>
                    <Text style={{textAlign:'justify', marginLeft: 20, marginRight: 20, fontSize: 14, color: 'white', fontWeight:'normal',marginBottom: 10, opacity: 0.9}}>
                    Venice, known also as the “City of Canals,” “The Floating City,” and “Serenissima,” is arguably one of Italy's most picturesque cities. 
                    </Text>
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
  DarkOverlay:{
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      height: 270,
      backgroundColor: '#000',
      opacity: 0.2,
      borderBottomRightRadius: 70  
  },
  searchContainer: {
      paddingTop: 100,
      paddingLeft: 16
  },
  UserGreet:{
      fontSize: 41,
      fontWeight: 'bold',
      color: 'white',
      bottom:20
  },
  userText: {
      fontSize: 20,
      fontWeight: 'normal',
      color: 'white',
      bottom: 20
  },
  searchBox: {
      marginTop: 16,
      backgroundColor: '#fff',
      paddingLeft: 24,
      padding: 12,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      width: '90%',
      bottom:10
  },
  ImageOverlay:{
      width: 230,
      height:210,
      marginRight: 8,
      borderRadius: 10,
      position: 'absolute',
      backgroundColor: '#000',
      opacity: 0.2, 
      top: 20
  },
  imageLocationIcon:{
      position: 'absolute',
      marginTop: 4,
      left: 10,
      bottom: 44
  },
  imageText:{
      position: 'absolute',
      color: 'white',
      marginTop: 4,
      left: 35,
      bottom: 40,
      fontSize: 20
  }
});

export default Home;