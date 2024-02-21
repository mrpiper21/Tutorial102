import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation() as any;

  const han = () => {
    navigation.navigate("Welcome");
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "aqua",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/**Text veiw */}
      <View>
        <Text style={{ fontSize: 50, color: "white" }} onPress={han}>
          Flut
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
