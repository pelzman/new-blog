import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
primaryInput:{
    width: '80%',
    margin:12,
    borderBottomWidth: 0.8,
    borderBottomColor:'blue'
},

primaryContainer: {
backgroundColor: 'white',
flex:1,
},
headingText:{
fontSize: 36,
fontFamily: 'Poppins-Bold',
color:'rgba(0,0,0,0.7)',
},
primaryText: {
 fontSize: 22,
 fontFamily: 'Poppins-Bold',
},

secondaryText:{
    fontSize:18,
    fontFamily:'Poppins-Regular',
    letterSpacing: 0.1,
},
primaryTouchableBtn: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 7,
    shadowColor:'gray',
    textShadowOffset: {
        width:1,
        height:2,
    },
    shadowOpacity:0.5,
    elevation:5,
    backgroundColor:'purple',
},
btnText: {
    fontFamily: 'Poppins-semiBold',
    fontSize:18,
    color:'white',
    textAlign:'center',    
},
largeBtnText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
}

})