
import React from "react";
import {View ,Text,Image} from "react-native"
import Mybutton from "../Components/Mybutton";

const Homescreen = (props) => {

return(
<View style={{flex:1, backgroundColor:"black",paddingLeft:50}}>

        <View
        
        style={{
           
            marginBottom:0,
            paddingLeft:40,
            
        
        }}
         >
  
       </View>
        <Image
          source={require("../assets/Images/burger.gif")}
          style={{ height: 300, 
            width: 300,
            justifyContent:'center',
            alignItems:"center"
            
            }}
        />

        <Text style={{color:"white",fontSize:30,fontWeight:"800" ,textAlign:"center",marginLeft:-50}}> Enjoy our beautiful delicacies</Text>
        <Text style={{color:"white",fontSize:15,fontWeight:"500",textAlign:"center",marginLeft:-60,marginTop:50}}> Relax! Fastfood has got you covered!</Text>
        <Text style={{color:"red",fontSize:25,fontWeight:"500",textAlign:"center",marginLeft:-50,marginTop:50}}> Fill your tummy with delicious recipes!</Text>



        <View style={{marginVertical:50,marginRight:50,}}>

<Mybutton 
 onpress={() =>{

  props.navigation.navigate("Categoryscreen");
}}

  btn="Get Started"
  />



  </View>
        
        </View>
);
};

export default Homescreen;