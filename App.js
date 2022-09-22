import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splashscreen from './Home/Splashscreen';
import Loginscreen from './Auth/Loginscreen';
import Signupscreen from './Auth/Signupscreen';
import Navigation from "./Navigation/Navigation"
import Homescreen from './Home/Homescreen';
import Categoryscreen from './Home/Categoryscreen';
import AllMealsScreen from "./Home/AllMealsScreen";
import MealsDetailScreen from "./Home/MealsDetailScreen";
import Chickenburger from "./Home/Chickenburger";
import Beefburger from "./Home/Beefburger";




export default function App() {
  return (
        <Navigation/>
  );
}
  
