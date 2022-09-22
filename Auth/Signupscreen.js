import React, { Component } from "react";
import { View, Text, Image, TextInput, Check } from "react-native";
import Myinput from "../Components/Myinput";
import Mybutton from "../Components/Mybutton";

const Signupscreen = (props) => {


  return(

    <View style={{flex:1, backgroundColor:"black", }}>




<View style={{   height: "100%", 
                 width: "95%",
                 paddingHorizontal:10,
                 marginTop:"5%",
                 backgroundColour:"white",
                 
                 
                 
                 }}>

    {/* <Text style={{color:"white",fontWeight:'500', fontSize:20}}>Signup for free account</Text> */}

    <Myinput
    placeholder="Username"
     demo="Email Address" 
     onChangeText={(text)=>{
      setEmail(text);

     }}
      />
   
   <Myinput 
   secureTextEntry
   placeholder= "Password"
   demo="Password"
   onChangeText={(text)=>{
    setPassword(text);
   }}
   />
    
    <Myinput 
   secureTextEntry
   placeholder= "Phone"
   demo="Password"
   onChangeText={(text)=>{
    setPassword(text);
   }}
   />
    
    <Myinput 
   secureTextEntry
   placeholder= "Date of birth"
   demo="Password"
   onChangeText={(text)=>{
    setPassword(text);
   }}
   />
    
    <Myinput 
   secureTextEntry
   placeholder= "Email"
   demo="Password"
   onChangeText={(text)=>{
    setPassword(text);
   }}
   />

<View>

<Mybutton 
onpress={() =>{

props.navigation.navigate("Homescreen");
}}
btn="Signup"
/>

<Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center", color:"white", marginTop:40
      }}>
        By clicking Signup you agree to the 
        folowing 

      </Text>

      <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center", color:"red"
      }}>
        Terms and conditions

      </Text>
</View>










     </View>   
   
   </View>
    
  
            
);

};


export default Signupscreen;

