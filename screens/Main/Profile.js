import React,{useState, useEffect} from 'react'
import { View, Text,StyleSheet, Button, TouchableOpacity,  Image, ScrollView, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik'
import axios from 'axios'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import FooterNav from '../components/footer';

import { globalStyles } from '../../utils/globalStyles';


export default function Profile({route, navigation}) {
  const[logout, setLogout] = useState('')
  const logoutUser = () =>{

    try {
      var data = JSON.stringify({
  "username": "you@gmail.com",
  "password": "Pelzman"
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
  setLogout(response.data.logout)
})
.catch(function (error) {
  console.log(error);
});
    } catch (error) {
     console.log(error) 
    }
  }

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
    <View>
      <View style={{height:Dimensions.get('window').height - 110}} >
   <ScrollView>
<View style={styles.container}>
       <Image 
      source={{uri: !displayPicture ? null: displayPicture}} 
      style={styles.displayPicture}
       />
       <View style={styles.touchableContainer}>
       <TouchableOpacity onPress={onPickPicture}>
        <Text style={styles.text} >Change Picture</Text>
       </TouchableOpacity>       
       </View>
       <View style={styles.coverContainer}>
        <View style={styles.cover}>
        <Text style={styles.Header}>Oluwapelemi Adeyemo</Text>
        <Text style={styles.email}>oluwapelumi@gmail.com</Text>      
        </View>
        
          <View style={styles.phone}>
          <Text><Icon name="mobile" size={30} 
           color="green"/></Text>
           <Text style={styles.call}>
           08132913296
           </Text>
        </View>
         <View style={styles.gender}> 
         <Text><Icon name="male" size={30} color="green" /></Text>       
           <Text style={styles.male}>Male</Text>
        </View>
         <View style={styles.role}>
         <Text><Icon name="envelope" size={30} color="green" /></Text>
           <Text style={styles.reader}>Reader</Text>
        </View>
       </View>     
       
       <View  style={{paddingTop: 120}}  >
       <TouchableOpacity
       style={{width: 500 , height: 50, backgroundColor: 'lightgreen' }}
       onPress={()=>navigation.navigate('Login')}
       >
  <Text style={styles.log}>Logout</Text>
       </TouchableOpacity>
       </View>        
    </View>
   </ScrollView>
    </View>
     <FooterNav route={route} navigation={navigation} active="Profile"/>
   
   </View>
  )
}
const styles = StyleSheet.create({
 container: {  
  alignItems:'center',  
  height: '100%',
  marginRight: 20,
backgroundColor:'#ffffS'

 },
 touchableContainer:{ 
  // margin: 'auto'
  
 },
 displayPicture:{
  width: 60,
  height: 60,
  borderRadius: 30 ,
  backgroundColor:'gray',
  marginBottom:5,
 marginTop:5
 },
 text:{
  fontSize: 20,  
 },

 cover:{
  alignItems:'center',
  
  
 },
 Header:{
  fontSize:30,
  fontWeight: '800',
  

 },
 email:{
   fontSize:20,
   fontWeight: '500',
  paddingBottom: 65
  
 },

 phone:{
  alignSelf:"flex-start",
  marginLeft: 40,
  borderBottomWidth:0.3,
  width: 300,
  borderBottomColor:'gray',
  paddingBottom: 5, 
  flexDirection:'row',
 justifyContent:'space-between'
 
 },
 call:{
  fontSize: 18,
  fontWeight: '400',
  color: 'black',
  paddingBottom:5,
   
 marginRight:180
 },
 gender:{
  alignSelf:"flex-start",
  marginLeft: 40,
  borderBottomWidth:0.5,
  width: 300,
  borderBottomColor:'gray',
  paddingTop: 45,
  flexDirection:'row',
 justifyContent:'space-between'
  
 },
  male:{
  fontSize: 18,
  fontWeight: '400',
  color: 'black',
  paddingBottom:5,
 marginRight:235
 },
 role:{
  alignSelf:"flex-start",
  marginLeft: 40,
  borderBottomWidth:0.5,
  width: 300,
  borderBottomColor:'gray',
  paddingTop: 50,  
   flexDirection:'row',
 justifyContent:'space-between'
 },
  reader:{
  fontSize: 18,
  fontWeight: '400',
  color: 'black',
  paddingBottom: 5,
  marginRight:215
 },

log:{
  paddingVertical: 10, 
  textAlign:'center', 
  fontSize:22, 
  color:'#fff'
}
}
)