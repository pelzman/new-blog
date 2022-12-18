import React, {useState, useEffect} from 'react'
import { ActivityIndicator, Touchable } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './screens/auth/Login'
import Register from './screens/auth/Register'
import Home from './screens/Main/Home';
import Profile from './screens/Main/Profile';
import Search from './screens/Main/Search';
import Categories from './screens/Main/Categories';

const HomeStack = createNativeStackNavigator()

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Search" component={Search} />
      <HomeStack.Screen name="Categories" component={Categories} />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  );
}
const LoginStack = createNativeStackNavigator()
function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Register" component={Register} />
     
    </LoginStack.Navigator>
  );
}


const Tab = createBottomTabNavigator(){
  Home: RoomStack,
  'Create a Space': SpaceScreen,
  Login: LoginStack,
},;
export default function App() {
    // Set an initializing state whilst Firebase connects

  const [loggedIn, setLoggedIn]= useState(false)
  const [loading, setLoading] = useState(false)

async function onAuthStateChanged(user){
if(user){
  setLoggedIn(true)  
}
else{
  setLoggedIn(false)
}
if(loading) setLoading(false)
}


  if(loading){
    return(
    <ActivityIndicator 
    size={32}
    color="gray"
    />
    )
  }
  if (!loggedIn){
    return(
    <NavigationContainer screenOptions={{ headerShown: false }}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Login" component={LoginStackScreen}/>
       
      </Tab.Navigator>
    </NavigationContainer>
    )
  }
  return (
 <NavigationContainer screenOptions={{ headerShown: false }} >

<Tab.Navigator > 
   
<Tab.Screen name="Home"
component= {HomeStackScreen}
   options={{
        labelPosition: "beside-icon",
        activeTintColor: "white",
        style: {backgroundColor: "black"},
      labelStyle: {fontSize: 20},
      tabStyle: {fontSize: 15},
      tabBarIcon: ({ color }) => (<Icon name="home" color="green" size={25} />)
    }}

  
/>

  <Tab.Screen name="Search" component={Search}
 options={{
        labelPosition: "beside-icon",
        activeTintColor: "white",
        style: {
        backgroundColor: "black",
      },
      labelStyle: {fontSize: 20},
      tabStyle: {fontSize: 15},
      tabBarIcon: ({ color }) => (<Icon name="search" color="green" size={25} />)
    }}


  />
  <Tab.Screen name="Categories" component={Categories} 
   options={{
        labelPosition: "beside-icon",
        activeTintColor: "white",
        style: {
        backgroundColor: "black",
      },
      labelStyle: {
        fontSize: 20,
      },
      tabStyle: {
        fontSize: 15,
      },
      tabBarIcon: ({ color }) => (<Icon name="group" color="green" size={25} />)
    }}
  
  />
   <Tab.Screen name="Profile" component={Profile} 
    options={{
        labelPosition: "beside-icon",
        activeTintColor: "white",
        style: {
        backgroundColor: "black"},
      labelStyle: {fontSize: 20},
      tabStyle: {fontSize: 15},
      tabBarIcon: ({ color }) => (<Icon name="user" color="green" size={25} />)
    }}
   
   />   
   </Tab.Navigator>
 </NavigationContainer>
  )
}



  
  
