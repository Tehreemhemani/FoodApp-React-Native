import React from "react";
import { View, Text, Button, FlatList, ImageBackground } from "react-native";
const Listingscreen = (props) => {
  const Data = [
    {
      id: Math.random(),
      name: "Audi",
      image:
        "https://greatdubai.com/sell-car-rentals/wp-content/uploads/sites/4/2022/05/SONATA-hero-option1-764A5360-edit-640x354-1.jpg",
    },
    {
      id: Math.random(),
      name: "Civic",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDT61OW-9Wm4zse2N5wdRWErByDy68cgeLsWzeUYDxjj49aI1nw9z2ojjt73NndeM7_2Y&usqp=CAU",
    },
    {
      id: Math.random(),
      name: "Corolla",
      image:
        "https://maserati.scene7.com/is/image/maserati/maserati/regional/us/models/my22/levante/22_LV_Trofeo_PS_T1_HomePage_1920x1080.jpg?$1920x2000$&fit=constrain",
    },
    {
      id: Math.random(),
      name: "Cultus",
      image:
        "https://arabam-blog.mncdn.com/wp-content/uploads/2021/09/range_desktop.jpg",
    },
    {
      id: Math.random(),
      name: "Swift",
      image:
        "https://greatdubai.com/sell-car-rentals/wp-content/uploads/sites/4/2022/05/SONATA-hero-option1-764A5360-edit-640x354-1.jpg",
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
            <ImageBackground
              resizeMode="center"
              imageStyle={{ borderRadius: 10 }}
              source={{ uri: itemData.item.image }}
              style={{
                height: 100,
                width: "97.5%",

                marginBottom: 10,

                marginHorizontal: 10,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
                {itemData.item.name}
              </Text>
            </ImageBackground>
          );
        }}
      />
    </View>
  );
};
export default Listingscreen;
