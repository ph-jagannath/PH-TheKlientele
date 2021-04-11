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
    name: "Rachit Kumar Sharma ",
    service: "Haircut  uih ejdhuewfh iew",
    gender: "Male",
    time: "2:30pm",
    date: "10-04-2021",
    bookingId: "1243242",
    Price: "10",
    image: require("../../assets/male_active.png"),
  },
  {
    key: "s1",
    name: "Rachit Kumar Sharma ",
    service: "Haircut  uih ejdhuewfh iew",
    gender: "Male",
    time: "2:30pm",
    date: "10-04-2021",
    bookingId: "1243242",
    Price: "10",
    image: require("../../assets/male_active.png"),
  },
  {
    key: "s1",
    name: "Rachit Kumar Sharma ",
    service: "Haircut  uih ejdhuewfh iew",
    gender: "Male",
    time: "2:30pm",
    date: "10-04-2021",
    bookingId: "1243242",
    Price: "10",
    image: require("../../assets/male_active.png"),
  },
  {
    key: "s1",
    name: "Rachit Kumar Sharma ",
    service: "Haircut  uih ejdhuewfh iew",
    gender: "Male",
    time: "2:30pm",
    date: "10-04-2021",
    bookingId: "1243242",
    Price: "10",
    image: require("../../assets/male_active.png"),
  },
  {
    key: "s1",
    name: "Rachit Kumar Sharma ",
    service: "Haircut  uih ejdhuewfh iew",
    gender: "Male",
    time: "2:30pm",
    date: "10-04-2021",
    bookingId: "1243242",
    Price: "10",
    image: require("../../assets/male_active.png"),
  },
  {
    key: "s1",
    name: "Rachit Kumar Sharma ",
    service: "Haircut  uih ejdhuewfh iew",
    gender: "Male",
    time: "2:30pm",
    date: "10-04-2021",
    bookingId: "1243242",
    Price: "10",
    image: require("../../assets/male_active.png"),
  },
];
LogBox.ignoreAllLogs();
export default class artistScreen extends Component {
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
                  onPress={() => this.props.navigation.navigate("")}
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
                <Text style={styles.headerText}> Artists</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.artistContainer}>
            <Text style={styles.detailsText1}> + ADD NEW ARTIST</Text>
          </TouchableOpacity>
          <View style={{ marginHorizontal: 20 }}>
            {/* <Text style={styles.topText}>Haircut For Men & Kids</Text> */}

            <View style={styles.flatlist}>
              <FlatList
                //   horizontal
                showsVerticalScrollIndicator={false}
                data={this.state.data}
                renderItem={({ item: data }) => (
                  <View>
                    {/* <Image source={data.image} style={styles.image} /> */}
                    <View
                      style={{
                        // flexDirection: "row",
                        // justifyContent: "space-between",
                        borderColor: "green",
                        borderWidth: 2,
                        marginVertical: 10,
                        borderRadius: 20,
                      }}
                    >
                      <TouchableOpacity>
                        <Image source={data.image} style={styles.image} />
                      </TouchableOpacity>
                      <View>
                        <View style={styles.textContainer1}>
                          <Text style={styles.leftText}> Name : </Text>
                          <Text style={styles.rightText1}>{data.name}</Text>
                        </View>
                        <View style={styles.textContainer1}>
                          <Text style={styles.leftText}>Specility : </Text>
                          <Text style={styles.rightText1}>{data.service}</Text>
                        </View>

                        <View>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <View style={styles.textContainer2}>
                              <Text style={styles.leftText}>
                                Total Services :
                              </Text>
                              <Text style={styles.rightText}>{data.Price}</Text>
                            </View>
                            <View style={styles.textContainer2}>
                              <Text style={styles.leftText}>Gender : </Text>
                              <Text style={styles.rightText}>
                                {data.gender}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.detailsContainer1}>
                        <TouchableOpacity
                          onPress={() => this.props.navigation.navigate("")}
                        >
                          <Text style={styles.detailsText1}>View Licence</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
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
    height: 80,
    width: 80,
    resizeMode: "cover",
    borderRadius: 40,
    alignSelf: "center",
    // marginRight: 20,
    marginTop: 10,
  },
  flatlist: {
    // height: 300,
    marginTop: 30,
    justifyContent: "center",
    marginBottom: 10,
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
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 60,
    marginVertical: 5,
  },
  leftText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  rightText: {
    fontSize: 14,
    // fontWeight: "bold",
    alignSelf: "center",
    color: "#000",
    width: 80,
  },

  rightText1: {
    fontSize: 14,
    // fontWeight: "bold",
    alignSelf: "center",
    color: "#000",
    width: 260,
  },
  textContainer1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  textContainer2: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  detailsContainer1: {
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 40,
    width: 180,
    marginVertical: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  detailsText1: {
    fontSize: 10,
    fontWeight: "bold",
    padding: 10,
    alignSelf: "center",
    color: "#000",
  },
  textContainer3: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    // marginHorizontal: 10,
    marginVertical: 5,
    marginLeft: -8,
  },
  artistContainer: {
    borderRadius: 10,
    borderColor: "green",
    borderWidth: 2,
    alignSelf: "center",
  },
});
