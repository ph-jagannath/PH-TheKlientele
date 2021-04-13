import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import DrawerContent from "../components/DarwerContent/drawer";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Faq from "../Screens/User/faqScreen";
import TermsScreen from "../Screens/User/termsScreen";
import Shopper from "../Screens/User/shopperScreen";
import Details from "../Screens/User/detailsScreen";
import Carousel from "../Screens/Auth/carousel";
import PromoCode from "../Screens/User/promoCodeScreen";
import Booking from "../Screens/User/bookingScreen";
import Home from "../Screens/User/homeScreen";
import AddScreen from "../Screens/User/addOnesScreen";
import HairCut from "../Screens/User/haircutMenScreen";
import Payment from "../Screens/User/paymentScreen";
import Terms from "../Screens/User/termConditionScreen";
import AddCart from "../Screens/User/addToCartScreen";
import Location from "../Screens/Auth/locationScreen";
import HairCutDetails from "../Screens/User/hairCutDetailsScreen";
import Invite from "../Screens/User/inviteShareScreen";
import Profile from "../Screens/User/profileScreen";
import TermDrawer from "../Screens/User/termsScreen";
import Gender from "../Screens/User/genderScreen";
import bookingDetailScreen from "../Screens/User/bookingDetailScreen";

// import Home from "../Screens/Auth/homeScreen";
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const animateIn = () => {
//   Animated.timing(animatePress, {
//     toValue: 0.5,
//     duration: 500,
//     useNativeDriver: true, // Add This line
//   }).start();
// };

export default function UserNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Home"
      backBehavior="initialRoute"
      drawerType={"slide"}
      screenOptions={{
        unmountOnBlur: true,
      }}
    >
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="HairCut" component={HairCut} />
      <Drawer.Screen name="HairCutDetails" component={HairCutDetails} />
      <Drawer.Screen name="Faq" component={Faq} />
      <Drawer.Screen name="TermsScreen" component={TermsScreen} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Shopper" component={Shopper} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Carousel" component={Carousel} />
      <Drawer.Screen name="PromoCode" component={PromoCode} />
      <Drawer.Screen name="Booking" component={Booking} />
      <Drawer.Screen name="AddScreen" component={AddScreen} />
      <Drawer.Screen name="Terms" component={Terms} />
      <Drawer.Screen name="AddCart" component={AddCart} />
      <Drawer.Screen name="Location" component={Location} />
      <Drawer.Screen name="Invite" component={Invite} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="TermDrawer" component={TermDrawer} />
      <Drawer.Screen name="Gender" component={Gender} />
      <Drawer.Screen
        name="bookingDetailScreen"
        component={bookingDetailScreen}
      />
    </Drawer.Navigator>
  );
}
