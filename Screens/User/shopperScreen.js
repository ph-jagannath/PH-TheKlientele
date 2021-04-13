import React, { Component, useState } from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  LogBox,
  //   YellowBox,
} from "react-native";
import {
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Icon, Input, Button, Overlay } from "react-native-elements";
import global from "../../global";
import { add } from "react-native-reanimated";

// console.disableYellowBox = false;
//Ignore all log notifications
const DATA = [
  {
    key: "s1",
    text: "Shop Name",
    rating: "4.79 ",
    rating1: "(72.7k ratings)",
    price: "$199",
    price1: "$310",
    time: "33 min",
    image: require("../../assets/image.png"),
  },
  {
    key: "s2",
    text: "Shop Name",
    rating: "4.79 ",
    rating1: "(72.7k ratings)",
    price: "$199",
    price1: "$310",
    time: "33 min",
    image: require("../../assets/image.png"),
  },
  {
    key: "s3",
    text: "Shop Name",
    rating: "4.79 ",
    rating1: "(72.7k ratings)",
    price: "$199",
    price1: "$310",
    time: "33 min",
    image: require("../../assets/image.png"),
  },
  {
    key: "s4",
    text: "Shop Name",
    rating: "4.79 ",
    rating1: "(72.7k ratings)",
    price: "$199",
    price1: "$310",
    time: "33 min",
    image: require("../../assets/image.png"),
  },
  {
    key: "s5",
    text: "Shop Name",
    rating: "4.79 ",
    rating1: "(72.7k ratings)",
    price: "$199",
    price1: "$310",
    time: "33 min",
    image: require("../../assets/image.png"),
  },
  {
    key: "s6",
    text: "Shop Name",
    rating: "4.79 ",
    rating1: "(72.7k ratings)",
    price: "$199",
    price1: "$310",
    time: "33 min",
    image: require("../../assets/image.png"),
  },
];

LogBox.ignoreAllLogs();

