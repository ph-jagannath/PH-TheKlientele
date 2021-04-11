import React, { Component } from "react";
import { Image } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
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
export default class carousel extends Component {
  _renderItem({ item, index }, parallaxProps) {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <ParallaxImage
          source={item.image}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  }

  render() {
    return (
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        layout={"tinder"}
        data={slides}
        renderItem={this._renderItem}
        sliderWidth={400}
        itemWidth={200}
        ParallaxImage={true}
      />
    );
  }
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
