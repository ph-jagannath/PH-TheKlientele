import React, { Component } from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Input, Overlay, Divider } from "react-native-elements";
import back from "../../assets/back.png";
import DatePicker from "react-native-datepicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import location from "../../assets/locations.png";
import global from "../../global";

import { Constant, Location, Permissions } from "expo";

export default class locationScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    location: null,
    errorMessage: null,
  };
  findCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (positon) => {
        const latitude = JSON.stringify(position.coords.latitude);
        const latitute = JSON.stringify(position.coords.longitude);
        this.setState({
          latitude,
          longitude,
        });
      },
      { enableHeighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  findCurrentLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied",
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let text = "";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    return (
      <View style={styles.bgContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.iconContaier}>
            <View style={{ width: 40 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Gender")}
              >
                <Image
                  source={global.ASSETS.BACK}
                  style={{
                    width: 20,
                    height: 26,
                    alignSelf: "flex-start",
                    resizeMode: "contain",
                    shadowColor: "gray",
                    marginTop: 40,
                    marginLeft: 22,
                    // marginRight: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 80 }}>
          <View>
            <Text style={styles.bottomText}>Hi, nice to meet you!</Text>
            <Text style={styles.forgotText}>See services around</Text>
          </View>
          <Image
            source={global.ASSETS.INFOGRAPHIC}
            style={{
              width: 250,
              height: 80,
              alignSelf: "center",
              resizeMode: "cover",
              shadowColor: "gray",
              marginTop: 20,
              marginLeft: 22,
              // marginRight: 20,
            }}
          />
          <TouchableOpacity
            style={styles.locationContainer}
            // onPress={this.findCurrentLocation}
            onPress={() => this.props.navigation.navigate("User")}
          >
            <View style={styles.locationIconContainer}>
              <Image
                source={global.ASSETS.FINDLOCATION}
                style={{
                  width: 20,
                  height: 20,
                  //   alignSelf: "center",
                  resizeMode: "cover",
                  shadowColor: "gray",
                  marginTop: 3,
                  //   marginLeft: 22,
                  // marginRight: 20,
                }}
              />
              <Text style={styles.locationText}>Your Current Location</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <View style={styles.locationIconContainer}>
              <Image
                source={global.ASSETS.SEARCH}
                style={{
                  width: 20,
                  height: 22,
                  //   alignSelf: "center",
                  resizeMode: "cover",
                  shadowColor: "gray",
                  marginTop: 3,
                  //   marginLeft: 22,
                  // marginRight: 20,
                }}
              />
              <View style={styles.inputContainer}>
                <Input
                  placeholder="Search Other Location"
                  // labelStyle={styles.labelText}
                  textContentType="emailAddress"
                  inputContainerStyle={styles.inputFiedContainer}
                  keyboardType="email-address"
                  inputStyle={styles.inputText}
                  // onChangeText={(v) => this.setState({ number: v })}
                  // value={this.state.number}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    // justifyContent: "center",
  },
  headerContainer: {
    height: 100,
    backgroundColor: "#087407",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 24,
  },
  iconContaier: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  headerText: {
    fontSize: 16,
    color: "#fff",
    marginTop: 36,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  bottomText: {
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 10,
  },

  forgotText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
  locationContainer: {
    // height: 50,
    //   width:300
    backgroundColor: "green",
    marginHorizontal: 20,
    borderRadius: 40,
  },
  locationIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 14,
  },
  locationText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 10,
  },
  searchContainer: {
    borderColor: "green",
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 40,
    height: 54,
    marginTop: 30,
  },
  inputContainer: {
    // flexDirection: "row",
    // marginHorizontal: 16,
    // marginTop: 10,
  },
  inputFiedContainer: {
    borderBottomWidth: null,
    width: 200,
  },
  inputText: {
    color: "#000",
    fontSize: 16,
    marginTop: -8,
  },
});
