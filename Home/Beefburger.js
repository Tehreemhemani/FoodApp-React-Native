import React from "react";
import { View, Text, Button, FlatList, ImageBackground, TouchableOpacity } from "react-native";
import Mybutton from "../Components/Mybutton";
import color from "../Constant/color";

const Beefburger = (props) => {

  const Data = [
    {
      id: Math.random(),
      name: " Grilled beef burger",
      image:"https://recipes.net/wp-content/uploads/2021/10/the-best-grilled-bbq-burger-recipe.jpg"
    }
        ,
    {
      id: Math.random(),
      name: "Mince Maestro Beef",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-unQSZfv5-yffAjuaFFO1VZOlBUi0d70RsyUnMhfdQVykqQ4FxDhTn_KUwz20gpMoppc&usqp=CAU",
    },
    {
      id: Math.random(),
      name: "Rebellion beef burger",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQtUAix7B7fX2R19JyvC_hz36OAGKupCRDasMtIXaYIJSol9FanWw-tkawu5vyuOO-Qg&usqp=CAU",
    },
    {
      id: Math.random(),
      name: "Beef burger",
      image:
        "https://i.tribune.com.pk/media/images/Sidebar-4-(5)1641017395-0/Sidebar-4-(5)1641017395-0.jpg",
    },
    {
      id: Math.random(),
      name: "Beef steak burger",
      image:
        "https://www.pakladies.com/juicy-steak-burger-recipe/steak-burger/",
    },

    {
      id: Math.random(),
      name: "Jalapeno beef burger",
      image:
        "https://static.tossdown.com/images/ed919d66-bb17-464a-b881-2d4930462136.jpg",
    },

    {
      id: Math.random(),
      name: "Beef cheese burger",
      image:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/05/07/0/FNK_OKLAHOMA_ONION_BURGERS_H_f_s4x3.jpg.rend.hgtvcom.616.462.suffix/1620410569399.jpeg",
    },

    {
      id: Math.random(),
      name: "Flaming beef burger",
      image:
        "",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
      
        style={{ marginTop: 10 }}
        keyExtractor={(item, index) => index.toString()}
        data={Data}
        renderItem={(itemData) => {
          return (

            <TouchableOpacity
            onPress={() =>{

              props.navigation.navigate("AllMealsScreen");
                  }}>


            <ImageBackground
              resizeMode="contain"
              imageStyle={{ borderRadius: 10 }}
              source={{ uri: itemData.item.image }}
              style={{
                height: 250,
                width: "97.5%",

                marginBottom: 10,

                marginHorizontal: 10,
                justifyContent: "flex-end",
                alignItems: "center",
                color:"pink"
              }}
            >
              <Text
                style={{ fontSize: 25, color: "black", fontWeight: "bold" , color:"white"}}
              >
                {itemData.item.name}
              </Text>
            </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default Beefburger;
