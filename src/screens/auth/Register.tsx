import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Register = () => {
  return (
    <View className="flex-1 p-10">
      <View className="pt-20">
        {/**Back arrow */}
        <View>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </View>

        {/**Header */}
        <View className="mt-10">
          <Text className="text-3xl font-bold">Create new account</Text>
        </View>

        {/**form */}
        <View className="mt-20 space-y-9">
          <View className="flex-col">
            <Text className="font-bold text-lg">Full Name</Text>
            <TextInput
              style={{ height: hp(5) }}
              placeholder="Enter your name"
            />
          </View>
          <View className="flex-col">
            <Text className="font-bold text-lg">Email Address</Text>
            <TextInput
              style={{ height: hp(5) }}
              placeholder="name@example.com"
            />
          </View>
          <View className="flex-col">
            <Text className="font-bold text-lg">Create password</Text>
            <TextInput
              style={{ height: hp(5) }}
              placeholder="Enter your password"
            />
          </View>
          <View className="flex-col">
            <Text className="font-bold text-lg">Confirm password</Text>
            <TextInput
              style={{ height: hp(5) }}
              placeholder="Repeat new password"
            />
          </View>
        </View>
      </View>

      {/**Sign up btn */}
      <TouchableOpacity
        style={{
          width: hp(42),
          height: hp(7),
          backgroundColor: "rgb(82, 211, 216)",
          marginTop: 100,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
