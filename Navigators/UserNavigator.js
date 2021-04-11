import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Payment from "../Screens/User/paymentScreen";
// import Home from "../Screens/Auth/homeScreen";

const Stack = createStackNavigator();
const animateIn = () => {
  Animated.timing(animatePress, {
    toValue: 0.5,
    duration: 500,
    useNativeDriver: true, // Add This line
  }).start();
};

export default function UserNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Payment">
        <Stack.Screen name="Payment" component={Payment} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
