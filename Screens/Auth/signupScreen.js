import React, { Component } from "react";
import { Text, StyleSheet, View, Image ,Alert} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Input, Overlay, Divider } from "react-native-elements";
import back from "../../assets/back.png";
import DatePicker from "react-native-datepicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import location from "../../assets/locations.png";
import global from "../../global";

export default class signupScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      userName: "test",
      currency: [{ value: "cbvuy", label: "India" }],
      email: "kliemteletest100@mailsac.com",
      password: "12345678",
  
      date: "",
      confirm_Password: "12345678",
      
    };
  }
  // Validate
  handleValidate = () => {
    if (this.state.userName == "") {
      Alert.alert("Signup Alert", "Please enter  userName");
     
  
    } else if (this.state.email == "") {
      Alert.alert("Signup Alert", "Please enter e-mail address ");
    } else if (this.state.email !== "") {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) === false) {
        Alert.alert("Signup Alert", "Invalid e-mail address ");
      } else if (this.state.password == "") {
        Alert.alert("Signup Alert", "Please enter password");
      } else if (this.state.password.length < 6) {
        Alert.alert(
          "Signup Alert",
          "Password field should not be less than 6 characters"
        );
      } 
      else {
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
          <View style={{ width: 40 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Image
                source={global.ASSETS.BACK}
                style={{
                  width: 20,
                  height: 26,
                  alignSelf: "flex-start",
                  resizeMode: "contain",
                  shadowColor: "gray",
                  marginTop: 50,
                  marginLeft: 22,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.accountText}>Create new Account</Text>
        <KeyboardAwareScrollView>
          <View style={styles.inputContainer}>
            {/* email container */}

            <Input
              label="Full Name"
              labelStyle={styles.labelText}
              textContentType="emailAddress"
              inputContainerStyle={styles.inputFiedContainer}
              keyboardType="email-address"
              inputStyle={styles.inputText}
              // onChangeText={(v) => this.setState({ number: v })}
              // value={this.state.number}
            />
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "space-between",
                // marginRight: 30,
              }}
            >
              <Input
                secureTextEntry={true}
                label="Password"
                labelStyle={styles.labelText}
                textContentType="emailAddress"
                inputContainerStyle={styles.inputFiedContainer}
                keyboardType="email-address"
                inputStyle={styles.inputText}

                // onChangeText={(v) => this.setState({ number: v })}
                // value={this.state.number}
              />
              <View style={{ marginLeft: -40 }}>
                <Image
                  source={global.ASSETS.PASSWORD}
                  style={{
                    width: 26,
                    height: 26,
                    alignSelf: "center",
                    resizeMode: "contain",
                    shadowColor: "gray",
                    marginTop: 28,
                    // marginLeft: -20,
                  }}
                />
              </View>
            </View>

            <Input
              label="Email"
              labelStyle={styles.labelText}
              textContentType="emailAddress"
              inputContainerStyle={styles.inputFiedContainer}
              keyboardType="email-address"
              inputStyle={styles.inputText}
              // onChangeText={(v) => this.setState({ number: v })}
              // value={this.state.number}
            />
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "space-between",
                // marginRight: 30,
              }}
            >
              <Input
                label="Date of Birth"
                labelStyle={styles.labelText}
                textContentType="emailAddress"
                inputContainerStyle={styles.inputFiedContainer}
                keyboardType="email-address"
                inputStyle={styles.inputText}
                // onChangeText={(v) => this.setState({ number: v })}
                // value={this.state.number}
              />
              <View style={{ marginLeft: -40 }}>
                <Image
                  source={global.ASSETS.CALENDAR}
                  style={{
                    width: 26,
                    height: 26,
                    alignSelf: "center",
                    resizeMode: "contain",
                    shadowColor: "gray",
                    marginTop: 28,
                    // marginLeft: -20,
                  }}
                />
              </View>
            </View>

            <View style={styles.locationContainer}>
              <Input
                label="Your Address"
                labelStyle={styles.labelText}
                textContentType="emailAddress"
                inputContainerStyle={styles.inputFiedContainer}
                keyboardType="email-address"
                inputStyle={styles.inputText}
                // onChangeText={(v) => this.setState({ number: v })}
                // value={this.state.number}
              />
              <View>
                <Image
                  source={location}
                  style={{
                    width: 26,
                    height: 26,
                    alignSelf: "center",
                    resizeMode: "contain",
                    shadowColor: "gray",
                    marginTop: 28,
                    marginLeft: -56,
                  }}
                />
              </View>
            </View>
            <View>
              <Button
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonStyle}
                // loading={this.state.buttonLoading}
                title="Sign in"
                titleStyle={styles.buttonTitle}
                TouchableComponent={TouchableOpacity}
                onPress={
                  () => this.handleValidate()
              
                }
              />
            </View>
            <View
              style={{
                alignSelf: "center",
                marginTop: 36,
                flexDirection: "row",
              }}
            >
              <Text style={styles.account1Text}>You Don't have an acount?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={styles.signupText}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    justifyContent: "center",
  },
  upperContainer: {
    height: 100,
    backgroundColor: "#087407",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  accountText: {
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 30,
  },
  inputText: {
    color: "#000",
    fontSize: 16,
    marginRight: 40,
    borderBottomWidth: null,
    // width: 100,
  },
  inputFiedContainer: {
    borderBottomWidth: 1,
    // marginRight: 30,
  },
  inputContainer: {
    // flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 10,
    marginRight: 20,
  },
  datePicker: {
    width: 360,
    borderBottomWidth: 0,
    borderWidth: 0,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignSelf: "center",
    // marginHorizontal: 70
  },
  buttonStyle: {
    backgroundColor: "green",
    height: 50,
    width: 320,
    borderRadius: 40,
    marginTop: 10,
  },
  buttonTitle: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 18,
  },
  account1Text: {
    color: "gray",
    // alignSelf: "flex-end",
    fontSize: 14,
    // marginHorizontal: 10,
    // marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: "#087407",
    fontWeight: "bold",
    // marginLeft: -5,
  },
});
