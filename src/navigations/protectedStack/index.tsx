import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigation from "./home";
import ProfileNavigation from "./profile";

const ProtectedStack = createNativeStackNavigator();

const ProtectedStackNavigation = () => {
  return (
    <NavigationContainer>
      <ProtectedStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <ProtectedStack.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{
            headerShown: false,
          }}
        />
        <ProtectedStack.Screen
          name="ProfileNavigation"
          component={ProfileNavigation}
          options={{
            headerShown: false,
          }}
        />
      </ProtectedStack.Navigator>
    </NavigationContainer>
  );
};

export default ProtectedStackNavigation;
