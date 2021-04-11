import React, { Component } from "react";
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
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Icon, Input } from "react-native-elements";
import global from "../../global";
// console.disableYellowBox = false;
//Ignore all log notifications
const DATA = [
  {
    key: "s1",
    text: "Haircut",
    rating: "4.79 ",
    rating1: "(72.7k ratings)",
    price: "$199",
    price1: "$310",
    time: "33 min",
    image: require("../../assets/image.png"),
  },
  {
    key: "s1",
    text: "Haircut",
    rating: "4.79 ",
    rating1: "(72.7k ratings)",
    price: "$199",
    price1: "$310",
    time: "33 min",
    image: require("../../assets/image.png"),
  },
  {
    key: "s1",
    text: "Haircut",
    rating: "4.79 ",
    rating1: "(72.7k ratings)",
    price: "$199",
    price1: "$310",
    time: "33 min",
    image: require("../../assets/image.png"),
  },
  {
    key: "s1",
    text: "Haircut",
    rating: "4.79 ",
    rating1: "(72.7k ratings)",
    price: "$199",
    price1: "$310",
    time: "33 min",
    image: require("../../assets/image.png"),
  },
  {
    key: "s1",
    text: "Haircut",
    rating: "4.79 ",
    rating1: "(72.7k ratings)",
    price: "$199",
    price1: "$310",
    time: "33 min",
    image: require("../../assets/image.png"),
  },
  {
    key: "s1",
    text: "Haircut",
    rating: "4.79 ",
    rating1: "(72.7k ratings)",
    price: "$199",
    price1: "$310",
    time: "33 min",
    image: require("../../assets/image.png"),
  },
];
LogBox.ignoreAllLogs();
export default class hairCutDetailsScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      selected: 2,
      data: DATA,
      isVisival: true,
      clicks: 0,
      show: true,
      select: 2,
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
        <View style={styles.topContinaer}>
          <View style={styles.headerContainer}>
            <View style={styles.iconContaier}>
              <View style={{ width: 40 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Shopper")}
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
                <Text style={styles.headerText}>Select Service</Text>
              </View>
            </View>
            <View>
              <View style={styles.genderImageContainer}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState({
                      select: "2",
                    })
                  }
                >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("")}
                  >
                    {this.state.select == "2" ? (
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
                        color: this.state.select == "2" ? "yellow" : "#000",
                      }}
                    >
                      FEMALE
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState({
                      select: "3",
                    })
                  }
                >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("")}
                  >
                    {this.state.select == "3" ? (
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
                        color: this.state.select == "3" ? "yellow" : "#000",
                      }}
                    >
                      MALE
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState({
                      select: "4",
                    })
                  }
                >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("")}
                  >
                    {this.state.select == "4" ? (
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
                        color: this.state.select == "4" ? "yellow" : "#000",
                      }}
                    >
                      TRANSGENDER
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.setState({
                      select: "5",
                    })
                  }
                >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("")}
                  >
                    {this.state.select == "5" ? (
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
                        color: this.state.select == "5" ? "yellow" : "#000",
                      }}
                    >
                      KIDS
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  // marginHorizontal: -90,
                  marginVertical: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      selected: "1",
                    })
                  }
                >
                  <View
                    style={{
                      backgroundColor:
                        this.state.selected == "1" ? "yellow" : "#087407",
                      borderColor:
                        this.state.selected == "1" ? "#087407" : "yellow",
                      borderWidth: 0.5,
                      borderRadius: 5,
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: this.state.selected == "1" ? "#000" : "yellow",
                        fontSize: 10,
                        fontWeight: "bold",
                        padding: 10,
                      }}
                    >
                      Freedom Deals
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      selected: "2",
                    })
                  }
                >
                  <View
                    style={{
                      backgroundColor:
                        this.state.selected == "2" ? "yellow" : "#087407",
                      borderColor:
                        this.state.selected == "2" ? "#087407" : "yellow",
                      borderWidth: 0.5,
                      borderRadius: 5,
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: this.state.selected == "2" ? "#000" : "yellow",
                        fontSize: 10,
                        fontWeight: "bold",
                        padding: 10,
                      }}
                    >
                      Haircut For Men & Kids
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      selected: "3",
                    })
                  }
                >
                  <View
                    style={{
                      backgroundColor:
                        this.state.selected == "3" ? "yellow" : "#087407",
                      borderColor:
                        this.state.selected == "3" ? "#087407" : "yellow",
                      borderWidth: 0.5,
                      borderRadius: 5,
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: this.state.selected == "3" ? "#000" : "yellow",
                        fontSize: 10,
                        fontWeight: "bold",
                        padding: 10,
                      }}
                    >
                      Freedom Deals
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      selected: "4",
                    })
                  }
                >
                  <View
                    style={{
                      backgroundColor:
                        this.state.selected == "4" ? "yellow" : "#087407",
                      borderColor:
                        this.state.selected == "4" ? "#087407" : "yellow",
                      borderWidth: 0.5,
                      borderRadius: 5,
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: this.state.selected == "4" ? "#000" : "yellow",
                        fontSize: 10,
                        fontWeight: "bold",
                        padding: 10,
                      }}
                    >
                      Freedom Deals
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      selected: "5",
                    })
                  }
                >
                  <View
                    style={{
                      backgroundColor:
                        this.state.selected == "5" ? "yellow" : "#087407",
                      borderColor:
                        this.state.selected == "5" ? "#087407" : "yellow",
                      borderWidth: 0.5,
                      borderRadius: 5,
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: this.state.selected == "5" ? "#000" : "yellow",
                        fontSize: 10,
                        fontWeight: "bold",
                        padding: 10,
                      }}
                    >
                      Freedom Deals
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      selected: "6",
                    })
                  }
                >
                  <View
                    style={{
                      backgroundColor:
                        this.state.selected == "6" ? "yellow" : "#087407",
                      borderColor:
                        this.state.selected == "6" ? "#087407" : "yellow",
                      borderWidth: 0.5,
                      borderRadius: 5,
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: this.state.selected == "6" ? "#000" : "yellow",
                        fontSize: 10,
                        fontWeight: "bold",
                        padding: 10,
                      }}
                    >
                      Freedom Deals
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={styles.topText}>Haircut For Men & Kids</Text>

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
                            <Text style={styles.numberText}>
                              {this.state.clicks}
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => this.IncrementItem()}
                          >
                            <Icon
                              name="plus"
                              color="#fff"
                              type="material-community"
                              size={16}
                              iconStyle={styles.icon2}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={styles.ratingConatiner}>
                      <Text style={styles.priceText}>{data.price}</Text>
                      <Text style={styles.ratingText1}>{data.price1}</Text>
                    </View>
                    <View style={styles.ratingConatiner}>
                      <Icon
                        name="timer-outline"
                        color="#000"
                        type="material-community"
                        size={16}
                        iconStyle={styles.icon}
                      />
                      <Text style={styles.timeText}>{data.time}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("Haircut")
                        }
                      >
                        <Text style={styles.detailsText}>View Details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.greenBottomContainer}
            onPress={() => this.props.navigation.navigate("")}
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
    marginBottom: 250,
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
  priceText: {
    fontWeight: "bold",
    fontSize: 10,
    marginRight: 8,
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
    width: 110,
    marginVertical: 10,
  },
  detailsText: {
    fontSize: 14,
    padding: 3,
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    backgroundColor: "#1F293B",
    borderRadius: 5,
    marginTop: 14,
  },

  topContinaer: {
    flex: 0.82,
  },
  bottomContainer: {
    flex: 0.18,
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
    marginHorizontal: 10,
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
