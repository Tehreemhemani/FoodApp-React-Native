import React from "react";
import {View,Text,TextInput} from 'react-native';
const Myinput= (props) =>{
    return(
        <View style={{marginTop:10}}>
        <Text> {props.demo}</Text>
        <View style={{height:50, 
                  width:'100%',
                  backgroundColor:'white',
                  borderRadius:20,
                  borderColor:'white',
                  borderWidth:2,
                  paddingHorizontal:10,
                  marginTop:10,
                  
                  }}>
         <TextInput
         secureTextEntry={props.secureTextEntry}
         onChangeText={props.onChangeText}
          placeholder={props.placeholder}
         style={{width:"100%" , height:"100%"}}/>
        </View>
     </View> 
 
 );
};

export default Myinput;