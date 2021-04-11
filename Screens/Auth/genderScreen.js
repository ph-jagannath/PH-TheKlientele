import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Text, StyleSheet, View, Image } from "react-native";
import global from "../../global";
import * as Animatable from "react-native-animatable";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export default class genderScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      selected: 2,
    };
  }

  render() {
    return (
      <View style={styles.bgContainer}>
        <ImageBackground
          source={global.ASSETS.IMG}
          style={styles.upperContainer}
        >
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>
              Welcome to <Text style={styles.klienteleText}>KLIENTELE</Text>
            </Text>
            <Text style={styles.morningText}>Man's Haircut & Good morning</Text>
          </View>
        </ImageBackground>
        <View style={styles.bottomContainer}>
          <Text style={styles.selectText}>Select Service</Text>
          <View style={styles.imageContainer}>
            <TouchableWithoutFeedback
              onPress={() =>
                this.setState({
                  selected: "2",
                })
              }
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Location")}
              >
                {this.state.selected == "2" ? (
                  <Image
                    source={global.ASSETS.ACTIVEFEMALE}
                    style={styles.image}
                  />
                ) : (
                  <Image source={global.ASSETS.FEMALE} style={styles.image} />
                )}
              </TouchableOpacity>
              <View style={styles.genderContainer}>
                <Text
                  style={{
                    color: this.state.selected == "2" ? "green" : "gray",
                  }}
                >
                  FEMALE
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                this.setState({
                  selected: "3",
                })
              }
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Location")}
              >
                {this.state.selected == "3" ? (
                  <Image
                    source={global.ASSETS.ACTIVEMALE}
                    style={styles.image}
                  />
                ) : (
                  <Image source={global.ASSETS.MALE} style={styles.image} />
                )}
              </TouchableOpacity>
              <View style={styles.genderContainer}>
                <Text
                  style={{
                    color: this.state.selected == "3" ? "green" : "gray",
                  }}
                >
                  MALE
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <TouchableWithoutFeedback
            onPress={() =>
              this.setState({
                selected: "4",
              })
            }
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Location")}
            >
              {this.state.selected == "4" ? (
                <Image source={global.ASSETS.ACTIVEMALE} style={styles.image} />
              ) : (
                <Image source={global.ASSETS.MALE} style={styles.image} />
              )}
            </TouchableOpacity>
            <View style={styles.genderContainer}>
              <Text
                style={{
                  color: this.state.selected == "4" ? "green" : "gray",
                }}
              >
                TRANSGENDER
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              this.setState({
                selected: "5",
              })
            }
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Location")}
            >
              {this.state.selected == "5" ? (
                <Image source={global.ASSETS.ACTIVEMALE} style={styles.image} />
              ) : (
                <Image source={global.ASSETS.MALE} style={styles.image} />
              )}
            </TouchableOpacity>
            <View style={styles.genderContainer}>
              <Text
                style={{
                  color: this.state.selected == "5" ? "green" : "gray",
                }}
              >
                KIDS
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
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
    flex: 1,

    justifyContent: "center",
    // backgroundColor: "#000",
  },
  bottomContainer: {
    flex: 0.5,
    // marginTop: 30,
    // justifyContent: "center",
    // alignItems: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    marginVertical: 20,
  },
  klienteleText: {
    color: "yellow",
  },
  morningText: {
    color: "#fff",
    alignSelf: "center",
  },
  welcomeContainer: {
    marginTop: 200,
  },
  selectText: {
    fontSize: 26,
    alignSelf: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 40,
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: "contain",
    // marginTop: 20,
    alignSelf: "center",
  },
  genderContainer: {
    alignSelf: "center",
  },
});
