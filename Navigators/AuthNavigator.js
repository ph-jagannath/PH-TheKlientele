import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../Screens/Auth/welcomeScreen";
import Login from "../Screens/Auth/loginScreen";
import Signup from "../Screens/Auth/signupScreen";
import Forgot from "../Screens/Auth/forgotScreen";
import Home from "../Screens/Auth/homeScreen";
import AddScreen from "../Screens/Auth/addOnesScreen";
import HairCut from "../Screens/Auth/haircutMenScreen";
import Payment from "../Screens/Auth/paymentScreen";
import Terms from "../Screens/Auth/termConditionScreen";
import AddCart from "../Screens/Auth/addToCartScreen";
import Location from "../Screens/Auth/locationScreen";
import Gender from "../Screens/Auth/genderScreen";
import HairCutDetails from "../Screens/Auth/hairCutDetailsScreen";
import Drawer from "../Screens/Auth/drawerScreen";
import Faq from "../Screens/Auth/faqScreen";
import TermsScreen from "../Screens/Auth/termsScreen";
import Shopper from "../Screens/Auth/shopperScreen";
import Details from "../Screens/Auth/detailsScreen";
import Carousel from "../Screens/Auth/carousel";
import PromoCode from "../Screens/Auth/promoCodeScreen";
import Booking from "../Screens/Auth/bookingScreen";
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
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HairCutDetails" component={HairCutDetails} />
        <Stack.Screen name="Haircut" component={HairCut} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="AddCart" component={AddCart} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Faq" component={Faq} />
        <Stack.Screen name="Shopper" component={Shopper} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="TermsScreen" component={TermsScreen} />
        <Stack.Screen name="Carousel" component={Carousel} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="PromoCode" component={PromoCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
