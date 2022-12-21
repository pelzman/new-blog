import React,{useState, useEffect, useRef, ActivityIndicator } from 'react';
import { View,StyleSheet, Button, TextInput, TouchableOpacity , Text, ImageBackground, ScrollView, Alert } from 'react-native';
 import { Formik } from 'formik';

 import axios from 'axios';
import { globalStyles } from '../../utils/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({navigation}) {

  
//     const[email, setEmail] = useState('')
//     const[password, setPassword] = useState('')
//     const[name, setName] = useState('')
//     const[displayPicture, setDisplayPicture] = useState('')
// function onLogin(){
 
// }f

  return (   
    <Formik
    initialValues={{ email: '', password: '' }}
     onSubmit={(values) =>{
     var data = JSON.stringify({
  username: values.email,
  password: values.password
});

var config = {
  method: 'post',
  url: 'https://blogapi.usemisa.com/user/login',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {

  console.log(JSON.stringify(response.data));

  
  const value = response.data.data.access_token

  AsyncStorage.setItem("access_token", JSON.stringify(value));
   navigation.navigate('Home')

})
.catch(function (error) {
  console.log(error);
 
});
     }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) =>(

  <View style={styles.container}>
        <TextInput      
       placeholder="Enter Your Email"
       style={globalStyles.primaryInput}
         onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
       />
         <TextInput      
       placeholder="Enter Your Password"
       style={globalStyles.primaryInput}
         onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
           secureTextEntry = {true}
       />
      <TouchableOpacity
      
       onPress={handleSubmit}       
      //  onPress={(()=>navigation.navigate( 'Home'))}      
      > 
       <Text style={{backgroundColor:'green',paddingHorizontal:40, paddingVertical:10, color:'#fff'}}>Login</Text>
      </TouchableOpacity>
       <TouchableOpacity   onPress={()=>navigation.navigate('Register')}>
      <Text style={{fontSize:20, marginTop:10, backgroundColor:'gray', color:'white'}}
      > Sign Up Here</Text>    
      </TouchableOpacity>
    
    </View>
      )}
      
      
    </Formik>
   
  
  )
}
const styles = StyleSheet.create({
 container: {
  justifyContent: 'center',
  alignItems:'center',  
  flex:1,
  
  
 },

 text:{
  color: '#fff'
 }
})