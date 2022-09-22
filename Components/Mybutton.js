import React from "react";
import {View ,Text,TouchableOpacity} from "react-native";


const Mybutton =(props)=> {

return(
    <TouchableOpacity
    onPress={props.onpress}
    style={{height:50,
         width:'90%',
         backgroundColor:"red",
         borderRadius:20,
         borderWidth:4,
         marginTop:"15%",
         justifyContent:"center",
         alignItems:"center",
         borderColor:'red',
         marginHorizontal:15,}}>

        <Text style={{fontSize:14,fontWeight:"bold",color:"white"}}> {props.btn} </Text>
    </TouchableOpacity>
);
};

export default Mybutton;