import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Purchase = () => {
  return (
    <View className="flex-1 p-5">
      {/**Header */}
      <View className=" flex flex-row justify-between mt-16">
        <View className="items-center flex-col left-32 space-y-1">
          <Text className="font-bold text-xl">Bayley Eilish</Text>
          <Text>Mon, April 10 . 21:00</Text>
          <Text>Palay Sant Jordi, Barcelona</Text>
        </View>
        <View>
          <MaterialIcons name="cancel" size={24} color="black" />
        </View>
      </View>
      {/**purchase details */}
      <View className="flex flex-col top-16">
        <View className="mt-10">
          <View className="mb-2">
            <Text className="font-bold text-lg">Sunshine</Text>
          </View>
          <View className="flex flex-row justify-between">
            <View className="flex flex-col space-y-1">
              <View className="flex-row items-center">
                <Text className="font-bold text-lg">$50.88</Text>
                <Text> + $2 Fee</Text>
              </View>

              <Text>Sales end on Apri 17, 2024</Text>
            </View>
            <View>
              <Text>Sold Out!</Text>
            </View>
          </View>
        </View>

        <View className="mt-10">
          <View className="mb-2">
            <Text className="font-bold text-lg">Second Release</Text>
          </View>
          <View className="flex flex-row justify-between">
            <View className="flex flex-col space-y-1">
              <View className="flex-row items-center">
                <Text className="font-bold text-lg">$50.88</Text>
                <Text> + $2 Fee</Text>
              </View>
              <Text>Sales end on Apri 17, 2024</Text>
            </View>
            <View>
              <Entypo name="chevron-with-circle-down" size={24} color="black" />
            </View>
          </View>
        </View>

        <View className="mt-10">
          <View className="mb-2">
            <Text className="font-bold text-lg">General</Text>
          </View>
          <View className="flex flex-row justify-between">
            <View className="flex flex-col space-y-1">
              <View className="flex-row items-center">
                <Text className="font-bold text-lg">$50.88</Text>
                <Text> + $2 Fee</Text>
              </View>

              <Text>Sales end on Apri 17, 2024</Text>
            </View>
            <View>
              <Entypo name="chevron-with-circle-down" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>
      {/**Price and btn */}
      <View
        className="flex flex-row items-center justify-between"
        style={{ marginTop: hp(30) }}
      >
        <View>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </View>
        <View>
          <Text className="font-bold text-lg left-4">$68.00</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "aqua",
            width: hp(25),
            height: hp(6),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Purchase;
