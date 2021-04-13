import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import Payment from "../Screens/User/paymentScreen";
import HairCutDetails from "../Screens/User/hairCutDetailsScreen";
// import Drawer from "../Screens/User/drawerScreen";
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
  </Drawer.Navigator>
       
      
    
   
  );
}
