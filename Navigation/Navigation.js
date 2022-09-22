import react,{useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Loginscreen from "../Auth/Loginscreen";
import Splashscreen from "../Home/Splashscreen";
import Signupscreen from "../Auth/Signupscreen";
import Homescreen from "../Home/Homescreen";
import Categoryscreen from "../Home/Categoryscreen";
import AllMealsScreen from  "../Home/AllMealsScreen"
import MealsDetailScreen from "../Home/MealsDetailScreen"


const Stack = createStackNavigator();
const Navigation = () =>{

    return( 
    
    <NavigationContainer>

        <Stack.Navigator initialRouteName="Splashscreen">

        <Stack.Screen 
        options={{headerShown:false}}
        name="Splashscreen" 
        component = {Splashscreen} 
         />

        <Stack.Screen options={{headerShown:false}} 
        name= "Loginscreen" 
        component = {Loginscreen} 
        />

        <Stack.Screen options={{headerShown:true, title: 'SignUp for free account'}}
        name= "Signupscreen" 
        component = {Signupscreen}
         />

        <Stack.Screen options={{headerShown:false}} 
        name= "Homescreen" 
        component = {Homescreen} 
        />

        <Stack.Screen options={{headerShown:false}} 
        name= "Categoryscreen" 
        component = {Categoryscreen} 
        />

<Stack.Screen options={{headerShown:true}} 
        name= "AllMealsScreen" 
        component = {AllMealsScreen} 
        />

<Stack.Screen options={{headerShown:false}} 
        name= "MealsDetailScreen" 
        component = {MealsDetailScreen} 
        />

       </Stack.Navigator>


    </NavigationContainer>

    );
    };

    


export default Navigation;