import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authStack/AuthStack";
import ProtectedStackNavigation from "./protectedStack";
function AppNavigation() {
  const isAuthenticated = true;
  return isAuthenticated ? <ProtectedStackNavigation /> : <AuthNavigation />;
}

export default AppNavigation;
