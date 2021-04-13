import React, { Component } from "react";
import { Button, Input, Overlay, Divider } from "react-native-elements";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import slide from "../../assets/slide-01.png";
import global from "../../global";
import { ScrollView } from "react-native-gesture-handler";

const BannerWidth = Dimensions.get("window").width;
const BannerHeight = 260;

const slides = [
  {
    key: "s1",
    text: "Man's Haircur & Good morning",
    title: "Freedom sale Deals Last 3 days",
    image: require("../../assets/img1.png"),
    backgroundColor: "#20d2bb",
    image1: require("../../assets/logo.png"),
  },
  {
    key: "s2",
    text: "Man's Haircur & Good morning",
    title: "Freedom sale Deals Last 3 days",
    image: require("../../assets/img1.png"),
    backgroundColor: "#febe29",
    image1: require("../../assets/logo.png"),
  },
  {
    key: "s3",
    text: "Man's Haircur & Good morning",
    title: "Freedom sale Deals Last 3 days",
    image: require("../../assets/img1.png"),
    backgroundColor: "#22bcb5",
    image1: require("../../assets/logo.png"),
  },
];

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  _renderItem = ({ item, index: i }) => {
    return (
      <ScrollView style={styles.bgContainer}>
        <View style={styles.slideContainer}>
          <Image source={item.image} style={styles.image} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Image source={global.ASSETS.MENU} style={styles.menuImage} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => this.props.navigation.navigate("Location")}
              >
                <Image
                  source={global.ASSETS.FINDLOCATION}
                  style={styles.menuImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => this.props.navigation.navigate("Gender")}
              >
                <Image
                  source={global.ASSETS.PROFILE}
                  style={styles.menuImage}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.text}</Text>
            <Text style={styles.text}>{item.title}</Text>
            <View>
              <Button
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonStyle}
                // loading={this.state.buttonLoading}
                title="GET UPTO 50% OFF"
                titleStyle={styles.buttonTitle}
                TouchableComponent={TouchableOpacity}
                // onPress={() => this.props.navigation.navigate("loginScreen")}
              />
            </View>
          </View>
        </View>
        <View
          showsVerticalScrollIndicator={false}
          style={styles.bottomContainer}
        >
          <Text style={styles.selectText}>Select Service</Text>

          <View style={styles.imageContainer}>
            <TouchableOpacity
              style={styles.innerContainer}
              onPress={() => this.props.navigation.navigate("Shopper")}
            >
              <Image source={item.image1} style={styles.profileImage} />
              <Text style={styles.packagetext}>Package Deals</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.innerContainer}>
              <Image source={item.image1} style={styles.profileImage} />
              <Text style={styles.packagetext}>Freedom Deals</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerContainer}>
              <Image source={item.image1} style={styles.profileImage} />
              <Text style={styles.packagetext}>Haircur For Men & Kids</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.innerContainer}>
              <Image source={item.image1} style={styles.profileImage} />
              <Text style={styles.packagetext}>Package Deals</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.innerContainer}>
              <Image source={item.image1} style={styles.profileImage} />
              <Text style={styles.packagetext}>Freedom Deals</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerContainer}>
              <Image source={item.image1} style={styles.profileImage} />
              <Text style={styles.packagetext}>Haircur For Men & Kids</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.innerContainer}>
              <Image source={item.image1} style={styles.profileImage} />
              <Text style={styles.packagetext}>Package Deals</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.innerContainer}>
              <Image source={item.image1} style={styles.profileImage} />
              <Text style={styles.packagetext}>Freedom Deals</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.innerContainer}>
              <Image source={item.image1} style={styles.profileImage} />
              <Text style={styles.packagetext}>Haircur For Men & Kids</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };

  // _onDone = () => {
  //   // User finished the introduction. Show real app through
  //   // navigation or simply by controlling state
  //   this.props.navigation.navigate("forgotScreen");
  //   this.setState({ showRealApp: true });
  // };
  render() {
    if (this.state.showRealApp) {
      return <HomeScreen />;
    } else {
      return (
        <AppIntroSlider
          data={slides}
          renderItem={this._renderItem}
          style={{ height: 100, marginTop: -70 }}
          // onDone={this._onDone}
          // onSkip={this._onDone}
          // skipLabel="Skip"
          showSkipButton={false}
          showNextButton={false}
          showDoneButton={false}
          dotClickEnabled={true}
          dotStyle={{ backgroundColor: "#fff", marginTop: -740 }}
          // dotClickEnabled={true}
          activeDotStyle={{
            backgroundColor: "green",
            height: 10,
            width: 50,
            marginTop: -740,
          }}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
  },
  image: {
    // height: 400,
    // width: 430,
    alignSelf: "center",
    // marginTop: global.CONSTANT.STATUSBAR,
    resizeMode: "contain",
  },
  slideContainer: {
    flex: 0.2,
    width: null,
    marginBottom: 4,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    // marginHorizontal: 10,

    // marginTop: 30
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    marginTop: 10,
  },
  textContainer: {
    marginTop: -200,
  },
  buttonContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    // height: 100,
    // width: 320,
    // marginHorizontal: 70
  },
  buttonStyle: {
    backgroundColor: "yellow",
    height: 36,
    width: 200,
    borderRadius: 40,
    marginTop: 20,
  },
  buttonTitle: {
    color: "#000",
    // fontWeight: "bold",
    fontSize: 10,
  },
  menuImage: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  menuButton: {
    marginTop: -410,
    marginHorizontal: 10,
  },
  bottomContainer: {
    // flex: 0.6,
    marginTop: 80,
    marginHorizontal: 20,
    height: 600,
  },
  selectText: {
    fontSize: 24,
    fontWeight: "900",
    marginVertical: 20,
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // margin: 10,
  },
  flatlist: {
    width: null,
  },
  profileImage: {
    height: 90,
    width: 90,
    resizeMode: "contain",
    alignSelf: "center",
    // marginHorizontal: 30,
  },
  innerContainer: {
    flexDirection: "column",
    marginBottom: 30,
  },
  packagetext: {
    fontSize: 10,
    width: 100,
    textAlign: "center",
    alignSelf: "center",
    color: "#000",
    fontWeight: "bold",
  },
});
