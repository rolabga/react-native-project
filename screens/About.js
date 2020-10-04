import React  from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { Feather,  } from '@expo/vector-icons';



const About = ({navigation}) => {

    
    const recentImage = { uri: "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"};


const goBack = () => {
    navigation.navigate('Home');
}



  return (
    <View style={{flexGrow: 1, height: '100%'}}>
            <View>
                    <Text style={{fontSize:22, fontWeight: 'bold', top:50,left:30}}>Hot Tour</Text>
                <Image
                    source={recentImage}
                    style={{width: '92%', height: 250, borderRadius: 10, alignSelf: 'center', top:60}} 
                />
                <View style={{position: 'absolute', padding: 16, bottom: 28}}>
                    <View style={{flexDirection: 'row'}}>
                        <Feather name='map-pin' size={18} style={{top: 100,left: 8, color: 'white', position: 'relative', bottom: 0}} />
                        <Text style={{top:95, left: 12, fontSize: 22, color: 'white', fontWeight:'normal', bottom: 6}} > Venice</Text>
                    </View>
                    <Text style={{top: 100,textAlign:'justify',margin: 5, fontSize: 14, color: 'white', fontWeight:'normal',marginBottom: 10, opacity: 0.9}}>
                    Venice, known also as the “City of Canals,” “The Floating City,” and “Serenissima,” is arguably one of Italy's most picturesque cities. 
                    </Text>
                </View>
            </View>
    </View>
  );
}



export default About;