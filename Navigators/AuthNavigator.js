import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../Screens/Auth/welcomeScreen";
import Login from "../Screens/Auth/loginScreen";
import Signup from "../Screens/Auth/signupScreen";
import Forgot from "../Screens/Auth/forgotScreen";

import Gender from "../Screens/Auth/genderScreen";

// import VerifyNumber from "./../screens/Auth/VerifyNumber";
// import WelcomeDacwash from "../screens/Auth/WelcomeDacwash";
// import AddVehicle from "../screens/Auth/AddVehicle";
const Stack = createStackNavigator();
const animateIn = () => {
  Animated.timing(animatePress, {
    toValue: 0.5,
    duration: 500,
    useNativeDriver: true, // Add This line
  }).start();
};

export default function AuthNavigator() {
  return (
    
      <Stack.Navigator headerMode="none" initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgot" component={Forgot} />
      
        
      </Stack.Navigator>
   
  );
}
