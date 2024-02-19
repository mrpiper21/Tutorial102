import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Welcome3 = () => {
  const navigation = useNavigation() as any;

  return (
    <View className="flex-1 pl-9 p-9">
      {/**back arrow and logo */}
      <View className="flex flex-col space-y-7 mt-6">
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <Text className="font-bold text-3xl">Welcome Back!</Text>
      </View>

      {/**form */}
      <View className="mt-20 flex flex-col space-y-3">
        <View className="flex flex-col space-y-1">
          <Text className="font-bold text-lg">Email address</Text>
          <TextInput style={{ height: hp(5) }} placeholder="name@example.com" />
        </View>
        <View className="flex flex-col space-y-1">
          <Text className="font-bold text-lg">Password</Text>
          <TextInput
            style={{ height: hp(5) }}
            placeholder="Enter your password"
          />
        </View>
        <View className="flex flex-row justify-between text-center">
          <Text className="text-lg">Remember me</Text>
          <AntDesign name="checkcircle" size={24} color="aqua" />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("HomePage")}
        style={{
          backgroundColor: "aqua",
          top: hp(40),
          alignItems: "center",
          justifyContent: "center",
          width: hp(43),
          height: hp(7.5),
          borderRadius: 8,
        }}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
      {/**button */}
    </View>
  );
};

export default Welcome3;
