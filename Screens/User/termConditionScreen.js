import React, { Component } from "react";
import { Icon } from "react-native-elements";
import { Text, StyleSheet, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import global from "../../global";
import RadioButtonRN from "radio-buttons-react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

// const data = [
//   {
//     // label: "data 1",
//   },
// ];
var radio_props = [{ value: 0 }];

export default class termConditionScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.bgContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.iconContaier}>
            <View style={{ width: 40 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("AddScreen")}
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
            <View>
              <Text style={styles.headerText}>Haircut For Men & Kids</Text>
            </View>
          </View>
        </View>
        {/* <RadioButtonRN
          data={data}
          box={false}
          buttonStyle={{ backgroundColor: "green" }}
          //   boxActiveBgColor={"green"}
          buttonSize={90}
          activeColor={"green"}
          //   selectedBtn={(e) => console.log(e)}
          icon={<Icon name="circle" size={14} color="green" />}
        /> */}
        <View style={styles.radioButtonContainer}>
          <RadioForm
            radio_props={radio_props}
            initial={1}
            buttonSize={10}
            buttonOuterSize={24}
            buttonColor={"green"}
            selectedButtonColor={"green"}
            onPress={(value) => {
              this.setState({ value: value });
            }}
          />
          <Text style={styles.agreeText}>Click Here to agree</Text>
        </View>
        <View style={styles.radioButtonTextContainer}>
          <View style={styles.radioButton}></View>
          <Text style={styles.homeText}>
            A Home safety ensured as you don't nees to step out
          </Text>
        </View>
        <View style={styles.radioButtonTextContainer}>
          <View style={styles.radioButton}></View>
          <Text style={styles.homeText}>
            A Home safety ensured as you don't nees to step out
          </Text>
        </View>
        <View style={styles.radioButtonTextContainer}>
          <View style={styles.radioButton}></View>
          <Text style={styles.homeText}>
            A Home safety ensured as you don't nees to step out
          </Text>
        </View>
        <View style={styles.radioButtonTextContainer}>
          <View style={styles.radioButton}></View>
          <Text style={styles.homeText}>
            A Home safety ensured as you don't nees to step out
          </Text>
        </View>
        <View style={styles.radioButtonTextContainer}>
          <View style={styles.radioButton}></View>
          <Text style={styles.homeText}>
            A Home safety ensured as you don't nees to step out
          </Text>
        </View>
        <TouchableOpacity
          style={styles.blueContainer}
          onPress={() => this.props.navigation.navigate("Payment")}
        >
          <Text style={styles.priceDollarText}>I Agree</Text>
          <Image
            source={global.ASSETS.RIGHTARROWWHITE}
            style={{
              width: 16,
              height: 16,

              resizeMode: "contain",

              marginTop: 24,
              // marginLeft: 22,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    // justifyContent: "center",
    width: null,
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
  radioButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 20,
  },
  agreeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  radioButton: {
    height: 10,
    width: 10,
    backgroundColor: "#D2D4D8",
    borderRadius: 40,
    marginTop: 18,
    marginLeft: 10,
  },
  radioButtonTextContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 24,
  },
  homeText: {
    width: 320,
    margin: 10,
    fontSize: 14,
    color: "gray",
  },
  blueContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 16,
    backgroundColor: "#1F293B",
    borderRadius: 5,
    marginTop: 14,
    height: 60,
    marginTop: 260,
    // alignSelf: "baseline",
  },
  priceDollarText: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
