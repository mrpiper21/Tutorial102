import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import LottieView from "lottie-react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation() as any;

  return (
    <View className=" flex-col items-center justify-between space-y-20">
      {/**Welcome Text */}
      <View className="flex-col space-y-3 items-center mt-32">
        <Text className="font-bold text-7xl">Welcome</Text>
        <Text className="tracking-widest text-2xl">
          sign in or create account
        </Text>
      </View>

      {/**Animated image */}
      <View className="mt-40 mb-20">
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1707879488528-62b4573737a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTJ8fHxlbnwwfHx8fHw%3D",
          }}
          style={{
            width: hp(40),
            height: hp(20),
          }}
        />
      </View>
      {/**Buttons */}
      <View className="flex flex-col justify-center items-center">
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            backgroundColor: "aqua",
            justifyContent: "center",
            alignItems: "center",
            width: hp(43),
            height: hp(8),
            borderRadius: 8,
          }}
        >
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          className="bg-white mt-6 items-center border border-current justify-center rounded-md"
          style={{
            width: hp(43),
            height: hp(8),
          }}
        >
          <Text>No account yet? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
