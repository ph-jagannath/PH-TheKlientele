import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Text, StyleSheet, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Icon, Input } from "react-native-elements";
import global from "../../global";

export default class addToCartScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ScrollView style={styles.bgContainer}>
        <View style={{ backgroundColor: "#040402" }}>
          <View style={styles.headerContainer}>
            <View style={styles.iconContaier}>
              <View style={{ width: 40 }}>
                <TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Payment")}
            style={styles.addContainer}
            TouchableComponent={TouchableOpacity}
          >
            <Text style={styles.countText}>ADD TO CART</Text>
          </TouchableOpacity>
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
            <View style={styles.radioButtonContainer}>
              <View style={styles.radioButton}></View>
              <Text style={styles.homeText}>A Mess Free Haircut</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <View style={styles.radioButton}></View>
              <Text style={styles.homeText}>A Mess Free Haircut</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <View style={styles.radioButton}></View>
              <Text style={styles.homeText}>A Mess Free Haircut</Text>
            </View>
            <View style={{ height: 8, backgroundColor: "#D2D4D8" }}></View>
            <Text style={styles.klienteleText}>Recommeded For</Text>
            <View style={styles.radioButtonContainer}>
              <View style={styles.radioButton}></View>
              <Text style={styles.homeText}>All Hair Types</Text>
            </View>
            <View style={{ height: 8, backgroundColor: "#D2D4D8" }}></View>
            <Text style={styles.klienteleText}>What our Customers Say</Text>
            <View style={styles.imageBackContainer}>
              <View style={styles.nameContainer}>
                <View>
                  <Image
                    source={global.ASSETS.PROFILE}
                    style={{ marginRight: 10 }}
                  />
                </View>
                <View>
                  <Text style={styles.nameText}>Amit Tiwari</Text>
                  <Text style={styles.addressText}>
                    Jaipur <Text style={styles.dotText}>.</Text> 14 Aug 2020
                  </Text>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <Image
                  source={global.ASSETS.RATING}
                  style={{ marginTop: 4, marginRight: 4 }}
                />
                <Text style={styles.nameText}>5.0</Text>
              </View>
            </View>
            <View style={styles.commentContainer}>
              <Icon
                name="format-quote-open-outline"
                color="gray"
                type="material-community"
                size={20}
                iconStyle={styles.quotIon}
              />
              <Text style={styles.commentText}>
                Nice and friendly bahave with professionalism... thanks
                Klientele fro a nice service
              </Text>
            </View>
            <View
              style={{
                height: 0.5,
                backgroundColor: "gray",
                marginVertical: 16,
              }}
            ></View>
            <View style={styles.imageBackContainer}>
              <View style={styles.nameContainer}>
                <View>
                  <Image
                    source={global.ASSETS.PROFILE}
                    style={{ marginRight: 10 }}
                  />
                </View>
                <View>
                  <Text style={styles.nameText}>Amit Tiwari</Text>
                  <Text style={styles.addressText}>
                    Jaipur <Text style={styles.dotText}>.</Text> 14 Aug 2020
                  </Text>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <Image
                  source={global.ASSETS.RATING}
                  style={{ marginTop: 4, marginRight: 4 }}
                />
                <Text style={styles.nameText}>5.0</Text>
              </View>
            </View>
            <View style={styles.commentContainer}>
              <Icon
                name="format-quote-open-outline"
                color="gray"
                type="material-community"
                size={20}
                iconStyle={styles.quotIon}
              />
              <Text style={styles.commentText}>
                Nice and friendly bahave with professionalism... thanks
                Klientele fro a nice service
              </Text>
            </View>
            <View
              style={{
                height: 0.5,
                backgroundColor: "gray",
                marginVertical: 16,
              }}
            ></View>
          </ScrollView>
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
    marginTop: -20,
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
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
    // fontWeight: "",
    marginTop: 14,
  },
  bottomContainer: {
    flex: 0.4,
    marginTop: 50,
  },
  klienteleText: {
    fontSize: 14,
    fontWeight: "bold",
    // alignSelf: "center",
    margin: 10,
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
  nameContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  nameText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  addressText: {
    fontSize: 12,
    color: "gray",
  },
  dotText: {
    // fontSize: 20,
    color: "gray",
    // marginBottom: 30,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  imageBackContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 14,
  },
  commentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 70,
  },
  commentText: {
    width: 280,
    // margin: 10,
    fontSize: 14,
    color: "gray",
  },
});
