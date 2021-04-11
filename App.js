import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import AuthNavigator from "./Navigators/AuthNavigator";
import UserNavigator from "./Navigators/UserNavigator";
import VenderNavigator from "./Navigators/VenderNavigator";
// import MainNavigator from "./Navigators/MainNavigator";
// console.disableYellowBox = true;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  //   load custom font function

  render() {
    return <AuthNavigator />;
  }
}
