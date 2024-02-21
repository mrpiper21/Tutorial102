import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Home = () => {
  const navigation = useNavigation() as any;
  return (
    <View className="flex-1 pt-16 pl-4 pr-4">
      {/**Location header */}
      <View>
        <Text>Find events in</Text>
        <View className="flex flex-row items-center">
          <EvilIcons name="location" size={24} color="black" />
          <Text className="text-lg">Barcelona</Text>
          <MaterialCommunityIcons
            name="arrow-bottom-right"
            size={24}
            color="black"
          />
        </View>
      </View>
      {/**Image div */}
      <View className="mb-3 mt-5">
        <Text className="text-lg">Popular in Barceona</Text>
      </View>
      <TouchableOpacity
        className="flex flex-col bg-slate-200"
        style={{ borderRadius: hp(1) }}
        onPress={() => navigation.navigate("Purchase")}
      >
        <Image
          source={{
            uri: "https://uscatholic.org/wp-content/uploads/2021/09/1080px-Billie_Eilish_at_Pukkelpop_Festival_-_18_AUGUST_2019_04-e1632492355277-990x619.jpg",
          }}
          style={{
            height: hp(20),
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
        />
        <View className="ml-3 mt-3">
          <View className="space-y-2">
            <Text>Mon, Apr 10 . 21:00 pm</Text>
            <Text className="font-bold text-lg">Bayley Eilish</Text>
          </View>
          <View className="flex flex-row">
            <EvilIcons name="location" size={24} color="black" />
            <Text>Palau Sant Jordi, Barcelona</Text>
          </View>
        </View>
        <View className="flex my-4 flex-row-reverse">
          <EvilIcons
            name="share-google"
            size={24}
            color="black"
            style={{ marginRight: hp(2) }}
          />
          <AntDesign
            name="hearto"
            size={24}
            color="black"
            style={{ marginRight: hp(1.5) }}
          />
        </View>
      </TouchableOpacity>

      {/**Sub image div */}
      <View className="flex flex-col space-y-2">
        <View className="flex flex-row justify-between mt-3 items-center">
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/c7/7a/60/c77a609e7f21bb0c1b364b1bb7ed1ec2.jpg",
            }}
            style={{
              width: hp(12),
              height: hp(12),
              borderRadius: hp(1),
            }}
          />
          <View className="flex flex-col right-12">
            <Text>Thu, Apri 19 . 20:00pm</Text>
            <Text className="font-bold text-lg">The Kooks</Text>
            <View className="flex flex-row mt-2">
              <EvilIcons name="location" size={24} color="black" />
              <Text>Raaamatazzz</Text>
            </View>
          </View>
          <View className="flex flex-row right-2">
            <AntDesign name="hearto" size={24} color="black" />
            <EvilIcons
              name="share-google"
              size={24}
              color="black"
              style={{ marginLeft: hp(2) }}
            />
          </View>
        </View>
        <View className="flex flex-row justify-between mt-3 items-center">
          <Image
            source={{
              uri: "https://i1.sndcdn.com/artworks-000485441310-2spx8n-t500x500.jpg",
            }}
            style={{
              width: hp(12),
              height: hp(12),
              borderRadius: hp(1),
            }}
          />
          <View className="flex flex-col right-12">
            <Text>Thu, Apri 19 . 20:00pm</Text>
            <Text className="font-bold text-lg">Summer Time</Text>
            <View className="flex flex-row mt-2">
              <EvilIcons name="location" size={24} color="black" />
              <Text>Los Angeles</Text>
            </View>
          </View>
          <View className="flex flex-row right-2">
            <AntDesign name="hearto" size={24} color="black" />
            <EvilIcons
              name="share-google"
              size={24}
              color="black"
              style={{ marginLeft: hp(2) }}
            />
          </View>
        </View>
        <View className="flex flex-row justify-between mt-3 items-center">
          <Image
            source={{
              uri: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/28/12/billie-eilish.jpg",
            }}
            style={{
              width: hp(12),
              height: hp(12),
              borderRadius: hp(1),
            }}
          />
          <View className="flex flex-col right-12">
            <Text>Thu, Apri 19 . 20:00pm</Text>
            <Text className="font-bold text-lg">Purgetory</Text>
            <View className="flex flex-row mt-2">
              <EvilIcons name="location" size={24} color="black" />
              <Text>Las Vegas</Text>
            </View>
          </View>
          <View className="flex flex-row right-2">
            <AntDesign name="hearto" size={24} color="black" />
            <EvilIcons
              name="share-google"
              size={24}
              color="black"
              style={{ marginLeft: hp(2) }}
            />
          </View>
        </View>
      </View>
      {/**Tabs */}
      <View className="flex flex-row justify-between items-center p-3">
        <View>
          <AntDesign name="home" size={24} color="black" />
        </View>
        <View>
          <EvilIcons name="search" size={24} color="black" />
        </View>
        <View>
          <AntDesign name="hearto" size={24} color="black" />
        </View>
        <View>
          <Feather
            name="user"
            size={24}
            color="black"
            onPress={() => navigation.navigate("ProfileNavigation")}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
