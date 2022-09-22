import React , {useState} from "react";
import {View ,Text,Image,TextInput,TouchableOpacity} from "react-native";
import Mybutton from "../Components/Mybutton";
import Myinput from "../Components/Myinput";
const Loginscreen = (props) => {

  // const Loginhandler=()=>{
  // props.navigation.navigate("Signupscreen");
  // };


  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

//   if(email ===""){
//     alert("please enter your email first1");
//   }else if (password ===""){
//     alert("please enter your password first");
//   } else {
//  };

 return(
    <View style={{flex:1, backgroundColor:"black"}}>
        <View
        style={{
          height: "35%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          }}
       >
        <Image
          source={require("../assets/Images/loginburger.gif")}
          style={{ height: "100%", width: "100%", marginTop:"0%" }}
        />
        
        
        </View>

      <View style={{ height: "100%", 
                     width: "100%",
                     paddingHorizontal:10,
                     marginTop:"10%",
                     backgroundColour:"white",
                     
                     
                     }}>

        <Text style={{color:"white",fontWeight:'500', fontSize:20}}>Login to your account</Text>


       <Myinput
        placeholder="Email"
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

       <Text style={{color:"white",fontWeight:'200', fontSize:15,textAlign:"right"}}>forgot your password?</Text>
      
  
       <View>

        <Mybutton 
        style={{backgroundColor:"blue"}}
        
       
         onpress={() =>{
          

          props.navigation.navigate("Homescreen");
}}


 btn= "Login"

          />


<Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center", color:"white", marginTop:60
      }}>
        Don't have an account?
      </Text>
      
      <TouchableOpacity onPress={() => props.navigation.navigate("Signupscreen")} >
        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 1, textAlign: "center", color:"red",marginLeft:25
      }}>
SignUp        </Text>
        </TouchableOpacity>   


      
</View>
</View>  
        </View>

    
    
    
);
};

export default Loginscreen;



// import React from "react";
// import {View ,Text} from "react-native"

// const Loginscreen = () => {

// return(
//     <View>

//         <Text></Text>
//     </View>
// );
// };

// export default Loginscreen;