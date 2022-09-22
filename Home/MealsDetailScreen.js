import React from "react";
import {View,  Text,  ScrollView, FlatList, Dimensions,Image} from "react-native";
const MealsDetailScreen = (props) => {
 const MealsData = props.route.params.mealsData;
 

 return (
  <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      keyExtractor={(item, index) => index.toString()}
      data={MealsData.imagesUrl}
      renderItem={(itemData) => {
        return (
          <View
            style={{
              height: 250,
              width: Dimensions.get("screen").width ,
              paddingHorizontal:5,
              marginTop: 20,
              // shadowColor: "#000",
              // shadowOffset: {
              //   width: 0,
              //   height: 2,
              // },
              // shadowOpacity: 0.25,
              // shadowRadius: 3.8,
              // elevation: 5,
              // borderRadius: 30,
              
            }}
          >
            <Image
              style={{ height: "80%", width: "100%", borderColor:"black",borderWidth:3 }}
              source={{ uri: itemData.item.image }}
            />
          </View>
        );
      }}
    />
    <View
      style={{
        width: "100%",
        paddingHorizontal: 10,
      }}
    >
            {/* <<<< <<<<<<<<<<<Ingredients>>>>>>>>>>>>>>>>> */}
<View>
<Text
          style={{
            marginTop: -30,
            fontSize: 15,
            color:"red",
            fontWeight: "bold",
            textDecorationLine:"underline",
            
          
            }}>
        {`Ingredients:`}</Text>

  

        {MealsData.ing.map((i) => {
          return (
            <View
              style={{
                width: "100%",}}>
      
              <Text
                style={{
                  fontSize: 12,
                  color: "black",
                  
                }}>
              {`◌ ${i.ingredients}`}
              </Text>
         </View>
         
          );
        })}
      </View>


      {/* ..........<<<<<<<<<<<<<<TIME DURATION >>>>>>>>>>>>>>>>>>>....>...> */}

<View>

        <Text
          style={{
            marginVertical: 10,
            fontSize: 15,
            color:"red",
            fontWeight: "bold",
            textDecorationLine:"underline",
          }}>

        {`Time Duration`}</Text>

        <Text style={{ fontSize: 12, opacity: 0.7 }}>
          {MealsData.timeDuration}
        </Text>
</View>

       {/* <<<<<<<<<<<<<<<<< STEPS TO MAKE>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <Text
        style={{
          marginVertical: 10,
          fontSize: 15,
          color:"red",
          fontWeight: "bold",
          textDecorationLine:"underline",
        }}>

                   {`Methods To Make: ${MealsData.name}`}</Text>


    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<STEP COUNT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <View>
        {MealsData.steps.map((i) => {
          return (
            <View
              style={{
                width: "100%",
                marginBottom: 10,
                padding: 5,
              }}>
            
              <Text
                style={{
                  marginVertical: 5,
                  fontSize: 15,
                  color: "red",
                  fontWeight: "bold",
                }}>
              
                              {`* ${i.stepCount}`}
              </Text>

    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<STEP DESCRIPTION>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              
              <Text style={{ fontSize: 12, opacity: 0.7 ,justifyContent:"center"}}>
                {i.stepDescription}
              </Text>

              
            </View>
          );
        })}
      </View>
    </View>
  </ScrollView>
);
};

export default MealsDetailScreen;
