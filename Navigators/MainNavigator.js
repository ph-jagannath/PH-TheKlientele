import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navigationRef, isMountedRef } from "../utils/RootNavigation";
import AuthNavigator from "./AuthNavigator";
import UserNavigator from "./UserNavigator";

const [animatePress, setAnimatePress] = useState(new Animated.Value(1));

const Tab = createBottomTabNavigator();
export default function MainNavigator() {
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        initialRouteName="User"
        backBehavior="none"
        screenOptions={({ route }) => ({
          tabBarVisible: false,
          unmountOnBlur: true,
        })}
      >
        {/* <Tab.Screen name="AuthLoading" component={AuthLoading} /> */}
        <Tab.Screen name="Auth" component={AuthNavigator} />
        <Tab.Screen name="User" component={UserNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
