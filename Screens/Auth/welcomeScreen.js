import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button } from "react-native-elements";
import slide from "../../assets/slide-01.png";
import Carousel from "react-native-banner-carousel";
import loginScreen from "../../Screens/Auth/loginScreen";
import GradientButton from "react-native-gradient-buttons";
import global from "../../global";

const BannerWidth = Dimensions.get("window").width;
const BannerHeight = 260;

const images = [
  "http://xxx.com/1.png",
  "http://xxx.com/2.png",
  "http://xxx.com/3.png",
];
export default class welcomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  renderPage(image, index) {
    return (
      <View key={index}>
        <Image style={{ width: BannerWidth, height: 430 }} source={slide} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.9 }}>
          <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}
            //   pageIndicatorContainerStyle={{ marginTop: 600 }}
            //   showsPageIndicator={true}
          >
            {images.map((image, index) => this.renderPage(image, index))}
          </Carousel>
          {/* <ImageBackground
          source={background}
          style={styles.imageContainer}
          imageStyle={{ resizeMode: "stretch" }}
        ></ImageBackground> */}
          <Text style={styles.upperText}> Find barbershop nearby </Text>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>
              Choose our Mackup special offer Price
            </Text>
            <Text style={styles.bottomText}>
              Package that fit your lifestyle
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.2, marginTop: 90 }}>
          <View style={styles.buttonContainer}>
            <GradientButton
              text="Get Started"
              textStyle={{ fontSize: 16 }}
              gradientBegin="#0EF700"
              gradientEnd="#087407"
              gradientDirection="diagonal"
              height={50}
              width={300}
              radius={26}
              impact
              impactStyle="Light"
              onPressAction={() => this.props.navigation.navigate("Login")}
              // onPress={() => this.props.navigation.navigate("Login")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "#fff",
  },
  upperText: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 20,
  },
  bottomText: {
    fontSize: 16,
    alignSelf: "center",
    marginTop: 6,
  },
  bottomTextContainer: {
    marginHorizontal: 30,
    marginTop: 20,
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
    // marginTop: 70,
  },
  buttonTitle: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 18,
  },
});
