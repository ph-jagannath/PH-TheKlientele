import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Text, StyleSheet, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import global from "../../global";

export default class haircutMenScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
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
      <ScrollView style={styles.bgContainer}>
        <View style={{ backgroundColor: "#000" }}>
          <View style={styles.headerContainer}>
            <View style={styles.iconContaier}>
              <View style={{ width: 40 }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("HairCutDetails")
                  }
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
        </View>

        <ImageBackground
          source={global.ASSETS.IMG3}
          style={styles.backContaier}
        >
          <View style={{ marginTop: 160 }}>
            <ImageBackground
              source={global.ASSETS.DISCOUNT}
              style={{
                width: 80,
                height: 26,
                alignSelf: "flex-end",
                resizeMode: "contain",
                shadowColor: "gray",
                marginHorizontal: 20,
                marginTop: 40,
                // marginLeft: 22,
                // marginRight: 20,
              }}
            >
              <Text style={styles.offText}>37% off</Text>
            </ImageBackground>
          </View>
          <View style={styles.haircutContainer}>
            <View>
              <Text style={styles.haircutText}>Haircut</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text style={styles.dollarText}>$315</Text>
              <Text style={styles.haircutText}>$199</Text>
            </View>
          </View>
          <View style={styles.addContainer}>
            <View style={styles.plusContainer}>
              <TouchableOpacity onPress={() => this.DecreaseItem()}>
                <Image
                  source={global.ASSETS.MIN}
                  style={{
                    width: 16,
                    height: 16,

                    resizeMode: "contain",

                    marginTop: 14,
                    // marginLeft: 22,
                    // marginRight: 20,
                  }}
                />
              </TouchableOpacity>

              <View style={styles.countContainer}>
                <Text style={styles.countText}> {this.state.clicks}</Text>
              </View>
              <TouchableOpacity onPress={() => this.IncrementItem()}>
                <Image
                  source={global.ASSETS.PLUS}
                  style={{
                    width: 16,
                    height: 16,

                    resizeMode: "contain",

                    marginTop: 14,
                    // marginLeft: 22,
                    // marginRight: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.imageContainer}>
          <Image source={global.ASSETS.IMG3} style={styles.image} />
        </View> */}
        </ImageBackground>
        <View style={styles.bottomContainer}>
          <Text style={styles.klienteleText}>
            Why Klientele Haircut at home is Safer?
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.radioButtonContainer}>
              <View style={styles.radioButton}></View>
              <Text style={styles.homeText}>
                A Home safety ensured as you don't nees to step out
              </Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <View style={styles.radioButton}></View>
              <Text style={styles.homeText}>
                Our Stylist's wear mask & gloves and follow WHO hygiene
                guidelines
              </Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <View style={styles.radioButton}></View>
              <Text style={styles.homeText}>
                A Home safety ensured as you don't nees to step out
              </Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <View style={styles.radioButton}></View>
              <Text style={styles.homeText}>
                A Home safety ensured as you don't nees to step out
              </Text>
            </View>

            <View style={{ height: 8, backgroundColor: "#D2D4D8" }}></View>
            <Text style={styles.klienteleText}>What's included?</Text>
            <View style={styles.radioButtonContainer}>
              <View style={styles.radioButton}></View>
              <Text style={styles.homeText}>A Mess Free Haircut</Text>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={styles.greenContainer}
            onPress={() => this.props.navigation.navigate("Terms")}
          >
            <Text style={styles.clickText}>
              Click to Save $20 on final bill
            </Text>
            <Image
              source={global.ASSETS.RIGHTARROWYELLOW}
              style={{
                width: 16,
                height: 16,

                resizeMode: "contain",

                marginTop: 14,
                // marginLeft: 22,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
          <View style={{ height: 0.6, backgroundColor: "gray" }}></View>
          <TouchableOpacity
            style={styles.blueContainer}
            onPress={() => this.props.navigation.navigate("AddScreen")}
          >
            <View style={styles.leftContainer}>
              <View
                style={{
                  height: 24,
                  width: 24,
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 2,
                }}
              >
                <Text style={styles.priceText}>1</Text>
              </View>
              <Text style={styles.priceDollarText}>$199</Text>
            </View>
            <View style={styles.leftContainer}>
              <Text style={styles.priceDollarText}>Continue</Text>
              <Image
                source={global.ASSETS.RIGHTARROWWHITE}
                style={{
                  width: 16,
                  height: 16,

                  resizeMode: "contain",

                  marginTop: 6,
                  // marginLeft: 22,
                  marginRight: 10,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  image: {
    // height: 400,
    // width: 430,
    alignSelf: "center",
    // marginTop: global.CONSTANT.STATUSBAR,
    resizeMode: "contain",
    marginTop: -40,
  },
  imageContainer: {
    height: 300,
    width: null,
  },
  backContaier: {
    flex: 0.7,
  },
  haircutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    // marginTop: -20,
  },
  haircutText: {
    fontSize: 20,
    color: "#fff",
  },
  dollarText: {
    fontSize: 12,
    color: "#fff",
    marginTop: 10,
    marginHorizontal: 10,
  },
  offText: {
    fontSize: 12,
    color: "red",
    textAlign: "center",
    margin: 3,
    marginLeft: -20,
  },
  addContainer: {
    backgroundColor: "green",
    height: 50,
    width: 300,
    alignSelf: "center",
    borderRadius: 40,
    marginBottom: 80,
    marginTop: 35,
  },
  addText: {
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 4,
  },
  plusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
  },
  countContainer: {
    height: 50,
    width: 100,
    backgroundColor: "#fff",
  },
  countText: {
    fontSize: 20,
    color: "green",
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 6,
  },
  bottomContainer: {
    flex: 0.4,
    marginTop: 20,
  },
  klienteleText: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginHorizontal: 5,
  },
  radioButton: {
    height: 10,
    width: 10,
    backgroundColor: "#D2D4D8",
    borderRadius: 40,
    marginTop: 18,
    marginLeft: 10,
  },
  radioButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  homeText: {
    width: 340,
    margin: 10,
    fontSize: 14,
    color: "gray",
  },
  greenContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green",
    marginHorizontal: 20,
    height: 50,
    borderRadius: 5,
  },
  clickText: {
    fontSize: 12,
    color: "#fff",
    marginTop: 14,
    marginLeft: 10,
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 10,
    marginVertical: 18,
  },
  blueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    backgroundColor: "#1F293B",
    borderRadius: 5,
    marginTop: 14,
  },
  priceText: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
    // marginTop: ,
  },
  priceDollarText: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
