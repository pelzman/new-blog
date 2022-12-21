import React,{useState, useEffect} from 'react'
import { View, Text, TouchableHighlight, StyleSheet, Image , ScrollView,ActivityIndicator, Dimensions  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import {Card} from 'react-native-paper'
import FooterNav from '../components/footer';



export default function Home({route, navigation}) {


  const [data, setData] = useState([])

   
 
 const getArticles = async ()=>{
var config = {
  method: 'get',
  url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a4d38f39c52406787e625d1f0d12979',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  setData(response.data.articles)
 
})
.catch(function (error) {
  console.log(error);
  
});
 } 
 
 useEffect(()=>{
  getArticles();
 }, [])
 

  return (
  <View >
    < View style={{height:Dimensions.get('window').height - 110}}>
<ScrollView>
    
    <View style={{flex:1, flexDirection:'row', alignItems:'center',
     justifyContent:'center'}}> 
      <Text style={{padding:10}} > <Icon name="globe" size={50} color="#900"  /> </Text>
     
  <Text style={{
    fontSize:30, 
    color:"green", 
    fontWeight:'400', 
    textAlign:'center',
    marginBottom:10}}>Daily International  News</Text> 
    </View>  
     <View>  
      {data.map((article, index)=>{
        return(
         <Card style={styles.cardContainer} key={index}>
<View>

 <Text style={styles.title}>{article.title}</Text>
 
 <Image 
  source={{uri:article.urlToImage}} 
  style={styles.imgContainer}/> 
<Text style={styles.author}>Author: {article.author}</Text>
<Text style={styles.desc}>{article.content}</Text>
  <Text style={styles.publish}>Published At: {article.publishedAt}</Text>
 </View>
               
  
      </Card>   
 
        )
      })}
    </View> 
    </ScrollView>
    </View>
    
      <FooterNav route={route} navigation={navigation} active="Home"
      style={{flex:1, alignItems:'center', justifyContent:'center'}}/>
    
    
</View>
  )
}


const styles = StyleSheet.create({
cardContainer:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
   backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
},
title:{
  fontSize:24,
  fontWeight:'bold',
color:'black',
marginBottom:5,


},

imgContainer:{
  width: '100%',
  height: 150,
 
},
publish:{
fontSize:15, 
color:'black',
textAlign:"justify"

},
desc:{
  fontSize:18,
  color:'black',
  marginBottom:15,
  
},
author:{
 fontSize:20,
padding:5
},

footer:{
flex:1,
alignItems:'center'
}
});