import React, { Component } from "react";

import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import global from "../../global";
import RadioButtonRN from "radio-buttons-react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { Divider, Icon } from "react-native-elements";

const DATA = [
  {
    key: "s1",
    title: "Klientele",
    description: "Save upto 60% off Klintele  ",
    promo_code: "K34N56",
  },
  {
    key: "s1",
    title: "Klientele",
    description: "Save upto 60% off Klintele  ",
    promo_code: "K34N56",
  },
  {
    key: "s1",
    title: "Klientele",
    description: "Save upto 60% off Klintele  ",
    promo_code: "K34N56",
  },
  {
    key: "s1",
    title: "Klientele",
    description: "Save upto 60% off Klintele  ",
    promo_code: "K34N56",
  },
];
export default class promoCodeScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
    };
  }
  render() {
    return (
      <View style={styles.bgContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.iconContaier}>
            <View style={{ width: 40 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Payment")}
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
              <Text style={styles.headerText}>Promo Codes</Text>
            </View>
          </View>
        </View>

        <View style={styles.flatlist}>
          <FlatList
            //   horizontal
            showsVerticalScrollIndicator={false}
            data={this.state.data}
            renderItem={({ item: data }) => (
              <View>
                <View style={styles.offerContainer}>
                  <View style={styles.promoContainer}>
                    <Text style={styles.titleText}>{data.title}</Text>
                    <Text style={styles.descriptionText}>
                      {data.description}
                    </Text>
                    <View style={styles.promoBackContainer}>
                      <View style={styles.codeContainer}>
                        <Text style={styles.promoText}>{data.promo_code}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("Payment")
                        }
                      >
                        <Text style={styles.applyText}>APPLY</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
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
  offerContainer: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  flatlist: {
    // height: 300,
    marginTop: 30,
    justifyContent: "center",
    marginBottom: 10,
    // marginHorizontal: "3%"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  promoContainer: {
    marginHorizontal: 10,
  },
  descriptionText: {
    fontSize: 16,
    // color: "gray",
  },
  codeContainer: {
    borderColor: "gray",

    borderWidth: 2,
    borderRadius: 10,
  },
  applyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    alignSelf: "center",
  },
  promoBackContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  promoText: {
    fontWeight: "bold",
    fontSize: 14,
    padding: 10,
  },
});
