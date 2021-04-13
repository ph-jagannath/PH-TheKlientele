import React, { Component } from "react";

import { Text, StyleSheet, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import global from "../../global";
import RadioButtonRN from "radio-buttons-react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { Divider, Icon } from "react-native-elements";

// import ImageOverlay from "react-native-image-overlay";

// const TalkBubble = () => {
//   return (
//     <View style={styles.talkBubble}>
//       <View style={styles.talkBubbleSquare} />
//       <View style={styles.talkBubbleTriangle} />
//     </View>
//   );
// };
export default class paymentScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    // this.console.log("ukhyufg");
    if (this.state.clicks >= 1) {
      this.setState({ clicks: this.state.clicks - 1 });
    }
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <View style={styles.bgContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.iconContaier}>
            <View style={{ width: 40 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Terms")}
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
        <View style={styles.itemContainer}>
          <Text>Item Total</Text>
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "",
              // marginHorizontal: 5,
            }}
          >
            <Text style={styles.leftDollarText}>$315</Text>
            <Text style={styles.rightDollarText}>$199</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Text>Safety & Hygiene fee</Text>
          <View>
            <Text style={styles.rightDollarText}>$49</Text>
          </View>
        </View>
        <View style={styles.talkBubble}>
          {/* <View style={styles.diamond} /> */}
          <Image
            source={global.ASSETS.ONE}
            style={{
              height: 20,
              width: 20,
              resizeMode: "contain",
              marginLeft: 44,
              // marginTop: 24,
            }}
          />
          <View style={styles.talkBubbleSquare}>
            <Text style={styles.text}>
              This fee helps us follow on 7-step hygiene protocol
            </Text>
            <Text style={styles.bottomText}>
              Including use of fredh masks, gloves & sanitizer for every service
            </Text>
          </View>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text> Total</Text>
          <Text style={styles.rightDollarText}>$248</Text>
        </View>
        <Text style={styles.savingText}>You're saving $116</Text>
        <Divider style={styles.grayDivider} />
        <View style={styles.imageBackContainer}>
          <View style={styles.imageContainer}>
            <Image source={global.ASSETS.PERCENT} style={styles.percentImage} />
            <View style={styles.textContainer}>
              <Text style={styles.offerText}>
                Offers, promo code and gift cards
              </Text>
              <Text style={styles.availableText}>4 offers available</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("PromoCode")}
          >
            <Image source={global.ASSETS.GRAYARROW} />
          </TouchableOpacity>
        </View>
        <Divider style={styles.grayDivider} />
        <View style={styles.cashBackContainer}>
          <TouchableOpacity style={styles.cashContainer}>
            <Text style={styles.cashText}>Cash On Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cashContainer}>
            <Text style={styles.cashText}>Online Payment</Text>
          </TouchableOpacity>
        </View>
        <Divider style={styles.grayDivider} />
        <View style={styles.haicutContainre}>
          <View>
            <Text style={styles.haircutText}>Hair Cut</Text>
          </View>
          <View style={styles.greenBackContainer}>
            <View style={styles.greenContainer}>
              <TouchableOpacity onPress={() => this.DecreaseItem()}>
                <Icon
                  name="minus"
                  color="#fff"
                  type="material-community"
                  size={20}
                  iconStyle={styles.icon1}
                />
              </TouchableOpacity>
              <View style={styles.textNumContainer}>
                <Text style={styles.numberText}>{this.state.clicks}</Text>
              </View>
              <TouchableOpacity onPress={() => this.IncrementItem()}>
                <Icon
                  name="plus"
                  color="#fff"
                  type="material-community"
                  size={20}
                  iconStyle={styles.icon2}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.dollarText}>$315</Text>
              <Text style={styles.dollarRightText}>$199</Text>
            </View>
          </View>
        </View>
        <View style={styles.radioButtonContainer}>
          <View style={styles.radioButton}></View>
          <Text style={styles.homeText}>Hair Cut</Text>
        </View>
        <View style={styles.bottomGreenContainer}>
          <Text style={styles.saveText}>Save extra $20 on this booking</Text>
          <Text style={styles.offText}>
            and 10% off upto $299 on all Beauty, spa and Massage{"\n"}Services
          </Text>
        </View>
        <TouchableOpacity
          style={styles.blueContainer}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={styles.priceDollarText}> Pay $248</Text>
        </TouchableOpacity>
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
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    // marginTop: 5,
  },
  leftDollarText: {
    fontSize: 14,
    color: "gray",
    // marginTop: 3,
  },
  dollarText: {
    fontSize: 10,
    color: "gray",
    marginLeft: 10,
    // marginTop: 3,
  },
  dollarRightText: {
    fontSize: 14,
    // marginLeft: 10,
  },
  rightDollarText: {
    fontSize: 16,
    marginLeft: 10,
  },
  talkBubble: {
    // backgroundColor: "transparent",
    marginTop: 10,
  },
  talkBubbleSquare: {
    // width: 340,
    // height: 90,
    backgroundColor: "#F3FFF3",
    borderRadius: 10,
    marginHorizontal: 24,
    borderWidth: 0.5,
    borderColor: "gray",
    top: -10,
    // marginLeft: 40,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
    left: 50,

    // bottom: -20,
    top: -109,
    // borderColor: "gray",
    // borderWidth: 2,
  },
  diamond: {
    width: 20,
    height: 20,
    backgroundColor: "#F3FFF3",
    transform: [{ rotate: "45deg" }],
    borderWidth: 0.5,
    borderColor: "gray",
    // top: 110,
    left: 50,
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    paddingTop: 16,
    marginHorizontal: 10,
  },
  bottomText: {
    fontSize: 10,
    paddingBottom: 16,
    marginHorizontal: 10,
  },
  divider: {
    backgroundColor: "gray",
    marginHorizontal: 24,
    marginTop: 10,
  },
  savingText: {
    color: "green",
    alignSelf: "flex-end",
    marginHorizontal: 20,
    fontSize: 10,
  },
  grayDivider: {
    backgroundColor: "#D3D3D3",
    height: 10,
    marginVertical: 20,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  percentImage: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    // marginLeft: 10,
  },
  offerText: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: -10,
  },
  availableText: {
    fontSize: 10,
    marginTop: 2,
  },
  textContainer: {
    marginHorizontal: 10,
  },
  imageBackContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  greenContainer: {
    backgroundColor: "green",
    // marginHorizontal: 60,
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 120,
    height: 40,
  },
  textNumContainer: {
    backgroundColor: "#fff",
    marginVertical: 1,
  },
  numberText: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
    padding: 6,
  },
  minImage: {
    height: 14,
    width: 14,
    resizeMode: "contain",
    marginHorizontal: 16,
  },
  greenBackContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  haircutText: {
    fontWeight: "bold",
    fontSize: 12,
    alignSelf: "center",
    marginTop: 6,
  },
  haicutContainre: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  radioButton: {
    height: 10,
    width: 10,
    backgroundColor: "#D2D4D8",
    borderRadius: 40,
    // marginTop: 18,
    // marginLeft: 20,
  },
  radioButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 18,
  },
  homeText: {
    width: 340,
    marginLeft: 10,
    fontSize: 14,
    color: "gray",
    marginTop: -8,
  },
  bottomGreenContainer: {
    backgroundColor: "#F3FFF3",
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  saveText: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
  offText: {
    color: "green",
    fontSize: 10,
    // fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
  },
  blueContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 16,
    backgroundColor: "green",
    borderRadius: 5,
    marginVertical: 14,
    height: 60,
    // marginTop: 260,
    // alignSelf: "baseline",
  },
  priceDollarText: {
    fontSize: 14,
    color: "yellow",
    alignSelf: "center",
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  icon1: {
    // marginTop: 4,
    alignSelf: "center",
    marginLeft: 16,
  },
  icon2: {
    alignSelf: "center",
    marginRight: 16,
  },
  cashContainer: {
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 20,
  },
  cashText: {
    fontSize: 14,
    fontWeight: "bold",
    padding: 5,
    color: "green",
  },
  cashBackContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
