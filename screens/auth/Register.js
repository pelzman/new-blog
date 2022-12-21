import React,{useState, useEffect} from 'react'
import { View, Text,StyleSheet, Button, TouchableOpacity, TextInput, Image, Alert, ScrollView, ImageBackground } from 'react-native'
 import { Formik } from 'formik'
import axios from 'axios'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'


import { globalStyles } from '../../utils/globalStyles';

export default function Register({route, navigation}) {
  
    // const[email, setEmail] = useState('')
    // const[password, setPassword] = useState('')
    // const[name, setName] = useState('')
    const[displayPicture, setDisplayPicture] = useState('')
    function onPickPicture(){
      launchImageLibrary({
        mediaType:'photo'
      },(data)=>setDisplayPicture(data.assets[0].uri))
    }

    
  return (
    
      <ImageBackground
      source={{uri:'https://images.pexels.com/photos/14664633/pexels-photo-14664633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
      style={{flex:1, justifyContent:'center', resizeMode:'cover' }}
      >
    <ScrollView>
         <Formik 
     initialValues={{firstName: '', lastName: '', email: '', phone: '', password: '' }}
     onSubmit={(values )=> {
  console.log(values)


var data = JSON.stringify({
  username: values.email,
  password: values.password,
  email: values.email,
  phone: values.phone,
  firstName: values.firstName,
  lastName: values.lastName,
  theme: "dark",
  roleId: 1,
  profilePicture: "https://pod51200.outlook.com/owa/service.svc/s/GetPersonaPhoto?email=olugbenga.aladeusi@ng.kpmg.com&UA=0&size=HR96x96"
});

var config = {
  method: 'post',
  url: 'https://blogapi.usemisa.com/user/registerUser',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
   navigation.navigate('Login')
  const role= response.data.data.role;
  Alert.alert("Success", "You've successfully registered.")
 
})
.catch(function (error) {
  console.log(error);
});
     }
    
    }
    
    >

  {({ handleChange, handleBlur, handleSubmit, values }) =>(
<View style={styles.container}>
       <Image 
      source={{uri: !displayPicture ? null: displayPicture}} 
      style={styles.displayPicture}
       />
       <View style={styles.touchableContainer}>
       <TouchableOpacity onPress={onPickPicture}>
        <Text style={{color:'#fff', textAlign:'center'}}>Upload Picture</Text>
       </TouchableOpacity>
       
       </View>
       <TextInput      
       placeholder="First Name"
        placeholderTextColor="white"
       style={{...globalStyles.primaryInput, color:'white'}}
         onChangeText={handleChange('firstName')}
           onBlur={handleBlur('firstName')}
           value={values.firstName}
       />
           <TextInput      
       placeholder="Last Name"
        placeholderTextColor="white"
       style={globalStyles.primaryInput}
          onChangeText={handleChange('lastName')}
           onBlur={handleBlur('lastName')}
           value={values.lastName}
       />
         <TextInput       
       placeholder="Email"
        placeholderTextColor="white"
       style={globalStyles.primaryInput}
            onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
       />
          <TextInput       
       placeholder="Enter Phone Number"
        placeholderTextColor="white"
       style={globalStyles.primaryInput}
            onChangeText={handleChange('phone')}
            keyboardType='numeric'
           onBlur={handleBlur('phone')}
           value={values.phone}
       />
         <TextInput       
       placeholder="Enter Password"
       placeholderTextColor="white"
       
       style={globalStyles.primaryInput}
          onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
       />
             {/* <TextInput       
       placeholder="Confirm Password"
       style={globalStyles.primaryInput}
         onChange={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
       /> */}
       
      <TouchableOpacity
   
      onPress={handleSubmit}
    //  onPress={(()=>navigation.navigate('Login'))}  
          
      > 
      <Text style={{backgroundColor:'green',padding:10, color:'#fff'}}>Register</Text>
     </TouchableOpacity>    
    </View>

  )}
    
    </Formik>
    </ScrollView>
    </ImageBackground>
    
 
  )
}
const styles = StyleSheet.create({
 container: {
  justifyContent: 'center',
  alignItems:'center',
  flex: 1,
  
 },
 touchableContainer:{ 
  
  marginTop:10
  
  
 },
 displayPicture:{
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor:'#fff',
  marginBottom:5,
 marginTop:10

 }
})