export default class shopperScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      // selected: false,
      data: DATA,
      isVisival: false,
      clicks: 0,
      show: true,
      id: "",
      Overlay: false,
      user_role: "3",
      selected: 2,
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
  add = (id) => {
    this.setState({
      selected: 1,
      id: id,
    });
  };
  OverlayExample = () => {
    // const [visible, setVisible] = useState(false);
    this.setState({
      Overlay: true,
    });
    // const toggleOverlay = () => {
    //   setVisible(!visible);
  };

  render() {
    return (
      <View style={styles.bgContainer}>
        <View style={styles.topContinaer}>
          <View style={styles.headerContainer}>
            <View style={styles.iconContaier}>
              <View style={{ width: 40 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Home")}
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
                <Text style={styles.headerText}>Nearby Salons</Text>
              </View>
            </View>
            {/* <View>
              <View style={styles.genderImageContainer}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState({
                      selected: "2",
                    })
                  }
                >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("")}
                  >
                    {this.state.selected == "2" ? (
                      <Image
                        source={global.ASSETS.ACTIVEFEMALE}
                        style={styles.image1}
                      />
                    ) : (
                      <Image
                        source={global.ASSETS.FEMALE}
                        style={styles.image1}
                      />
                    )}
                  </TouchableOpacity>
                  <View style={styles.genderContainer}>
                    <Text
                      style={{
                        color: this.state.selected == "2" ? "yellow" : "#000",
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
                    onPress={() => this.props.navigation.navigate("")}
                  >
                    {this.state.selected == "3" ? (
                      <Image
                        source={global.ASSETS.ACTIVEMALE}
                        style={styles.image1}
                      />
                    ) : (
                      <Image
                        source={global.ASSETS.MALE}
                        style={styles.image1}
                      />
                    )}
                  </TouchableOpacity>
                  <View style={styles.genderContainer}>
                    <Text
                      style={{
                        color: this.state.selected == "3" ? "yellow" : "#000",
                      }}
                    >
                      MALE
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState({
                      selected: "4",
                    })
                  }
                >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("")}
                  >
                    {this.state.selected == "4" ? (
                      <Image
                        source={global.ASSETS.ACTIVEMALE}
                        style={styles.image1}
                      />
                    ) : (
                      <Image
                        source={global.ASSETS.MALE}
                        style={styles.image1}
                      />
                    )}
                  </TouchableOpacity>
                  <View style={styles.genderContainer}>
                    <Text
                      style={{
                        color: this.state.selected == "4" ? "yellow" : "#000",
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
                    onPress={() => this.props.navigation.navigate("")}
                  >
                    {this.state.selected == "5" ? (
                      <Image
                        source={global.ASSETS.ACTIVEMALE}
                        style={styles.image1}
                      />
                    ) : (
                      <Image
                        source={global.ASSETS.MALE}
                        style={styles.image1}
                      />
                    )}
                  </TouchableOpacity>
                  <View style={styles.genderContainer}>
                    <Text
                      style={{
                        color: this.state.selected == "5" ? "yellow" : "#000",
                      }}
                    >
                      KIDS
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View> */}
          </View>
          <View style={{ marginHorizontal: 20 }}>
            {/* <Text style={styles.topText}>Haircut For Men & Kids</Text> */}

            <View style={styles.flatlist}>
              <FlatList
                //   horizontal
                showsVerticalScrollIndicator={false}
                data={this.state.data}
                renderItem={({ item: data }) => (
                  <View>
                    <Image source={data.image} style={styles.image} />
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <View>
                          <Text style={styles.categoryText}>{data.text}</Text>
                        </View>

                        <View style={styles.ratingConatiner}>
                          <Image source={global.ASSETS.RATING} />
                          <Text style={styles.ratingText}>{data.rating}</Text>
                          <Text style={styles.ratingText1}>{data.rating1}</Text>
                        </View>
                      </View>

                      {/* <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            isVisival: false,
                          })
                        }
                        style={styles.touchContainer}
                      >
                        <View style={styles.addContainer}>
                          <Text style={styles.addText}>ADD</Text>
                          <Icon
                            name="plus"
                            color="green"
                            type="material-community"
                            size={20}
                            iconStyle={styles.icon}
                          />
                        </View>
                      </TouchableOpacity> */}
                    </View>
                    {/* <View style={styles.ratingConatiner}>
                      <Text style={styles.priceText}>{data.price}</Text>
                      <Text style={styles.ratingText1}>{data.price1}</Text>
                    </View> */}
                    {/* <View style={styles.ratingConatiner}>
                      <Icon
                        name="timer-outline"
                        color="#000"
                        type="material-community"
                        size={16}
                        iconStyle={styles.icon}
                      />
                      <Text style={styles.timeText}>{data.time}</Text>
                    </View> */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={styles.detailsContainer}>
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate("Details")
                          }
                        >
                          <Text style={styles.detailsText}>View Details</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity onPress={() => this.add(data.key)}>
                          {/* {data.key} */}

                          <View
                            style={{
                              borderColor:
                                this.state.id == data.key ? "#087407" : "gray",

                              borderWidth: 1,
                              borderRadius: 40,
                              width: 110,
                              marginVertical: 10,
                            }}
                          >
                            <Text
                              style={{
                                color:
                                  this.state.id == data.key
                                    ? "#087407"
                                    : "gray",
                                fontSize: 10,
                                fontWeight: "bold",
                                padding: 10,
                                alignSelf: "center",
                              }}
                            >
                              Select
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            isVisible={this.state.isVisible}
            style={styles.blueContainer}
            onPress={() => this.props.navigation.navigate("HairCutDetails")}
          >
            <Text style={styles.priceDollarText}>Continue</Text>
          </TouchableOpacity>
          {/* <Overlay
            isVisible={this.state.Overlay}
            overlayStyle={styles.overlay}
            containerStyle={styles.overlayContainer}
            transparent={true}
            // width={global.CONSTANT.WIDTH - 40}
            height={60}
            animationType="slide"
          >
            <View style={styles.switchContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    user_role: "2",
                  });
                }}
              >
                <View
                  style={{
                    borderColor: this.state.user_role == 2 ? "#087407" : "gray",

                    borderWidth: 1,
                    borderRadius: 40,
                    width: 110,
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: this.state.user_role == 2 ? "#087407" : "gray",
                      fontSize: 10,
                      fontWeight: "bold",
                      padding: 10,
                      alignSelf: "center",
                    }}
                  >
                    Home Service
                  </Text>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  borderColor: this.state.user_role == 3 ? "#087407" : "gray",

                  borderWidth: 1,
                  borderRadius: 40,
                  width: 110,
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    color: this.state.user_role == 3 ? "#087407" : "gray",
                    fontSize: 10,
                    fontWeight: "bold",
                    padding: 10,
                    alignSelf: "center",
                  }}
                >
                  Come to Sallon
                </Text>
              </View>

            </View>
          </Overlay> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    // justifyContent: "center",
  },
  headerContainer: {
    // height: 100,
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
    marginTop: 30,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  topText: {
    fontSize: 18,
    fontWeight: "bold",
    // alignSelf: "center",
    // textAlign: "center",
  },
  image: {
    borderRadius: 10,
    width: null,
    marginTop: 10,
    height: 180,
  },
  flatlist: {
    // height: 300,
    marginTop: 30,
    justifyContent: "center",
    marginBottom: 186,
    // marginHorizontal: "3%"
  },
  ratingConatiner: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  ratingText: {
    color: "green",
    fontWeight: "bold",
    fontSize: 10,
  },
  ratingText1: {
    color: "gray",
    fontSize: 10,
    marginHorizontal: 4,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "bold",
    marginVertical: 5,
  },
  addContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 40,
    borderColor: "green",
    borderWidth: 1,
  },
  touchContainer: {
    width: 80,
    marginTop: 10,
  },
  addText: {
    color: "green",
    fontSize: 10,
    fontWeight: "bold",
    marginVertical: 3,
    padding: 3,
  },
  icon: {
    marginTop: 4,
  },

  timeText: {
    color: "gray",
    marginLeft: 6,
    fontSize: 14,
  },
  detailsContainer: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 40,
    // width: 110,
    marginVertical: 10,
    justifyContent: "center",
  },
  detailsText: {
    fontSize: 10,
    fontWeight: "bold",
    padding: 10,
    alignSelf: "center",
    color: "gray",
  },
  greenBackContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  greenContainer: {
    backgroundColor: "green",
    // marginHorizontal: 60,
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 80,
    marginTop: 10,
  },
  textNumContainer: {
    backgroundColor: "#fff",
    height: 32,
    // marginVertical: -1,
  },
  numberText: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 3,
    alignSelf: "center",
    marginBottom: 10,
    paddingHorizontal: 3,
  },
  minImage: {
    height: 10,
    width: 10,
    resizeMode: "contain",
    // marginHorizontal: 16,
  },
  icon1: {
    // marginTop: 4,
    alignSelf: "center",
    marginHorizontal: 4,
  },
  icon2: {
    alignSelf: "center",
    marginHorizontal: 6,
  },
  greenBottomContainer: {
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
  blueContainer: {
    marginHorizontal: 100,
    backgroundColor: "#1F293B",
    borderRadius: 5,
    marginTop: 20,
  },
  priceText: {
    fontSize: 14,
    color: "#000",
    alignSelf: "center",

    // marginTop: ,
  },
  topContinaer: {
    flex: 0.98,
    marginBottom: -80,
  },
  bottomContainer: {
    flex: 0.09,
    backgroundColor: "rgb(255,255,255)",
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 10,
    marginVertical: 18,
  },

  priceDollarText: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
    padding: 10,
    // marginHorizontal: 10,
  },
  buttonContainer: {
    alignSelf: "center",
    // marginHorizontal: 70
  },
  buttonStyle: {
    backgroundColor: "green",
    // height: 50,
    // width: 320,
    borderRadius: 40,
    marginTop: 10,
  },
  buttonTitle: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 10,
    marginHorizontal: 8,
  },
  switchContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  userContainer: {
    backgroundColor: "green",
    borderWidth: 3,
    // height: 40,
    width: 130,
  },
  userText: {
    color: "yellow",
    alignSelf: "center",
    marginVertical: 10,
  },
  overlay: {
    backgroundColor: "#000",
    marginTop: 100,
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 20,
  },
  overlayContainer: {
    backgroundColor: "transparent",
  },
  genderImageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  image1: {
    height: 40,
    width: 40,
    resizeMode: "contain",
    // marginTop: 20,
    alignSelf: "center",
  },
  genderContainer: {
    alignSelf: "center",
  },
});
