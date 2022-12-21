import React, {useState, useEffect} from 'react'
import { ActivityIndicator, Touchable } from 'react-native';
import { NavigationContainer, StackActions, View, Text } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Home from './screens/Main/Home';
import Profile from './screens/Main/Profile';
import Search from './screens/Main/Search';
import Categories from './screens/Main/Categories';



const App =()=>{

const Stack = createNativeStackNavigator();

return (


   <NavigationContainer>
     
      <Stack.Navigator
        screenOptions={{
          headerShown: true
        }}
        initialRouteName="Login">
        {/* <Stack.Screen name="UpdatePage" component={UpdatePage} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
       
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Categories" component={Categories} />     
     
      </Stack.Navigator>
    </NavigationContainer>

)

}


export default App;
  
  
