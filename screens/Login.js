import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';
import { TextInput} from 'react-native-gesture-handler';
import { Ionicons, FontAwesome, Feather} from '@expo/vector-icons';



const{width: WIDTH} = Dimensions.get('window')

const Login = ({navigation}) => {
    
    const goBack = () => {
        navigation.navigate('Home');
      }
    
    const [show, setShow] = React.useState(false); 
    const [visible, setVisible] = React.useState(true);  
    
        return(
            
            <ImageBackground source={require('../assets/trvl8.jpg')} style={styles.background}>
                <View style={styles.DarkOverlay}></View>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo1.png')} style={styles.logo}/>
                    <Text style={styles.title}>TRVL</Text>
                    <Text style={styles.subtitle}>Discover your Next Holiday Destination</Text>
                </View>

                <View style={styles.inputContainer}>
                <Ionicons name='md-person' size={28} color={'white'} style={styles.inputIcon} />
                    <TextInput 
                        style={styles.input}
                        placeholder='Username'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <FontAwesome name='lock' size={28} color={'white'} style={styles.inputIcon} />
                    <TextInput 
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={visible}
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity style={styles.btnEye} onPress={()=>{
                        setVisible(!visible)
                        setShow(!show)
                    }}>
                    <Feather name={show == false ? 'eye' : 'eye-off'} size={28} color={'white'}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnLogin} onPress={goBack} >
                        <Text style={styles.text}>Log In to Explore Now</Text>
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
        height: null,
        width: null,
        backgroundColor: '#000',
        opacity: 0.5,
        borderBottomRightRadius: 70  
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
        width: 180,
        height: 100,
        resizeMode: 'stretch'
    },
    title: {
        color: 'white',
        fontSize: 80,
        fontWeight: '500',
        bottom: 28,
        left: 9        
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        bottom: 28,
        marginBottom: 60        
    },
    inputContainer:{
        marginTop: 10,
    },
    input: {
        width: WIDTH -55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'white',
        marginHorizontal: 25 
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left:37
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 37
    },
    btnLogin: {
        width: WIDTH -55,
        height: 45,
        borderRadius: 10,
        backgroundColor: '#f64848',
        justifyContent: 'center',
        marginTop: 20
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default Login;