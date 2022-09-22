import React, {useEffect} from "react";
import { View, Text, Image, ImageBackground, } from "react-native";


const Splashscreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Loginscreen");
    }, 3000);
  }, []);
  
 return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent:"center",
        alignItems:"center"
      
      
        }}
    >
     <Image
        source={require("../assets/Images/logo.png")}
        style={{ height: 400, 
                 width: 300,
                 marginTop:-70,
              
                 }}
      />
      <Text style={{ fontSize: 50, 
                     fontStyle:"italic", 
                     textAlign: "center", 
                     color:"white",
                     fontWeight: '500',
                     fontFamily:''
                     
                    
                     
                     
                      }}>
     
      </Text>

      <View>

      <Image
        source={require("../assets/Images/fire.png")}
        style={{ height: 300, 
                 width: 400,
                justifyContent:"flex-end",
                marginTop:-70


              }}
      />

   
      </View>
      <Image
        source={require("../assets/Images/bar.png")}
        style={{ height: 100, 
                 width: 400,
                 marginBottom:-120,
                 

        }}
        />

      <View>

      </View>

    
    </View>



    
  );
};
export default Splashscreen;