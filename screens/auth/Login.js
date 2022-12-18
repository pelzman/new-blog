import React,{useState, useEffect, useRef} from 'react';
import { View,StyleSheet, Button, TextInput, Pressable, Text } from 'react-native';
 import { Formik } from 'formik';

 import axios from 'axios';
import { globalStyles } from '../../utils/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
const navigate = useNavigate();
  
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
       />
      <Button 
       title='Login'
       onPress={handleSubmit}
       onPress={(()=>navigate('/Home'))}
      
      /> 

      <Text
      onPress={()=>navigation.navigate('Register')}
      style={{fontSize:20, marginTop:10, backgroundColor:'gray', color:'white'}}
      > Sign Up Here</Text>    
      
    
    </View>
      )}
      
    </Formik>
  )
}
const styles = StyleSheet.create({
 container: {
  justifyContent: 'center',
  alignItems:'center',
  backgroundColor:'#fff',
  flex: 1
 },
 touchableContainer:{ 
   flexDirection: 'row',
  justifyContent:'space-between',
  width:'50%'
  
 },
 displayPicture:{
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor:'gray',
  marginBottom:5

 },
 text:{
  color: '#fff'
 }
})