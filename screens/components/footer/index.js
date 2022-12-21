import React,{useContext, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Alert,
    ScrollView,
    Dimensions,
    Button,
    Text,
    Pressable,
    SafeAreaView
} from 'react-native';
//logical components import
//view components import




//import contexts


//styles

import DefaultStyle from "../../styles/defaultStyle";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const FooterNav = ({route, navigation, active }) => {

            const [selected, setSelected] = React.useState(1);

           //global state
          
    
           //styles
           const styles = StyleSheet.create(DefaultStyle);


    return (

        
            <View style={{...styles.magentaBgColor, flexDirection:"row", width: Dimensions.get('window').width, alignItems:'center',
            
            justifyContent:'space-around',
            backgroundColor:'green',
            
           
            }}>
                <Pressable  active={(active==='Home'?true:false)} onPress={()=>{navigation.navigate("Home")}}>
                    <View style={{alignItems:'center', justifyContent:'center',padding:10 }}>
                    <FontAwesome5 name="home"  style={{...styles.whiteColor }}/>
                    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <Text style={{...styles.montserratFont, ...styles.fontSize5, ...styles.whiteColor }}>Home</Text>
                    </ScrollView>
                    </View>
                </Pressable>

                <Pressable active={(active==='Search'?true:false)} onPress={()=>navigation.navigate("Search")}>
                <View style={{alignItems:'center', justifyContent:'center' }}>
                <FontAwesome5 name="search"  style={{...styles.whiteColor }}/>
                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <Text style={{...styles.montserratFont, ...styles.fontSize5, ...styles.whiteColor }} >Search</Text>
                    </ScrollView>
                    </View>
                </Pressable>

                <Pressable active={(active==='Categories'?true:false)} onPress={()=>{navigation.navigate("Categories")}}>
                    <View style={{alignItems:'center', justifyContent:'center' }}>
                   <FontAwesome5 name="globe"  style={{...styles.whiteColor }}/>
                    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <Text style={{...styles.montserratFont, ...styles.fontSize5, ...styles.whiteColor }} >Categories</Text>
                    </ScrollView>
                    </View>
                </Pressable>
                
                <Pressable active={(active==='Profile'?true:false)}  onPress={()=>navigation.navigate("Profile")}>
                   <View style={{alignItems:'center', justifyContent:'center' }}>
                    <FontAwesome5 name="user"  style={{...styles.whiteColor }}/>
                    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <Text style={{...styles.montserratFont, ...styles.fontSize5, ...styles.whiteColor }} >Profile</Text>
                    </ScrollView>
                    </View>
              </Pressable>
                
      
            </View>
       
            
    );
};


export default FooterNav;