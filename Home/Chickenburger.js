import React from "react";
import { View, Text, Button, FlatList, ImageBackground, TouchableOpacity } from "react-native";
import Mybutton from "../Components/Mybutton";
import color from "../Constant/color";

const  Chickenburger = (props) => {

  
  const Data = [
    {
      id: Math.random(),
      name: " Cheese burger",
      image:"https://kfoods.com/images1/newrecipeicon/beef-cheese-burger_2565.jpg"
    }
        ,
    {
      id: Math.random(),
      name: "Crispy chicken burger",
      image:
        "https://i.ytimg.com/vi/Ub06gV4gzxc/maxresdefault.jpg",
    },
    {
      id: Math.random(),
      name: "Greek lamb burger",
      image:
        "https://www.seriouseats.com/thmb/KBbqjiTOFWkMWi_wKY9wHt9V78o=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__06__20120625-burger-lab-lamb-burger-22-46443bec7856487395845f13c84ad141.jpeg",
    },
    {
      id: Math.random(),
      name: "Veggie burger",
      image:
        "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/5:4/w_3029,h_2423,c_limit/ultimate-veggie-burger.jpg",
    },
    {
      id: Math.random(),
      name: "Steak burger",
      image:
        "https://assets.kansascitysteaks.com/dyn-images/pdp_hero/Burger_SU18-ca9fa7f3da1cef488ae2303889ec6b69.jpg",
    },

    {
      id: Math.random(),
      name: "Jalapeno chicken burger",
      image:
        "https://thumbor.thedailymeal.com/VqFJE5vSXmyBgTvYCy_7laTVLMk=/870x565/filters:focal(1060x707:1061x708)/https://www.thedailymeal.com/sites/default/files/recipe/2020/copy/27_burger_getty_0.jpg",
    },

    {
      id: Math.random(),
      name: "Buffalo Chicken burger",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYgw7dhHBhpSapTtGEJHyQMjYOL030MJPnFn8EGTZdCZHd_g5fsIQgvwz35b_Sdz44Vw&usqp=CAU",
    },

    {
      id: Math.random(),
      name: "Flaming chicken burger",
      image:
        "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/flame-grilled-chicken-burger-ideal-burger-applications.jpg?itok=2gYeJI0p",
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

              props.navigation.navigate("");
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
                style={{ fontSize: 20, color: "black", fontWeight: "bold" , color:"white"}}
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
export default Chickenburger;
