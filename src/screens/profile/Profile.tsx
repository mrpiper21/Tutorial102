import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Profile = () => {
  return (
    <View className="flex-1">
      {/**profile image and details */}
      <View>
        <View className="justify-center items-center mt-20">
          <View className=" justify-center items-center">
            <Image
              source={{
                uri: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/RAPHAEL1127/phptrPKTg.jpg",
              }}
              style={{ width: hp(14), height: hp(14), borderRadius: hp(7) }}
            />
            <View className="bg-white rounded-2xl h-8 w-8 justify-center items-center relative bottom-6 left-9">
              <AntDesign name="edit" size={24} color="black" />
            </View>
          </View>
          <View className="flex-col space-y-1">
            <View className="flex flex-row space-x-2 mt-4">
              <Text className="font-bold text-xl">Posty Fest</Text>
              <AntDesign name="edit" size={24} color="black" />
            </View>
            <Text>PostyFext@gmail.com</Text>
          </View>
        </View>
      </View>

      {/**Setings and other features */}
      <View className="mt-5">
        <Text className="font-bold text-xl left-5">Settings</Text>
        <View className="flex-row justify-between items-center mt-7 bg-slate-200 py-6 px-4">
          <Text>Primary City</Text>
          <Text>New York</Text>
        </View>
        <View className="flex-row justify-between items-center mt-1 bg-slate-200 py-6 px-4">
          <Text>Copy Event to calendar</Text>
          <MaterialCommunityIcons name="calendar-range-outline" size={24} color="black" />
        </View>
        <View className="flex-row justify-between items-center mt-1 bg-slate-200 py-6 px-4">
          <Text>Manage Events</Text>
          <SimpleLineIcons name="arrow-right" size={20} color="black" />
        </View>
        <View className="flex-row justify-between items-center mt-1 bg-slate-200 py-6 px-4">
          <Text>Manage Log in options</Text>
          <SimpleLineIcons name="arrow-right" size={20} color="black" />
        </View>
        <View className="flex-row justify-between items-center mt-1 bg-slate-200 py-6 px-4">
          <Text>Account Setting</Text>
          <SimpleLineIcons name="arrow-right" size={20} color="black" />
        </View>
      </View>
      {/**Logout btn */}
      <TouchableOpacity
        style={{
          padding: 30,
          justifyContent: "center",
          alignItems: "center",
          top: hp(6),
          width: hp(40),
          left: hp(5.5),
          borderRadius: 10,
          borderWidth: 1,
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
