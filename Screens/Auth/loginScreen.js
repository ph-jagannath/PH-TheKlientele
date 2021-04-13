import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import logo from "../../assets/logo.png";
import { Button, Input, Overlay, Divider, Icon } from "react-native-elements";
// import LinearGradient from "react-native-linear-gradient";
import GradientButton from 'react-native-gradient-buttons';

// import GradientButton from "react-native-gradient-buttons";

import global from "../../global";

export default class loginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "klienteletest100@mailsac.com",
      password: "12345678",
      
    };
  }
   // Validate
   handleValidate = () => {
    if (this.state.email == "") {
      Alert.alert("Login Alert", "Please enter e-mail address ");
    } else if (this.state.email !== "") {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) === false) {
        Alert.alert("Login Alert", "Invalid e-mail address ");
      } else if (this.state.password == "") {
        Alert.alert("Login Alert", "Please enter password");
      } else if (this.state.password.length < 6) {
        Alert.alert(
          "Login Alert",
          "Password field should not be less than 6 characters"
        );
      } else {
        // Login(this.state);
        this.handleLogin();
      }
    }
  };
  handleLogin = () => {
    // this.setState({ success: true });
    this.props.navigation.navigate("User");
  };
  render() {
    return (
      <View style={styles.bgContainer}>
        <View style={styles.upperContainer}>
          <ImageBackground
            source={global.ASSETS.LOGO}
            style={styles.imageContainer}
            style={{
              width: 260,
              height: 220,
              resizeMode: "cover",
              alignSelf: "center",
              marginTop: 40,
              backgroundColor: "#087407",
              // alignSelf: "center",
            }}
          ></ImageBackground>
        </View>
        <View style={styles.inputContainer}>
          {/* email container */}

          <Input
            label="Email"
            labelStyle={styles.labelText}
            textContentType="emailAddress"
            inputContainerStyle={styles.inputFiedContainer}
            keyboardType="email-address"
            inputStyle={styles.inputText}
            // onChangeText={(v) => this.setState({ number: v })}
            value={this.state.email}
          />
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-between",
              // marginRight: 30,
            }}
          >
            <Input
              label="Password"
              secureTextEntry={true}
              labelStyle={styles.labelText}
              textContentType="emailAddress"
              inputContainerStyle={styles.inputFiedContainer}
              keyboardType="email-address"
              inputStyle={styles.inputText}

              // onChangeText={(v) => this.setState({ number: v })}
              value={this.state.password}
            />
            <TouchableOpacity>
              <Image
                source={global.ASSETS.PASSWORD}
                style={{
                  width: 26,
                  height: 26,
                  alignSelf: "center",
                  resizeMode: "contain",
                  shadowColor: "gray",
                  marginTop: 28,
                  marginLeft: -34,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.forgotText}
          onPress={() => this.props.navigation.navigate("Forgot")}
        >
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
        <GradientButton
      style={{ marginTop: 50,alignSelf:"center" }}
      text="Sign in"
      textStyle={{ fontSize: 16 }}
      gradientBegin="#0B9A09"
      gradientEnd="#087407"
      gradientDirection="diagonal"
      height={50}
      width={300}
      radius={40}
      impact
      impactStyle='Light'
      onPressAction={() => {this.handleValidate}}
      // onPress={() => this.props.navigation.navigate("Login")}
    />
          {/* <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonStyle}
            // loading={this.state.buttonLoading}
            title="Sign in"
            titleStyle={styles.buttonTitle}
            TouchableComponent={TouchableOpacity}
            // linearGradientProps={{
            //   colors: ["#0B9A09", "#087407"],
            //   start: { x: 0, y: 0.1 },
            //   end: { x: 1, y: 0.5 },
            // }}
            onPress={this.handleValidate}
          /> */}
        </View>
        <View style={styles.dividerContainer}>
          <Divider style={styles.divider} />
          <Text style={styles.orText}>On sign in with</Text>
          <Divider style={styles.divider} />
        </View>
        {/* <View style={styles.signInTextContainer}>
          <View style={styles.borderContainer}></View>
          <Text>On sign in with</Text>
          <View style={styles.borderContainer}></View>
        </View> */}
        <View style={styles.facebookContainer}>
          <TouchableOpacity>
            <Image
              source={global.ASSETS.FACEBOOK}
              style={{
                width: 46,
                height: 46,
                alignSelf: "center",
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={global.ASSETS.GOOGLE}
              style={{
                width: 46,
                height: 46,
                alignSelf: "center",
                resizeMode: "contain",
                shadowColor: "gray",
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ alignSelf: "center", marginTop: 30, flexDirection: "row" }}
        >
          <Text style={styles.accountText}>You Don't have an acount?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  upperContainer: {
    height: 300,
    backgroundColor: "#087407",
    borderBottomLeftRadius: 240,
    width: 500,
    borderBottomRightRadius: 240,
    alignSelf: "center",
  },
  imageContainer: {},

  fromContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 20,
  },
  labelText: {
    // fontWeight: "bold",
    fontSize: 14,
    // marginVertical: 10,
    // color: "#000",
    // marginLeft: 11,
  },

  inputText: {
    color: "#000",
    fontSize: 16,
    marginRight: 40,
    // width: 100,
  },
  inputFiedContainer: {
    borderBottomWidth: 1,
  },
  inputContainer: {
    // flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 10,
    marginRight: 20,
  },
  forgotText: {
    color: "gray",
    alignSelf: "flex-end",
    fontSize: 16,
    marginHorizontal: 12,
    marginTop: -4,
    // fontFamily: global.FONT.LIGHT,
  },
  buttonContainer: {
    // width: 320,
    justifyContent: "center",
    // alignContent: "center"
    alignSelf: "center",
    alignItems: "center",
    // marginTop: 40,
  },
  buttonStyle: {
    backgroundColor: "green",
    height: 50,
    width: 320,
    // alignSelf: "center",
    // marginTop: 20,
    borderRadius: 40,
  },
  buttonTitle: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 18,
    paddingTop: 0,
    paddingBottom: 0,
    // textAlign: "center",
    // marginBottom: 5
    // justifyContent: "center"
  },
  signInTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dividerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  divider: {
    height: 0.5,
    width: 110,
    backgroundColor: "gray",
    alignSelf: "center",
    // marginTop: 10,
    marginHorizontal: 10,
  },
  orText: {
    alignSelf: "center",
    fontSize: 12,
    color: "gray",
    // fontFamily: "OpenSans-Light",
    // marginTop: 10,
  },
  facebookContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 90,
    marginTop: 16,
    // justifyContent: "center",
  },
  accountText: {
    color: "gray",
    // alignSelf: "flex-end",
    fontSize: 14,
    marginHorizontal: 12,
    // marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: "#087407",
    fontWeight: "bold",
    marginLeft: -10,
  },
  icon1: {
    alignSelf: "center",
    marginTop: 36,
    // marginLeft: -20,
  },
});
