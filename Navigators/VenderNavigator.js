import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Screens/Vender/loginScreen";
import Forgot from "../Screens/Vender/forgotScreen";
import SignUp from "../Screens/Vender/signUpScreen";
import Home from "../Screens/Vender/homeScreen";
import Artist from "../Screens/Vender/artistScreen";
import AddArtist from "../Screens/Vender/addArtistScreen";

// import Shopper from "../Screens/Auth/shopperScreen";
// import Details from "../Screens/detailsScreen";

const Stack = createStackNavigator();
const animateIn = () => {
  Animated.timing(animatePress, {
    toValue: 0.5,
    duration: 500,
    useNativeDriver: true, // Add This line
  }).start();
};

export default function VenderNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="AddArtist">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Artist" component={Artist} />
        <Stack.Screen name="AddArtist" component={AddArtist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
