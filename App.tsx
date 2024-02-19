import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import React from "react";
const Stack = createNativeStackNavigator();
import Welcome from "./src/pages/Welcome";
import Welcome1 from "./src/pages/Welcome1";
import Welcome2 from "./src/pages/Welcome2";
import Welcome3 from "./src/pages/Welcome3";
import Home from "./src/pages/Home";
import Purchase from "./src/pages/Purchase";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="page-One"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Page-One" component={Welcome} />
        <Stack.Screen name="Page-two" component={Welcome1} />
        <Stack.Screen name="Page-three" component={Welcome2} />
        <Stack.Screen name="Page-four" component={Welcome3} />
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="Buy" component={Purchase} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
