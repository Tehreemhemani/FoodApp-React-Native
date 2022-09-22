import react from "react";
import { View, Text,Image,ScrollView } from "react-native";
const Scrollscreen = () =>{

    return(
        <ScrollView style={{
            flex:1,
            backgroundColor:'white',

        }}>
           
<View style={{height:300,width:'100%',backgroundColor:'red'}}> 
</View>

<View style={{height:300,width:'100%',backgroundColor:'green'}}> 
</View>

<View style={{height:300,width:'100%',backgroundColor:'blue'}}> 
</View>

<View style={{height:300,width:'100%',backgroundColor:'purple'}}>
     </View>






        </ScrollView>








    );
};

export default Scrollscreen;
