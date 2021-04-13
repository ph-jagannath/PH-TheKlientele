import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

// import { TouchableOpacity } from "react-native-gesture-handler";
import global from "../../global";
import { Divider } from "react-native-elements";

export default class drawerScreen extends Component {
  render() {
    return (
      <View style={styles.bgContainer}>
        <View style={{ marginHorizontal: 20, marginTop: 60 }}>
          <Image source={global.ASSETS.PROFILE} />
          <Text style={styles.nameText}>KLIENTELE</Text>
          <Text style={styles.emailText}>klientele68@gmail.com</Text>
          <TouchableOpacity
            style={styles.genderContainer}
            onPress={() => this.props.navigation.navigate("Gender")}
          >
            <Text style={styles.genderText}>CHANGE GENDER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileContainer}>
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.PROFILEICON} style={styles.image} />
              <Text style={styles.rightText}>Profile</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => this.props.navigation.navigate("")}
          >
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.PAYMENT} style={styles.image} />
              <Text style={styles.rightText}>Payment History</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileContainer}>
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.INVITE} style={styles.image} />
              <Text style={styles.rightText}>Invite and share app</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => this.props.navigation.navigate("Faq")}
          >
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.CHAT} style={styles.image} />
              <Text style={styles.rightText}>FAQ</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileContainer}>
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.CONTACT} style={styles.image} />
              <Text style={styles.rightText}>Contact Us</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => this.props.navigation.navigate("TermsScreen")}
          >
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.TERMS} style={styles.image} />
              <Text style={styles.rightText}>Terms & Conditions</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileContainer}>
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.SETTING} style={styles.image} />
              <Text style={styles.rightText}>Settings</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>

          {/* <Divider style={styles.divider}></Divider> */}
        </View>
        <Divider style={styles.divider} />
        <View style={{ marginHorizontal: 20 }}>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <View style={styles.leftContainer}>
              <Image source={global.ASSETS.LOGOUT} style={styles.image} />
              <Text style={styles.rightText}>Logout</Text>
            </View>
            <View>
              <Image source={global.ASSETS.NEXTARROW} style={styles.image1} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    marginRight: 100,
    // justifyContent: "center",
    backgroundColor: "#fff",

    // justifyContent: "center",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  emailText: {
    fontSize: 8,
    fontWeight: "bold",
  },
  genderContainer: {
    borderWidth: 0.6,
    borderColor: "green",
    borderRadius: 5,
    marginVertical: 20,
    // marginHorizontal: 40,
  },
  genderText: {
    fontSize: 8,
    padding: 10,
    alignSelf: "center",
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginTop: 2,
  },
  rightText: {
    fontSize: 12,
    fontWeight: "700",
    marginHorizontal: 20,
    marginTop: 3,
    color: "gray",
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  image1: {
    marginTop: 5,
  },
  divider: {
    backgroundColor: "gray",
    // marginHorizontal: 24,
    marginTop: 140,
    marginBottom: 20,
  },
});
