import React, { Component } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import BankDetails from "./bank_details.svg";
import BrokerageDetails from "./brokerage_details.svg";
import FatcaDetails from "./fatca_details.svg";
import NomineeDetails from "./nominee_details.svg";
import PersonalDetails from "./personal_details.svg";
import DocumentsSvg from "./documents.svg";
import GreenTickIcon from "./green_tick_circle.svg";

const ListData = [
  {
    LabelName: "eDIS-Demat",
    IconName: PersonalDetails
  },
  {
    LabelName: "Margin Pledge",
    IconName: BrokerageDetails
  },
  {
    LabelName: "Client Settlement",
    IconName: BrokerageDetails
  },
  {
    LabelName: "Client Report",
    IconName: BrokerageDetails
  },
  {
    LabelName: "Client Report",
    IconName: BrokerageDetails
  }
];
class QuickLinks extends Component {
  renderItem = ({ item }) => {
    const { LabelName, IconName } = item; // Destructuring array created for flatlist
    return (
      <View style={styles.SvgImageUserStyle}>
        <IconName height={22} width={22} />
        <Text style={styles.TextStyle}>
          {LabelName}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.MainView}>
        <View style={styles.MainViewChild}>
          <View style={styles.HeaderView}>
            <Text style={styles.TextStyleHead}> Quick Links </Text>
          </View>
          <FlatList
            numColumns={3}
            data={ListData}
            renderItem={item => this.renderItem(item)}
          />
          {/* </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "flex-end"
  },
  MainViewChild: {
    margin: 5,
    backgroundColor: "#161621",
    borderRadius: 10,
    paddingBottom: 10,
    marginBottom: 20
  },
  TextStyleHead: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#3C81F0"
  },
  HeaderView: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#303656"
  },
  SvgImageUserStyle: {
    flexDirection: "row",
    // marginVertical: 10,
    marginTop: 20,
    marginStart: 10,
    padding: 10,
    width: "46%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#545454",
    backgroundColor: "#000000"
  },
  TextStyle: {
    fontSize: 15,
    // fontWeight: "bold",
    alignSelf: "center",
    paddingStart: 10,
    color: "white"
  }
});

export default QuickLinks;
