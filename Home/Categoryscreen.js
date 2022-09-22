
import React from "react";
import { View, Text, FlatList,ImageBackground,TouchableOpacity,SafeAreaView,Image} from "react-native";
import { CATEGORY } from "../Data/Dummydata";
const Categoryscreen = (props) => {
  

  

  return (
    <SafeAreaView>
       <Image
          source={require("../assets/Images/yum.png")}
          style={{ height: "30%", width: "100%",borderWidth:10,borderColor:"black" }}
        />

        <Text style={{fontSize:20,color:"black",fontWeight:"800"}}> Select the category:</Text>
      <View style={{ marginHorizontal: 10, marginTop: -5, }}>
        <FlatList
          data={CATEGORY}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={(itemData) => {
            var imgURL ="../assets/Images/"+ itemData.item.image;
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("AllMealsScreen", {
                    catId: itemData.item.id,
                  });
                }}
                style={{
                  height: 168, 
                  width: "48%",
                  margin: 6,}}>
                
                
                  
                <ImageBackground
                  borderRadius={20}
                  style={{
                    height: "100%",
                    width: "100%",
                    justifyContent: "flex-end",
                    overflow: "visible",
                    borderWidth:2
                  }}
                  
                  // source={itemData.item.image}
                  source={{ uri: itemData.item.image }}
                >
                  <View
                    style={{
                      height: "100%",
                      width: "100%",
                      backgroundColor: "#00000082",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 18,
                      }}
                    >
                      {itemData.item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Categoryscreen;
