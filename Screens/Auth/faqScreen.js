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

export default class faqScreen extends Component {
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
              <Text style={styles.headerText}>FAQ</Text>
            </View>
          </View>
        </View>

        <Text>
          Dolores stet sanctus sed dolor stet, sadipscing ut et ipsum ea. Labore
          diam clita lorem et, amet et takimata at.Gubergren nonumy et takimata
          clita lorem ipsum justo diam. Et tempor sed tempor et, justo eirmod
          duo amet et dolor ut rebum dolor labore. Erat tempor sed dolor
          sadipscing consetetur voluptua dolores nonumy. Lorem stet clita sit
          sit dolor, aliquyam nonumy dolor eirmod et gubergren. Vero elitr
          gubergren magna stet sit. Kasd sed elitr kasd est takimata no et. Eos
          amet et diam amet tempor invidunt, duo erat amet nonumy sea sed magna,
          sadipscing sadipscing diam consetetur sea dolor rebum, magna aliquyam
          et et sadipscing sed, amet et dolore dolore eirmod. Lorem erat eirmod
          labore elitr labore lorem takimata clita, et diam vero est nonumy
          clita sed sed, dolores clita labore diam lorem dolor gubergren.
          Consetetur consetetur dolore et rebum amet. Dolore sed vero dolore
          takimata nonumy et eirmod et. Et invidunt eos labore ea erat duo ipsum
          elitr. Dolor stet ea erat diam diam invidunt ipsum et invidunt, rebum
          sadipscing et magna gubergren sit clita dolor diam invidunt. Justo
          consetetur ut kasd takimata dolores gubergren. Kasd sed sed accusam
          aliquyam. Invidunt sed sed sanctus sadipscing lorem sit. Tempor vero
          justo et justo takimata ea tempor at, magna consetetur vero duo sit
          no. Elitr kasd sea diam sit. Ipsum et.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    // marginTop: 50,
    // marginHorizontal: 10,
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
});
