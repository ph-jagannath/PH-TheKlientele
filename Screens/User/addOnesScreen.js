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
export default class addOnesScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.bgContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.iconContaier}>
            <View style={{ width: 40 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("HairCutDetails")}
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

        <Text style={styles.topText}>
          Most Popular Add-ons in your {"\n"}Area
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cardFlexContainer}>
            <View style={styles.cardContainer}>
              <View style={styles.upperContainer}>
                <Text style={styles.centerText}>
                  I don't require{"\n"}any add-ons
                </Text>
                <Image
                  source={global.ASSETS.CHECK}
                  style={{
                    height: 38,
                    width: 38,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: -44,
                  }}
                />
              </View>
              <View>
                <Text style={styles.bottomText}>
                  I do not require any add-ons
                </Text>
              </View>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.upperContainer}>
                <Image
                  source={global.ASSETS.CLIENT}
                  style={{
                    height: 138,
                    width: 160,
                    resizeMode: "cover",
                    alignSelf: "center",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    // marginTop: -44,
                  }}
                />
              </View>
              <View>
                <Text style={styles.bottomText}>Claen Shave- $149</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardFlexContainer}>
            <View style={styles.cardContainer}>
              <View style={styles.upperContainer}>
                <Image
                  source={global.ASSETS.CLIENT}
                  style={{
                    height: 138,
                    width: 160,
                    resizeMode: "cover",
                    alignSelf: "center",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    // marginTop: -44,
                  }}
                />
              </View>
              <View>
                <Text style={styles.bottomText}>
                  I do not require any add-ons
                </Text>
              </View>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.upperContainer}>
                <Image
                  source={global.ASSETS.CLIENT}
                  style={{
                    height: 138,
                    width: 160,
                    resizeMode: "cover",
                    alignSelf: "center",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    // marginTop: -44,
                  }}
                />
              </View>
              <View>
                <Text style={styles.bottomText}>Claen Shave- $149</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardFlexContainer}>
            <View style={styles.cardContainer}>
              <View style={styles.upperContainer}>
                <Image
                  source={global.ASSETS.CLIENT}
                  style={{
                    height: 138,
                    width: 160,
                    resizeMode: "cover",
                    alignSelf: "center",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    // marginTop: -44,
                  }}
                />
              </View>
              <View>
                <Text style={styles.bottomText}>
                  I do not require any add-ons
                </Text>
              </View>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.upperContainer}>
                <Image
                  source={global.ASSETS.CLIENT}
                  style={{
                    height: 138,
                    width: 160,
                    resizeMode: "cover",
                    alignSelf: "center",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    // marginTop: -44,
                  }}
                />
              </View>
              <View>
                <Text style={styles.bottomText}>Claen Shave- $149</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardFlexContainer}>
            <View style={styles.cardContainer}>
              <View style={styles.upperContainer}>
                <Image
                  source={global.ASSETS.CLIENT}
                  style={{
                    height: 138,
                    width: 160,
                    resizeMode: "cover",
                    alignSelf: "center",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    // marginTop: -44,
                  }}
                />
              </View>
              <View>
                <Text style={styles.bottomText}>
                  I do not require any add-ons
                </Text>
              </View>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.upperContainer}>
                <Text style={styles.centerText}>
                  I don't require{"\n"}any add-ons
                </Text>
                <Image
                  source={global.ASSETS.CHECK}
                  style={{
                    height: 38,
                    width: 38,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: -44,
                  }}
                />
              </View>
              <View>
                <Text style={styles.bottomText}>Claen Shave- $149</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardFlexContainer}>
            <View style={styles.cardContainer}>
              <View style={styles.upperContainer}>
                <Text style={styles.centerText}>
                  I don't require{"\n"}any add-ons
                </Text>
                <Image
                  source={global.ASSETS.CHECK}
                  style={{
                    height: 38,
                    width: 38,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: -44,
                  }}
                />
              </View>
              <View>
                <Text style={styles.bottomText}>
                  I do not require any add-ons
                </Text>
              </View>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.upperContainer}>
                <Text style={styles.centerText}>
                  I don't require{"\n"}any add-ons
                </Text>
                <Image
                  source={global.ASSETS.CHECK}
                  style={{
                    height: 38,
                    width: 38,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: -44,
                  }}
                />
              </View>
              <View>
                <Text style={styles.bottomText}>Claen Shave- $149</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.blueContainer}
          onPress={() => this.props.navigation.navigate("Terms")}
        >
          <Text style={styles.priceDollarText}>NEXT</Text>
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
  topText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },
  cardContainer: {
    borderRadius: 4,
    width: 160,
    height: 200,
    borderWidth: 0.1,
    borderColor: "gray",
    // backgroundColor: "red",
  },
  upperContainer: {
    backgroundColor: "green",
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
  },
  centerText: {
    fontSize: 18,
    color: "yellow",
    textAlign: "center",
  },
  bottomText: {
    fontSize: 14,
    // color: "yellow",
    textAlign: "left",
    marginHorizontal: 10,
  },
  cardFlexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginTop: 24,
  },
  blueContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 16,
    backgroundColor: "#1F293B",
    borderRadius: 5,
    marginTop: 14,
    height: 60,
    // marginTop: 260,
    // alignSelf: "baseline",
  },
  priceDollarText: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
