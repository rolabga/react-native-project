import { StyleSheet, Text, View } from 'react-native';

//Navigation

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



import Login from './screens/Login';
import Home from './screens/home';
import Post from './screens/postDetails';
import Post1 from './screens/postDetails1';
import Post2 from './screens/postDetails2';
import Post3 from './screens/postDetails3';
import Post4 from './screens/postDetails4';
import Post5 from './screens/postDetails5';
import Post6 from './screens/postDetails6';
import Post7 from './screens/postDetails7';
import Post8 from './screens/postDetails8';
import View1 from './screens/View1';
import View2 from './screens/View2';
import View3 from './screens/View3';
import View4 from './screens/View4';
import View5 from './screens/View5';
import View6 from './screens/View6';
import View7 from './screens/View7';
import View8 from './screens/View8';
import View9 from './screens/View9';
import Reserve from './screens/Reserve';
import Hot from './screens/Hot';
import New from './screens/New';
import Favorite from './screens/Favorite';
import { Feather, SimpleLineIcons,Foundation } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerRoutes(){
  return(

      <Drawer.Navigator initialRouteName="Home"
        drawerContentOptions={{activeTintColor:"#ff6200"}}
      >
        <Drawer.Screen name='Home' component={Home} 
        options={{
        drawerIcon: () => (
          <Feather size={30} name="menu" color="#000"/>
        ),
      }}/>
        <Drawer.Screen name='Favorites' component={Favorite}
        options={{
          drawerIcon: () => (
            <Feather size={30} name="star" color="#000"/>
          ),
        }}/>
        <Drawer.Screen name='Hot Tours' component={Hot}
        options={{
          drawerIcon: () => (
            <SimpleLineIcons size={30} name="fire" color="#000"/>
          ),
        }}
        />
        <Drawer.Screen name='New Tours' component={New}
        options={{
          drawerIcon: () => (
            <Foundation size={40} name="burst-new" color="#000"/>
          ),
        }}
        />
      </Drawer.Navigator>

  )
}


function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={DrawerRoutes} />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="Post1" component={Post1} />
          <Stack.Screen name="Post2" component={Post2} />
          <Stack.Screen name="Post3" component={Post3} />
          <Stack.Screen name="Post4" component={Post4} />
          <Stack.Screen name="Post5" component={Post5} />
          <Stack.Screen name="Post6" component={Post6} />
          <Stack.Screen name="Post7" component={Post7} />
          <Stack.Screen name="Post8" component={Post8} />
          <Stack.Screen name="View1" component={View1} />
          <Stack.Screen name="View2" component={View2} />
          <Stack.Screen name="View3" component={View3} />
          <Stack.Screen name="View4" component={View4} />
          <Stack.Screen name="View5" component={View5} />
          <Stack.Screen name="View6" component={View6} />
          <Stack.Screen name="View7" component={View7} />
          <Stack.Screen name="View8" component={View8} />
          <Stack.Screen name="View9" component={View9} />
          <Stack.Screen name="Reserve" component={Reserve} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
